// src/pages/home.js
export const HomePage = () => `
    <div class="space-y-12">
        <section class="relative pt-16 pb-20 px-6 md:px-12 rounded-[2.5rem] bg-gradient-to-br from-blue-50 via-white to-blue-50/30 overflow-hidden border border-blue-100/50">
            <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
            <div class="relative z-10 max-w-3xl">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                    <i data-lucide="shield-check" class="w-4 h-4"></i> Ваш надежный помощник
                </div>
                <h1 class="text-4xl md:text-6xl font-extrabold text-slate-600 leading-tight mb-6">
                    Правовая  <br/>
                    <span class="text-blue-600">и комплексная поддержка в трудных ситуациях</span>
                </h1>
                <p class="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                    Профессиональные консультации, защита прав и поддержка в сложных жизненных ситуациях. Отражение информационных атак. Составление исков, возражений, сопровождение в судах. Возмещение материального ущерба и морального вреда.	
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <button onclick="navigateTo('contacts')" class="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95 shadow-lg shadow-blue-500/25">
                        Обратиться за помощью
                    </button>
                    <button onclick="navigateTo('services')" class="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all active:scale-95">
                      Наши услуги
                    </button>
                </div>
            </div>
        </section>

        <section>
            <h2 class="text-3xl font-bold text-slate-900 mb-8">Наши преимущества</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <i data-lucide="zap" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Поддержка единомышленников </h3>
                    <p class="text-slate-600 text-sm">Рабочая группа для комплексной оценки проблемной ситуации, поиска решения и путей поддержки в сложных ситуациях. Информационная поддержка и огласка ситуации (обнародование ситуации на нашем портале).</p>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <i data-lucide="heart" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Надёжно</h3>
                    <p class="text-slate-600 text-sm">В работе используем только проверенные источники законодательной информации, толковые печатные и электронные специализированные словари на русском, английском, французском  и других языках международного общения. Документы составляют эксперты с многолетним опытом взаимодействия с судами. </p>
                </div>
                <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <i data-lucide="user-x" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Без переплат госпошлины</h3>
                    <p class="text-slate-600 text-sm">Помогаем снизить или освободить от уплаты госпошлины без понижения статуса Истца. Оформление запросов и требований о предоставлении достоверной информации в судебных инстанциях.</p>
                </div>
                 <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
        <i data-lucide="wallet" class="w-6 h-6"></i>
    </div>
    <h3 class="text-xl font-bold mb-3">Минимизируем затраты</h3>
    <p class="text-slate-600 text-sm">Помогаем снизить финансовую нагрузку, оптимизировать расходы, в том числе на «госпошлины». Не допускаем необоснованных требований об оплате частных жалоб.</p>
</div>
                </div>
        </section>
    </div>
`;