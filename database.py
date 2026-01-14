#database.py
import sqlite3

def create_tables():
    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()

    # Добавление колонки banned, если она не существует
    cursor.execute("PRAGMA table_info(users)")
    columns = [column[1] for column in cursor.fetchall()]
    
    if 'banned' not in columns:
        cursor.execute('ALTER TABLE users ADD COLUMN banned INTEGER DEFAULT 0')

    # Создание таблицы пользователей, если она не существует
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            provider TEXT NOT NULL,
            oauth_id TEXT NOT NULL,
            name TEXT NOT NULL,
            email TEXT,
            avatar TEXT,
            banned INTEGER DEFAULT 0  -- добавляем поле для блокировки пользователя
        )
    ''')

    # Таблица отзывов
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            text TEXT NOT NULL,
            client_id TEXT,              -- Добавляем уникальный ID для фронтенда
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_deleted INTEGER DEFAULT 0,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    ''')

    # Таблица лайков
    cursor.execute('''
       CREATE TABLE IF NOT EXISTS likes (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           user_id INTEGER NOT NULL,
           review_id INTEGER NOT NULL,
           liked INTEGER DEFAULT 1,  -- 1 если поставлен лайк
           FOREIGN KEY(user_id) REFERENCES users(id),
           FOREIGN KEY(review_id) REFERENCES reviews(id)
        )
    ''')

    conn.commit()
    conn.close()

def add_user(provider, oauth_id, name, email, avatar):
    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()

    cursor.execute('''
        INSERT INTO users (provider, oauth_id, name, email, avatar)
        VALUES (?, ?, ?, ?, ?)
    ''', (provider, oauth_id, name, email, avatar))

    conn.commit()
    conn.close()

# Функция для блокировки пользователя
def ban_user(email):
    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()
    cursor.execute('UPDATE users SET banned = 1 WHERE email = ?', (email,))
    conn.commit()
    conn.close()


# Функция для получения списка заблокированных пользователей
def get_banned_users():
    conn = sqlite3.connect('app.db')
    cursor = conn.cursor()
    cursor.execute('SELECT u.id, u.name, u.email FROM users u WHERE u.banned = 1')
    banned_users = cursor.fetchall()
    conn.close()
    return banned_users
