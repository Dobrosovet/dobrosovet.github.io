document.addEventListener('DOMContentLoaded', () => {
  // --- 💳 МОДАЛЬНОЕ ОКНО ДОНАТА ---
  const donateBtn = document.getElementById('donateBtn');
  const modal = document.getElementById('donateModal');
  const closeBtn = document.getElementById('modalClose');
  const revealBtn = document.getElementById('revealBtn');
  const copyBtn = document.getElementById('copyBtn');
  const cardNumberEl = document.getElementById('cardNumber');
  const cardHolderEl = document.getElementById('cardHolder');
  const donateBtnProjects = document.getElementById('donateBtnProjects');
  const CARD_NUMBER_FULL = '2200 2706 3397 7189';
  let revealed = false;

  const toggleModal = (modal, action) => {
    modal.setAttribute('aria-hidden', action === 'show' ? 'false' : 'true');
  };

  // Кнопки доната
  const openDonateModal = (e) => {
    toggleModal(modal, 'show');
    const last4 = CARD_NUMBER_FULL.replace(/\s+/g, '').slice(-4);
    cardNumberEl.textContent = `•••• •••• •••• ${last4}`;
  };

  donateBtnProjects?.addEventListener('click', openDonateModal);
  donateBtn?.addEventListener('click', openDonateModal);
  closeBtn?.addEventListener('click', () => toggleModal(modal, 'hide'));

  // Разворачиваем/скрываем номер карты
  revealBtn?.addEventListener('click', () => {
    if (!revealed) {
      cardNumberEl.textContent = CARD_NUMBER_FULL;
      revealBtn.textContent = 'Скрыть номер';
    } else {
      const last4 = CARD_NUMBER_FULL.replace(/\s+/g, '').slice(-4);
      cardNumberEl.textContent = `•••• •••• •••• ${last4}`;
      revealBtn.textContent = 'Показать номер';
    }
    revealed = !revealed;
  });

  // Копировать номер карты
  copyBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CARD_NUMBER_FULL);
      copyBtn.textContent = 'Скопировано';
      setTimeout(() => (copyBtn.textContent = 'Копировать'), 1500);
    } catch {
      alert(`Не удалось автоматически скопировать. Скопируйте вручную: ${CARD_NUMBER_FULL}`);
    }
  });

  // Закрытие модального окна при клике вне его
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) toggleModal(modal, 'hide');
  });

  // --- 🔐 МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ ---
  const authModal = document.getElementById('authModal');
  const openAuthBtn = document.getElementById('openAuth');
  const closeAuthBtn = document.getElementById('closeAuth');

  openAuthBtn?.addEventListener('click', () => {
    authModal.style.display = 'flex';
  });

  closeAuthBtn?.addEventListener('click', () => {
    authModal.style.display = 'none';
  });

  // Закрытие авторизационного окна при клике вне его
  authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.style.display = 'none';
    }
  });

  // --- 📖 ФУНКЦИЯ РАЗВОРАЧИВАНИЯ ТЕКСТА ---
  const cards = document.querySelectorAll('.case-card');

  cards.forEach(card => {
    const toggleBtn = card.querySelector('.toggle-btn');
    const situationText = card.querySelector('.situation-text');
    const btn = card.querySelector('.btn');

    if (!toggleBtn || !situationText) return;

    // Исходное состояние
    situationText.style.maxHeight = '120px';
    card.style.maxHeight = '180px';

    toggleBtn.addEventListener('click', () => {
      const isExpanded = situationText.classList.toggle('expanded');
      card.classList.toggle('expanded', isExpanded);

      const fullHeight = situationText.scrollHeight + 80;

      situationText.style.transition = 'max-height 0.4s ease';
      situationText.style.maxHeight = isExpanded ? `${fullHeight}px` : '120px';
      card.style.maxHeight = isExpanded ? `${fullHeight + 40}px` : '180px';

      toggleBtn.innerHTML = isExpanded ? '▲ Свернуть' : '▼ Развернуть';
      btn && (btn.style.opacity = isExpanded ? 1 : 0);
    });

    window.addEventListener('resize', () => {
      if (situationText.classList.contains('expanded')) {
        const fullHeight = situationText.scrollHeight + 80;
        situationText.style.maxHeight = `${fullHeight}px`;
        card.style.maxHeight = `${fullHeight + 40}px`;
      }
    });
  });
  // Инициализация отзывов после загрузки страницы
  initReviews();
});

// --- Функция для переключения вкладок ---
function showPage(pageId, event) {
  event.preventDefault();

  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));

  const page = document.getElementById(pageId);
  page.classList.add('active');
}
