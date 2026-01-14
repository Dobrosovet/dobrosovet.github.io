import sqlite3

conn = sqlite3.connect("app.db")
cursor = conn.cursor()

# Посмотрим, какие таблицы есть
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Таблицы:", tables)

# Посмотрим колонки в таблице reviews
cursor.execute("PRAGMA table_info(reviews);")
columns = cursor.fetchall()
print("Колонки reviews:")
for col in columns:
    print(col)

# Посмотрим, что хранится в reviews
cursor.execute("SELECT * FROM reviews;")
rows = cursor.fetchall()
print("Отзывы:")
for row in rows:
    print(row)

conn.close()
