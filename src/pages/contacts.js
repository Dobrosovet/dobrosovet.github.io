// src/pages/contacts.js
// src/pages/contacts.js
export const ContactsPage = () => `
    <div class="pt-6 md:pt-8 pb-12 md:pb-16 px-4 max-w-5xl mx-auto">
        <h1 class="text-3xl md:text-5xl font-black mb-3 md:mb-4 text-slate-900 tracking-tight">Связаться с нами</h1>
        <p class="text-base md:text-xl text-slate-500 mb-8 md:mb-12">Мы всегда на связи и готовы помочь в решении ваших вопросов.</p>
        
        <h2 class="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-slate-800 flex items-center gap-2">
            <i data-lucide="mail" class="w-5 h-5 md:w-6 md:h-6"></i>
            Электронная почта
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            <a href="https://mail.yandex.ru/compose?to=Dobrosovet7@yandex.ru" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 md:p-6 bg-white border border-slate-100 rounded-2xl md:rounded-[2rem] hover:border-red-500 hover:shadow-xl transition-all group shadow-sm">
                <div class="w-12 h-12 md:w-16 h-16 shrink-0 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="at-sign" class="w-6 h-6 md:w-8 md:h-8 text-red-500"></i>
                </div>
                <div class="min-w-0">
                    <div class="text-[10px] md:text-sm text-slate-400 font-semibold mb-0.5 uppercase tracking-wider">Яндекс Почта</div>
                    <div class="font-bold text-base md:text-lg text-slate-900 break-all leading-tight">Dobrosovet7@yandex.ru</div>
                </div>
                <i data-lucide="external-link" class="w-5 h-5 text-slate-200 ml-auto group-hover:text-red-500 shrink-0 hidden sm:block"></i>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dobrosovet5@gmail.com" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 md:p-6 bg-white border border-slate-100 rounded-2xl md:rounded-[2rem] hover:border-blue-500 hover:shadow-xl transition-all group shadow-sm">
                <div class="w-12 h-12 md:w-16 h-16 shrink-0 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center mr-4 md:mr-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="mail" class="w-6 h-6 md:w-8 md:h-8 text-blue-500"></i>
                </div>
                <div class="min-w-0">
                    <div class="text-[10px] md:text-sm text-slate-400 font-semibold mb-0.5 uppercase tracking-wider">Gmail</div>
                    <div class="font-bold text-base md:text-lg text-slate-900 break-all leading-tight">dobrosovet5@gmail.com</div>
                </div>
                <i data-lucide="external-link" class="w-5 h-5 text-slate-200 ml-auto group-hover:text-blue-500 shrink-0 hidden sm:block"></i>
            </a>
        </div>

        <h2 class="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-slate-800 flex items-center gap-2">
            <i data-lucide="share-2" class="w-5 h-5 md:w-6 md:h-6"></i>
            Наши соцсети
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            <a href="https://t.me/+pW5ZWvaeyeU4NTEy" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 md:p-6 bg-slate-50 border border-transparent rounded-2xl md:rounded-3xl hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all group">
                <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-100 flex items-center justify-center mr-3 md:mr-4 group-hover:bg-blue-500 transition-colors">
                    <i data-lucide="send" class="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-white"></i>
                </div>
                <div>
                    <div class="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Telegram</div>
                    <div class="font-bold text-sm md:text-base text-slate-900">Наш канал</div>
                </div>
            </a>

            <a href="https://dzen.ru/dobrosovet" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 md:p-6 bg-slate-50 border border-transparent rounded-2xl md:rounded-3xl hover:bg-white hover:border-slate-900 hover:shadow-lg transition-all group sm:col-span-2 lg:col-span-1">
                <div class="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-slate-200 flex items-center justify-center mr-3 md:mr-4 group-hover:bg-slate-900 transition-colors">
                    <i data-lucide="layout" class="w-5 h-5 md:w-6 md:h-6 text-slate-700 group-hover:text-white"></i>
                </div>
                <div>
                    <div class="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Дзен</div>
                    <div class="font-bold text-sm md:text-base text-slate-900">dzen.ru/dobrosovet</div>
                </div>
            </a>
        </div>
    </div>
`;