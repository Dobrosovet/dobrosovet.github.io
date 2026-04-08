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
    <div class="max-w-4xl mx-auto pt-6 pb-12 px-4">
        <h1 class="text-3xl md:text-5xl font-black mb-3 text-slate-900 tracking-tight">Дела Добросовета</h1>
        <p class="text-base md:text-xl text-slate-500 mb-8 md:mb-12">По всем делам поданы исковые требования о восстановлении прав.</p>
        
        <div class="flex flex-col gap-6 md:gap-10">
            ${[...situations].sort(() => Math.random() - 0.5).map(sit => `
                <div class="situation-banner bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                    
                    <div class="w-full h-48 md:h-[400px] lg:h-[480px] shrink-0 relative overflow-hidden group bg-slate-100">
                        <img 
                            src="${sit.image}" 
                            alt="${sit.title}" 
                            class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div class="p-5 md:p-10">
                        
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                            <h3 class="text-xl md:text-3xl font-bold text-slate-900 pr-4 leading-tight">${sit.title}</h3>
                            
                            <div class="relative shrink-0">
                                <button onclick="toggleStatus(event, 'popup-${sit.id}')" 
                                        class="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-700 font-medium transition-all shadow-sm">
                                    <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-500"></i>
                                    <span class="text-xs md:text-sm">Статус</span>
                                </button>
                                
                                <div id="popup-${sit.id}" class="status-popup hidden absolute w-32 md:w-36 right-0 top-full mt-2 p-2.5 bg-slate-900 text-white text-xs md:text-sm font-medium text-center rounded-xl shadow-xl z-50">
                                    Идет суд 
                                    <div class="absolute bottom-full right-6 border-[6px] border-transparent border-b-slate-900"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div id="preview-${sit.id}" class="text-slate-600 text-sm md:text-lg leading-snug md:leading-relaxed line-clamp-3">
                            ${sit.fullText}
                        </div>

                        <div id="grid-${sit.id}" class="expandable-grid">
                            <div class="expandable-inner">
                                <div class="text-slate-600 text-sm md:text-lg leading-snug md:leading-relaxed pt-3">
                                    ${sit.fullText}
                                </div>
                            </div>
                        </div>

                       <div class="mt-6 pt-5 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-3">
                            <button onclick="toggleExpand('${sit.id}')" 
                                    class="flex items-center justify-center w-full md:w-auto md:min-w-[200px] px-6 py-3 md:py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl md:rounded-2xl transition-all font-bold text-sm md:text-base">
                                <span id="btn-${sit.id}">Читать полностью</span>
                                <i id="icon-${sit.id}" data-lucide="chevron-down" class="w-4 h-4 md:w-5 md:h-5 ml-2"></i>
                            </button>

                            <button onclick="navigateTo('situation-detail', '${sit.id}')" 
                                    class="flex items-center justify-center w-full md:w-auto px-6 py-3 md:py-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl md:rounded-2xl transition-all font-bold border border-indigo-100 text-sm md:text-base">
                                 Подробности
                                <i data-lucide="arrow-right" class="w-4 h-4 md:w-5 md:h-5 ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;