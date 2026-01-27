from flask import Flask, redirect, request, session, render_template, jsonify  # Импортируем jsonify
import os
import requests
import sqlite3  # Импортируем sqlite3
from database import create_tables, add_user
# В app.py
import random
import string

# Импортируем waitress
from waitress import serve

def generate_unique_id():
    """Генерация уникального ID для клиента (для фронтенда)"""
    length = 8
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

app = Flask(__name__)
app.secret_key = os.urandom(24)

from dotenv import load_dotenv


# Загружаем переменные из .env файла
load_dotenv()

# Теперь получаем значения переменных окружения
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
YANDEX_CLIENT_ID = os.getenv("YANDEX_CLIENT_ID")
YANDEX_CLIENT_SECRET = os.getenv("YANDEX_CLIENT_SECRET")
def get_google_provider_cfg():
    try:
        return requests.get(
            GOOGLE_DISCOVERY_URL,
            timeout=5
        ).json()
    except requests.exceptions.RequestException as e:
        print("Google OAuth error:", e)
        return None

# -------------------- Главная --------------------
@app.route("/")
def home():
    return render_template("index.html")

# -------------------- Смена аккаунта --------------------
@app.route("/switch_account")
def switch_account():
    session.pop("user", None)
    provider = request.args.get("provider")
    if provider == "yandex":
        return redirect("/login/yandex")
    else:
        return redirect("/login/google")

# -------------------- Google OAuth --------------------
@app.route("/login/google")
def google_login():
    google_cfg = get_google_provider_cfg()
    if not google_cfg:
        return "Google OAuth недоступен. Попробуйте позже.", 503

    authorization_endpoint = google_cfg["authorization_endpoint"]
    redirect_uri = "https://dobrosovet.github.io/oauth2callback"

    return redirect(
        f"{authorization_endpoint}"
        f"?response_type=code"
        f"&client_id={GOOGLE_CLIENT_ID}"
        f"&redirect_uri={redirect_uri}"
        f"&scope=openid%20email%20profile"
        f"&prompt=select_account"
    )

@app.route("/oauth2callback")
def google_callback():
    code = request.args.get("code")
    if not code:
        return "Ошибка: код не получен", 400

    google_cfg = get_google_provider_cfg()
    token_endpoint = google_cfg["token_endpoint"]
    redirect_uri = "https://dobrosovet.github.io/oauth2callback"

    token_response = requests.post(
        token_endpoint,
        data={
            "code": code,
            "client_id": GOOGLE_CLIENT_ID,
            "client_secret": GOOGLE_CLIENT_SECRET,
            "redirect_uri": redirect_uri,
            "grant_type": "authorization_code",
        },
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    ).json()

    if "access_token" not in token_response:
        return f"Ошибка токена: {token_response}", 400

    access_token = token_response["access_token"]
    userinfo_endpoint = google_cfg["userinfo_endpoint"]
    user_info = requests.get(
        userinfo_endpoint,
        headers={"Authorization": f"Bearer {access_token}"}
    ).json()

    add_user(
        "google",
        user_info["sub"],
        user_info.get("name"),
        user_info.get("email"),
        user_info.get("picture")
    )

    session["user"] = {
        "provider": "google",
        "id": user_info["sub"],
        "name": user_info.get("name"),
        "email": user_info.get("email"),
        "avatar": user_info.get("picture"),
    }
    return redirect("/")

# -------------------- Yandex OAuth --------------------
@app.route("/login/yandex")
def yandex_login():
    redirect_uri = "https://dobrosovet.github.io/yandex/callback"
    return redirect(
        "https://oauth.yandex.ru/authorize"
        f"?response_type=code"
        f"&client_id={YANDEX_CLIENT_ID}"
        f"&redirect_uri={redirect_uri}"
        "&force_confirm=yes"  # всегда спрашивает аккаунт
    )

@app.route("/yandex/callback")
def yandex_callback():
    code = request.args.get("code")
    if not code:
        return "Ошибка Яндекс OAuth", 400

    token_response = requests.post(
        "https://oauth.yandex.ru/token",
        data={
            "grant_type": "authorization_code",
            "code": code,
            "client_id": YANDEX_CLIENT_ID,
            "client_secret": YANDEX_CLIENT_SECRET,
        },
    ).json()

    if "access_token" not in token_response:
        return f"Ошибка токена: {token_response}", 400

    access_token = token_response["access_token"]

    user_info = requests.get(
        "https://login.yandex.ru/info",
        headers={"Authorization": f"OAuth {access_token}"}
    ).json()

    avatar_url = None
    if user_info.get("default_avatar_id"):
        avatar_url = f"https://avatars.yandex.net/get-yapic/{user_info['default_avatar_id']}/islands-200"

    add_user(
        "yandex",
        user_info["id"],
        user_info.get("real_name"),
        user_info.get("default_email"),
        avatar_url
    )

    session["user"] = {
        "provider": "yandex",
        "id": user_info["id"],
        "name": user_info.get("real_name"),
        "email": user_info.get("default_email"),
        "avatar": avatar_url,
    }

    return redirect("/")

# -------------------- Ситуации --------------------
@app.route("/situation1")
def situation1():
    return render_template("situation1.html")

@app.route("/situation2")
def situation2():
    return render_template("situation2.html")

@app.route("/situation3")
def situation3():
    return render_template("situation3.html")

@app.route("/situation4")
def situation4():
    return render_template("situation4.html")

@app.route("/situation5")
def situation5():
    return render_template("situation5.html")

# -------------------- Выход --------------------
@app.route("/logout", methods=["POST"])
def logout():
    session.pop("user", None)
    return redirect("/")

# -------------------- Пользователи --------------------
@app.route("/users")
def show_users():
    if "user" not in session:
        return "Сначала авторизуйтесь!", 403

    import sqlite3
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()
    cursor.execute("SELECT name, email, avatar FROM users")
    users = cursor.fetchall()
    conn.close()

    html = "<h2>Зарегистрированные пользователи</h2>"
    html += "<table border='1' cellpadding='5'><tr><th>Имя</th><th>Email</th><th>Avatar</th></tr>"
    for name, email, avatar in users:
        html += f"<tr><td>{name}</td><td>{email}</td><td><img src='{avatar}' width='50'></td></tr>"
    html += "</table>"

    return html

@app.route('/add_review', methods=['POST'])
def add_review():
    if 'user' not in session:
        return jsonify({'error': 'Пользователь не авторизован'}), 403

    text = request.json.get('text')
    if not text:
        return jsonify({'error': 'Пустой отзыв'}), 400

    # Генерация client_id для фронтенда
    client_id = generate_unique_id()  # Функция генерации уникального ID

    try:
        conn = sqlite3.connect('app.db')
        cursor = conn.cursor()

        # Получаем внутренний id пользователя
        cursor.execute('SELECT id FROM users WHERE oauth_id=? AND provider=?', 
                       (session['user']['id'], session['user']['provider']))
        row = cursor.fetchone()

        if not row:
            return jsonify({'error': 'Пользователь не найден'}), 400

        user_id = row[0]

        # Вставляем отзыв в базу данных
        cursor.execute(
            'INSERT INTO reviews (user_id, text, client_id) VALUES (?, ?, ?)',
            (user_id, text, client_id)
        )

        conn.commit()
        conn.close()

        return jsonify({'message': 'Отзыв добавлен успешно'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/reviews', methods=['GET'])
def get_reviews():
    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()

    banned = False
    user_id = None

    # Проверяем авторизацию + бан
    if 'user' in session:
        email = session['user']['email']
        cursor.execute('SELECT id, banned FROM users WHERE email=?', (email,))
        row = cursor.fetchone()

        if row:
            user_id = row[0]
            banned = row[1] == 1

            # Обновляем бан в сессии
            session['user']['banned'] = 1 if banned else 0

    # Если забанен — показываем пусто
    if banned:
     conn.close()
     return jsonify({'banned': True, 'reviews': []})


    # Дальше отдаём отзывы (видит и гость и юзер)
    cursor.execute('''
        SELECT
            r.id,
            r.text,
            r.client_id,
            r.created_at,
            u.name,
            u.avatar,
            COALESCE(
                (SELECT COUNT(*) FROM likes l
                 WHERE l.review_id = r.id AND l.liked = 1),
                0
            ) AS like_count
        FROM reviews r
        JOIN users u ON r.user_id = u.id
        WHERE r.is_deleted = 0
        ORDER BY r.id DESC
    ''')

    # Преобразуем в словари
    reviews = [
        dict(zip(
            [c[0] for c in cursor.description], row
        )) for row in cursor.fetchall()
    ]

    # Проставляем liked
    if user_id:
        cursor.execute(
            'SELECT review_id FROM likes WHERE user_id=? AND liked=1',
            (user_id,)
        )
        liked_reviews = {row[0] for row in cursor.fetchall()}
        for review in reviews:
            review['liked'] = review['id'] in liked_reviews
    else:
        for review in reviews:
            review['liked'] = False

    conn.close()
    return jsonify(reviews)

@app.route('/delete_review', methods=['POST'])
def delete_review():
    print("Запрос на удаление отзыва получен")  # Логируем запрос
    if 'user' not in session:
        return jsonify({'error': 'Не авторизован'}), 403

    client_id = request.json.get('client_id')
    if not client_id:
        return jsonify({'error': 'Нет client_id'}), 400

    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()

    # Сначала находим внутренний ID пользователя
    cursor.execute(
        'SELECT id FROM users WHERE oauth_id=? AND provider=?',
        (session['user']['id'], session['user']['provider'])
    )
    user_row = cursor.fetchone()
    if not user_row:
        conn.close()
        return jsonify({'error': 'Пользователь не найден'}), 404

    user_id = user_row[0]

    # Теперь ищем отзыв по client_id и внутреннему user_id
    cursor.execute(
        'SELECT id FROM reviews WHERE client_id=? AND user_id=? AND is_deleted=0',
        (client_id, user_id)
    )
    review = cursor.fetchone()

    if not review:
        conn.close()
        return jsonify({'error': 'Отзыв не найден или уже удалён'}), 404

    cursor.execute(
        'UPDATE reviews SET is_deleted = 1 WHERE client_id = ? AND user_id = ?',
        (client_id, user_id)
    )

    conn.commit()
    conn.close()

    print(f"Отзыв с client_id {client_id} удалён")  # Логируем успешное удаление
    return jsonify({'message': 'Отзыв удалён'}), 200


@app.route('/like_state/<int:review_id>', methods=['GET'])
def get_like_state(review_id):
    if 'user' not in session:
        return jsonify({'error': 'Не авторизован'}), 403

    user_id = session['user']['id']

    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()
    cursor.execute(
        'SELECT liked FROM likes WHERE user_id=? AND review_id=?',
        (user_id, review_id)
    )
    row = cursor.fetchone()
    conn.close()

    return jsonify({'liked': bool(row[0])}) if row else jsonify({'liked': False})

@app.route('/toggle_like', methods=['POST'])
def toggle_like():
    if 'user' not in session:
        return jsonify({'error': 'Не авторизован'}), 403

    user_id = session['user']['id']
    review_id = request.json.get('review_id')
    if not review_id:
        return jsonify({'error': 'Нет review_id'}), 400

    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()

    # Проверяем, был ли уже поставлен лайк
    cursor.execute(
        'SELECT id FROM likes WHERE user_id=? AND review_id=?',
        (user_id, review_id)
    )
    row = cursor.fetchone()

    if row:
        # Лайк уже существует, меняем его статус (снимаем или ставим)
        cursor.execute(
            'UPDATE likes SET liked = NOT liked WHERE user_id=? AND review_id=?',
            (user_id, review_id)
        )
    else:
        # Лайка нет — ставим
        cursor.execute(
            'INSERT INTO likes (user_id, review_id, liked) VALUES (?, ?, ?)',
            (user_id, review_id, 1)
        )

    conn.commit()
    conn.close()

    return jsonify({'message': 'Лайк обновлён'})

@app.route('/edit_review', methods=['POST'])
def edit_review():
    if 'user' not in session:
        return jsonify({'error': 'Не авторизован'}), 403

    review_id = request.json.get('review_id')
    new_text = request.json.get('new_text')
    if not review_id or not new_text:
        return jsonify({'error': 'Недостаточно данных'}), 400

    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()

    # Сначала находим внутренний ID пользователя
    cursor.execute(
        'SELECT id FROM users WHERE oauth_id=? AND provider=?',
        (session['user']['id'], session['user']['provider'])
    )
    user_row = cursor.fetchone()
    if not user_row:
        conn.close()
        return jsonify({'error': 'Пользователь не найден'}), 404

    user_id = user_row[0]

    # Проверяем, существует ли такой отзыв у данного пользователя
    cursor.execute(
        'SELECT id FROM reviews WHERE id=? AND user_id=? AND is_deleted=0',
        (review_id, user_id)
    )
    review = cursor.fetchone()

    if not review:
        conn.close()
        return jsonify({'error': 'Отзыв не найден или уже удалён'}), 404

    # Обновляем текст отзыва
    cursor.execute(
        'UPDATE reviews SET text = ? WHERE id = ? AND user_id = ?',
        (new_text, review_id, user_id)
    )

    conn.commit()
    conn.close()

    return jsonify({'message': 'Отзыв обновлён успешно'}), 200

@app.route('/admin/delete_review/<int:review_id>', methods=['POST'])
def admin_delete_review(review_id):
    if 'user' not in session:
        return jsonify({'error': 'Не авторизован'}), 403

    user_email = session['user'].get('email')

    # Проверяем, является ли пользователь администратором
    if user_email != "v.pupkow@yandex.ru":
        return jsonify({'error': 'У вас нет прав для удаления отзывов'}), 403

    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()

    # Ищем отзыв по ID
    cursor.execute('SELECT id FROM reviews WHERE id = ? AND is_deleted = 0', (review_id,))
    review = cursor.fetchone()

    if not review:
        conn.close()
        return jsonify({'error': 'Отзыв не найден или уже удалён'}), 404

    # Обновляем статус отзыва на удалённый
    cursor.execute('UPDATE reviews SET is_deleted = 1 WHERE id = ?', (review_id,))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Отзыв удалён администратором'}), 200


# Пример исправления в обработчике для админ панели
@app.route('/admin')
def admin_panel():
    # Проверка, есть ли в сессии пользователь
    if 'user' in session:
        user_email = session['user'].get('email')

        # Проверка, является ли email пользователя твоим
        if user_email == "v.pupkow@yandex.ru":
            # Получаем данные для панели
            conn = sqlite3.connect('app.db')
            cursor = conn.cursor()

            cursor.execute('''
            SELECT r.id, r.text, r.created_at, u.name, r.client_id, u.id AS user_id
            FROM reviews r
            JOIN users u ON r.user_id = u.id
            WHERE r.is_deleted = 0
            ORDER BY r.created_at DESC
            ''')

            reviews = cursor.fetchall()

            reviews = [
            {
                'id': review[0],
                'text': review[1],
                'created_at': review[2],
                'name': review[3],
                'client_id': review[4],
                'user_id': review[5]
            }
            for review in reviews
            ]

            cursor.execute('SELECT id, name, email FROM users WHERE banned = 1')
            banned_users = cursor.fetchall()

            banned_users = [
                {'id': user[0], 'name': user[1], 'email': user[2]}
                for user in banned_users
            ]
            
            conn.close()

            return render_template('admin_panel.html', reviews=reviews, banned_users=banned_users)

    # Если в сессии нет пользователя или email не совпадает, показываем запрет
    return "Доступ запрещен", 403


@app.route('/admin/ban_user/<int:user_id>', methods=['POST'])
def admin_ban_user(user_id):
    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()
    cursor.execute('UPDATE users SET banned = 1 WHERE id = ?', (user_id,))
    conn.commit()

    # Обновляем сессию, если это текущий пользователь
    if 'user' in session:
        cursor.execute('SELECT email FROM users WHERE id=?', (user_id,))
        row = cursor.fetchone()
        if row and session['user']['email'] == row[0]:
            session['user']['banned'] = 1  # Обновляем статус в сессии

    conn.close()
    return redirect('/admin?message=Пользователь+заблокирован')


@app.route('/admin/unban_user/<int:user_id>', methods=['POST'])
def admin_unban_user(user_id):
    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()
    
    # Разблокировать пользователя
    cursor.execute('UPDATE users SET banned = 0 WHERE id = ?', (user_id,))
    conn.commit()
    conn.close()

    return redirect('/admin?message=Пользователь+разблокирован')

# -------------------- Запуск --------------------
if __name__ == "__main__":
    create_tables()
    
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))