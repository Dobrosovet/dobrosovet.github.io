// src/scripts/main.js
import { Header } from '../assets/components/Header.js';
import { MobileMenu } from '../assets/components/MobileMenu.js';
import { FloatingNav } from '../assets/components/FloatingNav.js';
import { initUI } from './ui.js';
import './router.js'; // Подключаем роутер, чтобы инициализировать window.navigateTo

// 1. Собираем базовый каркас приложения (Layout)
const app = document.getElementById('app');
app.innerHTML = `
    ${Header()}
    ${MobileMenu()}
    ${FloatingNav()}
    <main id="main-content" class="max-w-7xl mx-auto p-4 md:p-8"></main>
`;

// 2. Инициализируем иконки для базовой разметки (Header, Nav)
if (window.lucide) {
    lucide.createIcons();
}

// 3. Инициализируем логику интерфейса (меню)
initUI();

// 4. Загружаем стартовую страницу
window.navigateTo('home');