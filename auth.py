from flask import Blueprint, session, redirect, url_for, jsonify
from db import get_db

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')


@auth_bp.route('/login/<provider>')
def login(provider):
    return f"Здесь будет OAuth через {provider}"


@auth_bp.route('/logout')
def logout():
    session.clear()
    return redirect('/')
