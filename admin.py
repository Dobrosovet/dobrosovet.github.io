from flask import Flask, render_template, request, redirect, url_for
from database import get_reviews, delete_review, ban_user, get_banned_users

app = Flask(__name__)

@app.route("/admin")
def admin_panel():
    # Проверка, что пользователь админ (по email)
    if "user" not in session or session["user"].get("email") != "v.pupkow@yandex.ru":
        return "Доступ запрещен", 403  # Доступ только для администратора

    # Получаем все отзывы и заблокированных пользователей
    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()

    # Получаем отзывы
    cursor.execute('SELECT id, text, created_at, name FROM reviews r JOIN users u ON r.user_id = u.id WHERE r.is_deleted = 0 ORDER BY r.created_at DESC')
    reviews = cursor.fetchall()

    # Получаем заблокированных пользователей
    banned_users = get_banned_users()

    conn.close()
    
    return render_template("admin_panel.html", reviews=reviews, banned_users=banned_users)

if __name__ == '__main__':
    app.run(debug=True)
