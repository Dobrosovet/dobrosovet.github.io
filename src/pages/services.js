//services.js
const services = [
    { title: 'Консультации', desc: 'Устные и письменные разъяснения относительно позиции сторон для судебного разбирательства', icon: 'file-text' },
    { title: 'Анализ документов', desc: 'Проверка соглашений, согласий, договоров, жалоб, исков, возражений на соответствие действующему законодательству. Анализ возможностей для судебного разбирательства.', icon: 'search' }, // Иконка для анализа
    { title: 'Составление жалоб', desc: 'Помощь в написании исков, возражений, иных судебных документов.', icon: 'edit' }, // Иконка для редактирования
    { title: 'Защита прав потребителей', desc: 'Помощь в решении споров по некачественному оказанию услуг, реализации товаров без обеспечения требований экологической безопасности. Помощь при обмане потребителей и предоставлении недостоверной информации о товарах и услугах. Помощь в составлении досудебных претензий, исковых требований о возмещении материального ущерба и морального вреда.', icon: 'shield' }, // Иконка для защиты
    { title: 'Трудовые споры', desc: 'Помощь при незаконном увольнении, невыплате зарплаты. Даже при отсутствии официального трудоустройства. Помощь во взыскании вынужденного прогула, компенсации морального вреда и индексации выплат.', icon: 'briefcase' }, // Иконка для трудовых споров
    { title: 'Защита чести и достоинства', desc: 'Поддержка людям в случае распространения недостоверной информации, порочащей честь и достоинство, деловую репутацию через различные каналы информации. Помощь во взыскании компенсации морального вреда и материального ущерба.', icon: 'shield-check' }, // Иконка для защиты чести и достоинства
    { title: 'Защита персональных и цифровых данных', desc: 'Помощь в обнаружении несанкционированного доступа к персональным данным и созданию цифровых подписей. Отзывы согласий на обработку, запреты использования цифровых данных субъекта права. Помощь в составлении требований о компенсации материального ущерба и/или морального вреда.', icon: 'lock' }, // Иконка для защиты данных
    { title: 'Восстановление и корректировка записей в системе ЗАГС', desc: 'Помощь в исправлении неточностей и ошибок в метрических данных системы ЗАГС в досудебном и судебном порядке.', icon: 'edit' }, // Иконка для правок в данных
    { title: 'Социальные выплаты и гарантии', desc: 'Помощь людям в пересмотре решений по пособиям, пенсиям, иным социальным выплатам и гарантиям (в том числе по зубопротезированию) в судебном порядке.', icon: 'credit-card'}, // Иконка для социальных выплат
];
export const ServicesPage = () => `
    <div class="max-w-4xl mx-auto pt-6 md:pt-8 pb-12 md:pb-16 px-4 page-wrapper">
        <h1 class="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-slate-900 tracking-tight">Наши услуги</h1>
        <p class="text-base md:text-xl text-slate-500 mb-8 md:mb-12 max-w-2xl leading-snug md:leading-relaxed">
            Мы предоставляем широкий спектр правовой помощи Кредиторам-истцам при составлении исковых требований, возражений, апелляций и иных документов.
        </p>
        
        <div class="flex flex-col gap-3 md:gap-4">
            ${services.map(svc => `
                <div class="service-card group cursor-pointer bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                    <div class="flex items-start md:items-center gap-4 md:gap-6">
                        <div class="shrink-0 p-3 md:p-5 bg-slate-50 rounded-xl md:rounded-2xl group-hover:bg-indigo-600 transition-colors duration-300 shadow-inner">
                            <i data-lucide="${svc.icon}" class="w-6 h-6 md:w-8 md:h-8 text-slate-600 group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        
                        <div class="flex-1 min-w-0">
                            <h3 class="text-lg md:text-2xl font-bold text-slate-900 mb-0.5 md:mb-1 group-hover:text-indigo-600 transition-colors leading-tight">
                                ${svc.title}
                            </h3>
                            <p class="text-slate-500 text-sm md:text-lg leading-snug md:leading-relaxed">
                                ${svc.desc}
                            </p>
                        </div>

                        <div class="hidden md:flex opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 shrink-0">
                            <i data-lucide="arrow-right" class="w-6 h-6 text-indigo-600"></i>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="mt-12 md:mt-16 p-6 md:p-8 bg-indigo-600 rounded-[2rem] md:rounded-[2.5rem] text-center shadow-2xl shadow-indigo-200">
            <h2 class="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">Не нашли нужную услугу?</h2>
            <p class="text-indigo-100 mb-6 text-sm md:text-base">Свяжитесь с нами для индивидуальной консультации.</p>
            <button onclick="navigateTo('contacts')" class="w-full sm:w-auto px-8 py-3 md:py-4 bg-white text-indigo-600 rounded-xl md:rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-lg">
                Связаться с юристом
            </button>
        </div>
    </div>
`;