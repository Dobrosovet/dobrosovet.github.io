// src/pages/situationDetail.js
import { situationsData } from './situationsData.js';

export const SituationDetailPage = (id) => {
    const data = situationsData[id];

    if (!data) return `<div class="p-20 text-center text-2xl font-bold">Упс! Дело не найдено.</div>`;

    return `
        <div class="max-w-4xl mx-auto pt-8 pb-20 px-4 animate-in fade-in duration-500">
            <!-- Кнопка назад -->
            <button onclick="navigateTo('situations')" class="group flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-10 transition-all">
                <div class="p-2 rounded-full group-hover:bg-indigo-50 transition-colors">
                    <i data-lucide="arrow-left" class="w-6 h-6"></i>
                </div>
                <span class="font-bold text-lg">Вернуться к списку</span>
            </button>

            <!-- Большая фотка (с фиксом для компов) -->
            <div class="w-full h-64 md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-12">
                <img src="${data.image}" class="w-full h-full object-cover" alt="${data.title}">
            </div>

            <div class="flex items-center gap-4 mb-6">
    <span class="px-5 py-2 bg-emerald-500 text-white rounded-2xl text-sm font-black tracking-widest uppercase shadow-lg shadow-emerald-100">
        ${data.status}
    </span>
</div>

            <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
                ${data.title}
            </h1>

            <!-- Контент из нашей "базы" -->
            <div class="text-slate-600 text-lg leading-relaxed">
                ${data.fullContent}
            </div>
        </div>
    `;
};