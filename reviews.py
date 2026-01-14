#reviews.py
from flask import Blueprint, request, session, jsonify
from db import get_db
from datetime import datetime, timedelta

reviews_bp = Blueprint('reviews', __name__, url_prefix='/reviews')


def login_required():
    return 'user_id' in session


@reviews_bp.route('', methods=['POST'])
def create_review():
    if not login_required():
        return jsonify({'error': 'Unauthorized'}), 401

    text = request.json.get('text')

    editable_until = datetime.utcnow() + timedelta(hours=24)

    conn = get_db()
    conn.execute("""
        INSERT INTO reviews (user_id, text, editable_until)
        VALUES (?, ?, ?)
    """, (session['user_id'], text, editable_until))
    conn.commit()
    conn.close()

    return jsonify({'success': True})
