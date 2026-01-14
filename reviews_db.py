#reviews_db.js
from flask import Flask, request, jsonify, session
from reviews_db import add_review, edit_review, delete_review, toggle_like, get_like_count
import sqlite3

app = Flask(__name__)

@app.route('/add_review', methods=['POST'])
def add_new_review():
    if 'user' not in session:
        return jsonify({'error': 'Пользователь не авторизован'}), 403

    user_id = session['user']['id']
    text = request.json.get('text')

    if not text:
        return jsonify({'error': 'Текст отзыва не может быть пустым'}), 400

    try:
        add_review(user_id, text)
        return jsonify({'message': 'Отзыв добавлен успешно'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/edit_review/<int:review_id>', methods=['POST'])
def edit_review_route(review_id):
    if 'user' not in session:
        return jsonify({'error': 'Пользователь не авторизован'}), 403

    user_id = session['user']['id']
    new_text = request.json.get('text')

    if not new_text:
        return jsonify({'error': 'Текст отзыва не может быть пустым'}), 400

    try:
        edit_review(user_id, review_id, new_text)
        return jsonify({'message': 'Отзыв успешно отредактирован'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/delete_review/<int:review_id>', methods=['POST'])
def delete_review_route(review_id):
    if 'user' not in session:
        return jsonify({'error': 'Пользователь не авторизован'}), 403

    user_id = session['user']['id']
    try:
        delete_review(user_id, review_id)
        return jsonify({'message': 'Отзыв удален успешно'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/like/<int:review_id>', methods=['POST'])
def like_review(review_id):
    if 'user' not in session:
        return jsonify({'error': 'Пользователь не авторизован'}), 403

    user_id = session['user']['id']
    action = toggle_like(user_id, review_id)
    
    return jsonify({'message': f'Отзыв {action} успешно'}), 200


@app.route('/like-count/<int:review_id>', methods=['GET'])
def like_count(review_id):
    count = get_like_count(review_id)
    return jsonify({'count': count}), 200

@app.route('/reviews', methods=['GET'])
def get_reviews():
    conn = sqlite3.connect('app.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("""
        SELECT r.id, r.user_id, r.text, u.name as username, u.avatar
        FROM reviews r
        JOIN users u ON r.user_id = u.id
        WHERE r.is_deleted IS NULL OR r.is_deleted = 0
        ORDER BY r.id DESC
    """)
    reviews = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return jsonify(reviews)

if __name__ == "__main__":
    app.run(debug=True)
