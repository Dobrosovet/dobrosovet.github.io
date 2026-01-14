import sqlite3

conn = sqlite3.connect('app.db')
cursor = conn.cursor()

cursor.execute('DROP TABLE IF EXISTS reviews')

conn.commit()
conn.close()

print("✅ Таблица reviews удалена")
