// src/pages/situations.js

const situations = [
    {
        id: 'sit-1',
        title: 'Авгиевы конюшни РЖД-СЗППК',
        image: './src/assets/photo/event1.jpg', 
        fullText: `
            <div class="space-y-3">
                <p><b>Ситуация 1.</b> Человек заходит в первый или последний вагон электрички, и вынужден перебегать в другой вагон из-за смрадного отвратительного зловония, распространенного из незакрывающегося (открытого) туалета с переполненной чашей с экскрементами. Звонки на горячую линию РЖД, общение по кнопке «пассажир-машинист», обращение к проводникам не приводят к нужному результату.</p>
                <p><b>Ситуация 2.</b> Человек, которому надо сходить в туалет, вынужден мириться с полной антисанитарией, отсутствием воды или кранов, неработающими сортирами. А в некоторых случаях из-под кранов течет коричневая жижа с характерным запахом.</p>
                <p><b>Ситуация 3.</b> Требование юриста СЗППК предоставить именные билеты, в то время как кассиры и контролёры о них ничего не знают.</p>
                <p><b>Ситуация 4.</b> Оферты руководству СЗППК и РЖД в отсутствие должного санитарного содержания подвижных составов.</p>
            </div>
        `
    },
    {
        id: 'sit-2',
        title: 'Тернистым путём эколога-общественника',
        image: './src/assets/photo/event5.jpg',
        fullText: `
            <div class="space-y-3">
                <p><b>Ситуация 1.</b> Как известные СМИ через телеграм-каналы и дзен порочат имя и репутацию эколога-общественника Сергея Грибалёва.</p>
                <p><b>Ситуация 2.</b> Как суды упираются и не принимают иски по защите чести и достоинства, компенсации морального вреда.</p>
                <div class="pt-2 flex flex-col gap-2">
                    <a href="https://dzen.ru/a/XnRtvWOgUnsrRpu1?ysclid=mhkq43m842244014688" target="_blank" class="text-blue-600 hover:text-indigo-600 font-medium underline underline-offset-4 transition-colors">Читать материал в Дзен</a>
                    <a href="https://og47.ru/2020/03/20/Malenkii-chelovek-v-poiskakh-bolshogo-skandala.-Ili-kak-obizhennyi-laquoekspert-ekolog-obschestvennikraquo-Sergei-Gribalev-dokatilsya-do-takoi-zhizni-8728" target="_blank" class="text-blue-600 hover:text-indigo-600 font-medium underline underline-offset-4 transition-colors">Статья на OG47.ru: Маленький человек в поисках скандала</a>
                </div>
            </div>
        `
    },
    {
        id: 'sit-3',
        title: 'Домам культуры – быть!',
        image: './src/assets/photo/event6.jpg',
        fullText: `
            <div class="space-y-3">
                <p><b>Ситуация 1.</b> Разгромлен ранее работавший дом культуры – объект социальной инфраструктуры посёлка. Нет кружков, секций и места проведения досуга. Местная администрация отправляет проводить досуг за 22 км от поселка.</p>
            </div>
        `
    },
    {
        id: 'sit-4',
        title: 'Нить Ариадны в лабиринте СМИ',
        image: './src/assets/photo/event7.jpg',
        fullText: `
            <div class="space-y-3">
                <p><b>Ситуация 1.</b> 3 августа 2021 года вероломное вторжение посторонних лиц в кафе, где трудилась супружеская пара, было подано СМИ с подменой понятий, в результате растиражированная при помощи агрегаторов — привело к трагическим последствиям, случившимся в семье всемирно известного реставратора.</p>
                <p><b>Ситуация 2.</b> Иск по возмещению морального вреда со СМИ суды упорно не принимают уже больше года.</p>
                <div class="pt-2 flex flex-col gap-2">
                    <a href="https://dzen.ru/a/aKQ79FHyoSx0Pyqq" target="_blank" class="text-blue-600 hover:text-indigo-600 font-medium underline underline-offset-4 transition-colors">Подробнее об инциденте в Дзен</a>
                </div>
            </div>
        `
    },
    {
        id: 'sit-5',
        title: 'Итоговая аттестация в школах ',
        image: './src/assets/photo/event8.jpg',
        fullText: `
            <div class="space-y-3">
                <p><b>Ситуация 1.</b> Выпускнику 9 класса не выдают документ об образовании, несмотря на имеющуюся аттестацию. Отказ образовательной организации выдавать аттестат успешному выпускнику блокирует поступление в колледж.</p>
                <p><b>Ситуация 2.</b> Выпускника не переводят в 10 класс по причине искусственно созданного отсутствия аттестата за 9 класс.</p>
                <p><b>Ситуация 3.</b> Поданы иски о возмещении морального вреда. Обжалование происходит в апелляционных и кассационных инстанциях. Дело предается огласке.</p>
                <p><b>Ситуация 4.</b> Выявление признаков фальсификации документа: отсутствие сведений об экзаменах и ГЭК в выданном аттестате, несоответствие бланка приложению.</p>
                
                <div class="pt-4 flex flex-col gap-3">
                    <a href="https://t.me/+_Axpa09KIgcyMjZi" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4 transition-colors flex items-center gap-2">
                         <i data-lucide="send" class="w-4 h-4"></i> Телеграм-чат «Итоговая аттестация в школе»
                    </a>
                    <a href="https://dzen.ru/a/ZtqAIWSljRO9DXnL" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4 transition-colors">
                        Материал в Дзен
                    </a>
                </div>
            </div>
        `
    }
];

export const SituationsPage = () => `
    <div class="max-w-4xl mx-auto pt-8 pb-16 px-4">
        <h1 class="text-5xl font-black mb-4 text-slate-900 tracking-tight">Дела, в которых участвует Добросовет</h1>
        <p class="text-xl text-slate-500 mb-12">По всем делам поданы исковые требования о восстановлении нарушенных прав и компенсации морального вреда.</p>
        
        <div class="flex flex-col gap-10">
            ${[...situations].sort(() => Math.random() - 0.5).map(sit => `
                <div class="situation-banner bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                    
                    <!-- Здесь увеличили высоту для компов: md:h-[400px] lg:h-[480px] -->
                    <div class="w-full h-64 md:h-[400px] lg:h-[480px] shrink-0 relative overflow-hidden group bg-slate-100">
                        <img 
                            src="${sit.image}" 
                            alt="${sit.title}" 
                            class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            onerror="this.src='https://via.placeholder.com/800x600?text=Ошибка+загрузки+фото'"
                        />
                        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div class="p-8 md:p-10">
                        
                        <!-- Шапка карточки: Заголовок + Плюшечка со статусом -->
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <h3 class="text-3xl font-bold text-slate-900 pr-4">${sit.title}</h3>
                            
                            <!-- Та самая новая плюшечка -->
                            <div class="relative shrink-0 z-10">
                                <button onclick="toggleStatus('popup-${sit.id}')" 
                                        class="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-slate-700 font-medium transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <i data-lucide="clock" class="w-4 h-4 text-amber-500"></i>
                                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500"></i>
                                    <span class="text-sm">Статус</span>
                                </button>
                                
                                <!-- Всплывающий мини-попап -->
                                <div id="popup-${sit.id}" class="status-popup hidden absolute w-36 right-0 top-full mt-2 p-3 bg-slate-900 text-white text-sm font-medium text-center rounded-xl shadow-xl border border-slate-700 transition-all">
                                    Идет суд 
                                    <!-- Треугольничек (хвостик) попапа -->
                                    <div class="absolute bottom-full right-8 border-[6px] border-transparent border-b-slate-900"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div id="preview-${sit.id}" class="text-slate-600 text-lg leading-relaxed line-clamp-3">
                            ${sit.fullText}
                        </div>

                        <div id="grid-${sit.id}" class="expandable-grid">
                            <div class="expandable-inner">
                                <div class="text-slate-600 text-lg leading-relaxed pt-4">
                                    ${sit.fullText}
                                </div>
                            </div>
                        </div>

                       <div class="mt-8 pt-6 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
    <!-- Кнопка «Читать полностью» (останется слева) -->
    <button onclick="toggleExpand('${sit.id}')" 
            class="flex items-center justify-center w-full md:w-auto md:min-w-[200px] px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl transition-all duration-300 font-bold shadow-lg shadow-slate-200">
        <span id="btn-${sit.id}">Читать полностью</span>
        <i id="icon-${sit.id}" data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-300 ml-4"></i>
    </button>

    <!-- Кнопка «Подробности дела» (уедет вправо на десктопе) -->
    <button onclick="navigateTo('situation-detail', '${sit.id}')" 
            class="flex items-center justify-center w-full md:w-auto px-8 py-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-2xl transition-all duration-300 font-bold border border-indigo-100">
         Подробности дела
        <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
    </button>
</div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;