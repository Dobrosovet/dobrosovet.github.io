// src/scripts/router.js
import { HomePage } from '../pages/home.js';
import { AboutPage } from '../pages/about.js';
import { ServicesPage } from '../pages/services.js';
import { SituationsPage } from '../pages/situations.js';
import { ContactsPage } from '../pages/contacts.js';
import { SupportPage } from '../pages/support.js';
import { SituationDetailPage } from '../pages/situationDetail.js';

const routes = {
    'home': HomePage,
    'about': AboutPage,
    'services': ServicesPage,
    'situations': SituationsPage,
    'contacts': ContactsPage,
    'support': SupportPage,
    'situation-detail': SituationDetailPage
};

// ОСТАВЛЯЕМ ТОЛЬКО ОДНУ ВЕРСИЮ ФУНКЦИИ
window.navigateTo = function(pageId, extraData = null) {
    const mainContent = document.getElementById('main-content');
    
    if (routes[pageId]) {
        // Вызываем функцию страницы и передаем в неё ID (extraData)
        // Если это обычная страница, она просто проигнорирует этот аргумент
        mainContent.innerHTML = `<div class="page-wrapper">${routes[pageId](extraData)}</div>`;
        
        // Обновляем иконки
        if (window.lucide) {
            lucide.createIcons();
        }

        updateNavState(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Закрываем мобильное меню
        const overlay = document.getElementById('mobile-menu-overlay');
        if (overlay && !overlay.classList.contains('hidden')) {
            overlay.classList.add('hidden');
        }
    } else {
        console.error(`Страница ${pageId} не найдена!`);
    }
};

function updateNavState(activePage) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.page === activePage) {
            link.classList.add('text-blue-600', 'bg-blue-50');
        } else {
            link.classList.remove('text-blue-600', 'bg-blue-50');
        }
    });

    document.querySelectorAll('.float-btn').forEach(btn => {
        if (btn.dataset.page === activePage) {
            btn.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-200');
            btn.classList.remove('text-slate-400');
        } else {
            btn.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-200');
            btn.classList.add('text-slate-400', 'hover:text-slate-600');
        }
    });
}