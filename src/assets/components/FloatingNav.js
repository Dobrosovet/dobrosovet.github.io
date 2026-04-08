// src/assets/components/FloatingNav.js
export const FloatingNav = () => `
    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md">
        <nav class="glass-nav rounded-2xl shadow-xl flex items-center justify-around p-2 border border-white/50">
            <button onclick="navigateTo('home')" class="float-btn flex flex-col items-center gap-1 p-2 rounded-xl transition-all" data-page="home">
                <i data-lucide="home" class="w-5 h-5"></i>
                <span class="text-[10px] font-medium uppercase tracking-wider">Главная</span>
            </button>
            <button onclick="navigateTo('situations')" class="float-btn flex flex-col items-center gap-1 p-2 rounded-xl transition-all" data-page="situations">
                <i data-lucide="file-text" class="w-5 h-5"></i>
                <span class="text-[10px] font-medium uppercase tracking-wider">Ситуации</span>
            </button>
            <button onclick="navigateTo('services')" class="float-btn flex flex-col items-center gap-1 p-2 rounded-xl transition-all" data-page="services">
                <i data-lucide="briefcase" class="w-5 h-5"></i>
                <span class="text-[10px] font-medium uppercase tracking-wider">Услуги</span>
            </button>
            <button onclick="navigateTo('contacts')" class="float-btn flex flex-col items-center gap-1 p-2 rounded-xl transition-all" data-page="contacts">
                <i data-lucide="phone" class="w-5 h-5"></i>
                <span class="text-[10px] font-medium uppercase tracking-wider">Связь</span>
            </button>
        </nav>
    </div>
`;