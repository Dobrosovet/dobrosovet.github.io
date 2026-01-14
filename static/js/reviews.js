console.log('reviews.js загружен');

// ================================
// ФУНКЦИИ УТИЛИТЫ
// ================================

// Генерация уникального ID для фронтенда
function generateUniqueId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const length = 8;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

// Проверка дублирования отзыва на фронтенде
function isDuplicate(content) {
  const allReviews = document.querySelectorAll('.message-wrapper');
  for (let review of allReviews) {
    const reviewText = review.querySelector('.message p').innerHTML.trim();
    if (reviewText === content) return true;
  }
  return false;
}

// Форматирование времени из базы данных с учётом МСК (UTC+3)
function formatTimeFromDB(timestamp) {
  const date = new Date(timestamp);

  // Устанавливаем время по МСК (UTC + 3)
  const mskOffset = 3 * 60;  // 3 часа в минутах
  const mskDate = new Date(date.getTime() + (mskOffset * 60 * 1000)); // Добавляем сдвиг

  // Форматируем по МСК
  return mskDate.toLocaleString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 24-часовой формат
  });
}


// ================================
// ИНИЦИАЛИЗАЦИЯ ОТЗЫВОВ
// ================================

let reviewsInitialized = false;

function initReviews() {
  if (reviewsInitialized) return;

  const container = document.getElementById('reviews');
  if (!container) return console.error('❌ Контейнер #reviews не найден');

  const btn = document.getElementById('sendReviewBtn');
  const text = document.getElementById('reviewText');
  const list = document.getElementById('reviewsList');

  // Данные текущего пользователя
  const currentUserName = container.dataset.username;
  const currentUserAvatar = container.dataset.avatar;

  // ================================
  // ОБРАБОТЧИК ВВОДА ТЕКСТА
  // ================================
  text.addEventListener('input', () => {
    text.style.height = 'auto';
    text.style.height = `${text.scrollHeight}px`;
    if (text.scrollHeight > 120) text.style.height = '120px';
    btn.classList.toggle('disabled', !text.value.trim());
  });

  // ================================
  // ОТПРАВКА ОТЗЫВА
  // ================================
  let editingReviewId = null;  // Для хранения ID редактируемого отзыва

  btn.onclick = async () => {
    if (currentUserName === 'Аноним') {
      const authModal = document.getElementById('authModal');
      if (authModal) {
        authModal.style.display = 'flex';
        authModal.setAttribute('aria-hidden', 'false');
      }
      return;
    }

    const content = text.value.trim();
    if (!content) return alert('Пусто');

    const formattedContent = content.replace(/\n/g, '<br>');
    const clientId = generateUniqueId();  // Генерируем уникальный client_id для отзыва

    if (editingReviewId) {
      // Редактируем существующий отзыв
      const response = await fetch('/edit_review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review_id: editingReviewId, new_text: formattedContent })  // Отправляем новый текст
      });

      const result = await response.json();
      if (result.message === 'Отзыв обновлён успешно') {
        updateReviewsList();
        text.value = '';
        text.style.height = 'auto';
        editingReviewId = null;  // Сбросим ID редактируемого отзыва
      }
    } else {
      // Добавляем новый отзыв
      const response = await fetch('/add_review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: formattedContent, client_id: clientId })
      });

      const result = await response.json();
      if (result.message === 'Отзыв добавлен успешно') {
        updateReviewsList();
        text.value = '';
        text.style.height = 'auto';
      }
    }
  };

  // ================================
  // ОБНОВЛЕНИЕ СПИСКА ОТЗЫВОВ
  // ================================
// ================================
  // ОБНОВЛЕНИЕ СПИСКА ОТЗЫВОВ
  // ================================
async function updateReviewsList() {
  const response = await fetch('/reviews');
  const reviews = await response.json();

  list.innerHTML = '';

  reviews.forEach(review => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('message-wrapper');
    wrapper.setAttribute('data-review-id', review.id);

    const div = document.createElement('div');
    const isOwnReview = review.name === currentUserName;

    div.classList.add('message');
    div.classList.add(isOwnReview ? 'sent' : 'received');
    wrapper.appendChild(div);

    // ====== HEADER ======
    const header = document.createElement('div');
    header.classList.add('message-header');
    header.innerHTML = isOwnReview
      ? `<span class="message-username">${review.name}</span>
         <img class="message-avatar" src="${review.avatar}" alt="Avatar">`
      : `<img class="message-avatar" src="${review.avatar}" alt="Avatar">
         <span class="message-username">${review.name}</span>`;
    div.appendChild(header);

    // ====== TEXT ======
    const p = document.createElement('p');
    p.innerHTML = review.text.replace(/\n/g, '<br>');
    div.appendChild(p);

    // ====== TIME ======
    const time = document.createElement('span');
    time.classList.add('message-time');
    time.textContent = formatTimeFromDB(review.created_at);
    div.appendChild(time);

    // ====== EDIT BUTTON ======
    const editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.setAttribute('title', 'Изменить');
    editBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
           viewBox="0 0 24 24" fill="none" stroke="#8e8e8e"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 21l3-1 12-12-2-2L4 18l-1 3z"/>
        <path d="M14 4l2 2"/>
      </svg>`;

    // Проверяем, прошло ли 24 часа с момента публикации отзыва
    const reviewTime = new Date(review.created_at); // Время публикации отзыва
    const currentTime = new Date();
    const diffInMillis = currentTime - reviewTime; // Разница в миллисекундах
    const diffInHours = diffInMillis / (1000 * 60 * 60); // Переводим в часы

    // Если прошло больше 24 часов, скрываем кнопку редактирования
    if (diffInHours > 24) {
      editBtn.style.display = 'none';
    }

    editBtn.onclick = () => {
      text.value = review.text.replace(/<br>/g, '\n');  // Преобразуем <br> в новые строки
      editingReviewId = review.id;  // Устанавливаем ID редактируемого отзыва
    };

    // ====== LIKE ======
    const likeBtn = document.createElement('button');
    likeBtn.classList.add('like-btn');
    likeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg"
           width="16" height="16"
           viewBox="0 0 24 24"
           fill="none"
           stroke="#8e8e8e"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round">
        <path d="M20.3 4.6 C18.6 3 15.9 3.2 14.4 5 L12 7.4 L9.6 5 C8.1 3.2 5.4 3 3.7 4.6 C1.8 6.6 2 9.6 4 11.4 L12 19 L20 11.4 C22 9.6 22.2 6.6 20.3 4.6"/>
      </svg>`;
    const likeCount = document.createElement('span');
    likeCount.classList.add('like-count');
    likeCount.textContent = review.like_count || '0';
    let liked = review.liked || false;
    likeBtn.querySelector('svg').setAttribute('stroke', liked ? '#ff4d6d' : '#8e8e8e');

    if (currentUserName === 'Аноним') {
      likeBtn.disabled = true;
      likeBtn.title = "Войдите, чтобы поставить лайк";
    } else {
      likeBtn.onclick = async () => {
        await fetch('/toggle_like', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ review_id: review.id })
        });
        updateReviewsList();
      };
    }

    const actions = document.createElement('div');
    actions.classList.add('message-actions');
    actions.appendChild(likeBtn);
    actions.appendChild(likeCount);
    div.appendChild(actions);

    // Добавляем кнопки редактирования и удаления
    const controls = document.createElement('div');
    controls.classList.add('message-controls');
    controls.appendChild(editBtn);

    // Добавляем контролы (удаление и редактирование)
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('action-btn');
    deleteBtn.setAttribute('title', 'Удалить');
    deleteBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
           viewBox="0 0 24 24" fill="none" stroke="#8e8e8e"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 7h16"/>
        <path d="M9 7V5h6v2"/>
        <path d="M6 7l1 14h10l1-14"/>
      </svg>`;
    deleteBtn.onclick = async () => {
      if (!confirm('Удалить отзыв?')) return;
      const response = await fetch('/delete_review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ client_id: review.client_id })
      });
      const result = await response.json();
      if (result.message === 'Отзыв удалён') wrapper.remove();
      else alert('Ошибка при удалении отзыва');
    };

    controls.appendChild(deleteBtn);
    wrapper.appendChild(controls);

    if (!isOwnReview) controls.style.display = 'none';

    list.prepend(wrapper);
  });
}

  // ================================
  // ЗАГРУЗКА ОТЗЫВОВ ПРИ ОТКРЫТИИ СТРАНИЦЫ
  // ================================
  updateReviewsList();
  reviewsInitialized = true;
}

// ================================
// ВЫЗОВ ИНИЦИАЛИЗАЦИИ
// ================================
initReviews();
