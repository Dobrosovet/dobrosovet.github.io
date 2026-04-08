// src/scripts/ui.js

export function initUI() {
    const menuBtn = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (menuBtn && closeBtn && overlay) {
        menuBtn.addEventListener('click', () => overlay.classList.remove('hidden'));
        closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
    }

    // ЛОГИКА ИСЧЕЗНОВЕНИЯ ПРИ СКРОЛЛЕ
    // Как только пользователь начинает листать, мы закрываем все открытые попапы статуса
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.status-popup').forEach(p => {
            if (!p.classList.contains('hidden')) {
                p.classList.add('hidden');
            }
        });
    }, { passive: true });
}

// Обновленная функция статуса (принимает event, чтобы клик не закрывался сразу)
window.toggleStatus = (event, popupId) => {
    if (event) event.stopPropagation(); // Останавливаем всплытие
    const popup = document.getElementById(popupId);
    
    // Закрываем другие, если они открыты
    document.querySelectorAll('.status-popup').forEach(p => {
        if (p.id !== popupId) p.classList.add('hidden');
    });
    
    popup.classList.toggle('hidden');
};

// Закрытие попапа при клике в любое пустое место экрана
document.addEventListener('click', () => {
    document.querySelectorAll('.status-popup').forEach(p => p.classList.add('hidden'));
});

window.toggleExpand = function(id) {
    const grid = document.getElementById(`grid-${id}`);
    const preview = document.getElementById(`preview-${id}`);
    const btn = document.getElementById(`btn-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    const isOpen = grid.classList.contains('is-open');

    if (!isOpen) {
        grid.classList.add('is-open');
        preview.classList.add('hidden');
        btn.innerText = 'Свернуть';
        icon.style.transform = 'rotate(180deg)';
    } else {
        grid.classList.remove('is-open');
        preview.classList.remove('hidden');
        btn.innerText = 'Читать полностью'; // Сделал текст чуть короче для мобилок
        icon.style.transform = 'rotate(0deg)';
    }
};

window.showRequisites = function() {
    document.getElementById('support-content').classList.add('hidden');
    document.getElementById('requisites').classList.remove('hidden');
};