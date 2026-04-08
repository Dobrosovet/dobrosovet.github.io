// src/scripts/ui.js

export function initUI() {
    
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (menuBtn && closeBtn && overlay) {
        menuBtn.addEventListener('click', () => overlay.classList.remove('hidden'));
        closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
    }
}

// Привязываем функции к window, чтобы они работали из HTML-разметки (onclick="...")
window.toggleExpand = function(id) {
    const grid = document.getElementById(`grid-${id}`);
    const preview = document.getElementById(`preview-${id}`);
    const btn = document.getElementById(`btn-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    const isOpen = grid.classList.contains('is-open');

    if (!isOpen) {
        // Открываем
        grid.classList.add('is-open');
        preview.classList.add('hidden'); // Прячем обрубок текста
        btn.innerText = 'Свернуть';
        icon.style.transform = 'rotate(180deg)';
    } else {
        // Закрываем
        grid.classList.remove('is-open');
        preview.classList.remove('hidden'); // Возвращаем обрубок
        btn.innerText = 'Развернуть ситуацию';
        icon.style.transform = 'rotate(0deg)';
    }
};
window.showRequisites = function() {
    document.getElementById('support-content').classList.add('hidden');
    document.getElementById('requisites').classList.remove('hidden');
};
window.toggleStatus = (popupId) => {
    const popup = document.getElementById(popupId);
    
    // Прячем все остальные открытые попапы, чтобы на экране был только один (для красоты)
    document.querySelectorAll('.status-popup').forEach(p => {
        if (p.id !== popupId) {
            p.classList.add('hidden');
        }
    });
    
    // Открываем/закрываем тот, на который кликнули
    popup.classList.toggle('hidden');
};