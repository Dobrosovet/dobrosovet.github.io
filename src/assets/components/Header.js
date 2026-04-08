// src/assets/components/Header.js
export const Header = () => `
    <header class="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div class="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div class="flex items-center gap-3 cursor-pointer" onclick="navigateTo('home')">
                <div class="w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-sm flex-shrink-0">
                    <img 
                        src="src/assets/icons/Dobro.png" 
                        alt="ДоброСовет" 
                        class="w-full h-full object-cover"
                    />
                </div>
                <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 tracking-tight">
                    ДоброСовет
                </span>
            </div>

            <nav class="hidden md:flex items-center gap-1">
                <button onclick="navigateTo('home')" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors" data-page="home">Главная</button>
                <button onclick="navigateTo('about')" class="nav-link px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors" data-page="about">О нас</button>
                <button onclick="navigateTo('support')" class="px-4 py-2 rounded-lg text-sm font-medium text-pink-600 hover:bg-pink-50 transition-colors flex items-center gap-2">
                    <i data-lucide="heart" class="w-4 h-4"></i> Поддержать проект
                </button>
            </nav>

            <div class="hidden md:block">
                <button onclick="navigateTo('contacts')" class="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 rounded-xl font-medium transition-all active:scale-95 shadow-sm shadow-blue-500/20">
                    Обратиться
                </button>
            </div>

            <button id="mobile-menu-toggle" class="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
        </div>
    </header>
`;