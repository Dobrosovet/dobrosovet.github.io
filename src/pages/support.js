// src/pages/support.js
export const SupportPage = () => `
    <div class="pt-8 max-w-3xl mx-auto text-center">
        <div class="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <i data-lucide="heart" class="w-12 h-12 text-pink-600"></i>
        </div>
        <h1 class="text-4xl font-extrabold mb-6">Поддержать проект</h1>
        <p class="text-xl text-slate-600 mb-12 leading-relaxed">Наш проект Добросовет существует и развивается благодаря добрым людям, их вкладу в общее дело и благодаря их добровольным пожертвованиям. Ваши средства помогают нам оплачивать хостинг, сервисы, привлекать к работе специалистов в области IT, публиковать  статьи в СМИ (при необходимости).</p>
        <div id="support-content">
            <button onclick="showRequisites()" class="bg-pink-600 text-white hover:bg-pink-700 px-10 py-5 rounded-[2rem] font-bold text-xl transition-all active:scale-95 shadow-xl shadow-pink-200">
                Поддержать финансово
            </button>
        </div>
        <div id="requisites" class="hidden animate-in zoom-in-95 duration-300">
            <div class="max-w-md mx-auto bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-left border border-slate-700">
                <div class="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                <p class="text-slate-400 text-sm mb-2 uppercase tracking-widest">Номер карты</p>
                <p class="text-2xl font-mono tracking-widest mb-10">2200 2706 3397 7189</p>
                <div class="flex justify-between items-end">
                    <div>
                        <p class="text-slate-400 text-xs mb-1">Получатель</p>
                        <p class="font-bold text-lg italic">ДОБРОСОВЕТ ФОНД</p>
                    </div>
                    <i data-lucide="zap" class="w-10 h-10 text-blue-400 opacity-50"></i>
                </div>
            </div>
        </div>
    </div>
`;