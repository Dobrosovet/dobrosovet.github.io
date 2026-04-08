// src/assets/components/MobileMenu.js
export const MobileMenu = () => `
    <div id="mobile-menu-overlay" class="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm hidden">
        <div class="fixed right-0 top-0 h-full w-72 bg-white shadow-2xl p-6 animate-in slide-in-from-right duration-300">
            <div class="flex justify-between items-center mb-8">
                <span class="font-bold text-lg">Меню</span>
                <button id="mobile-menu-close" class="p-2 hover:bg-slate-100 rounded-full">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            <nav class="flex flex-col gap-2">
                <button onclick="navigateTo('home')" class="flex items-center gap-4 p-3 rounded-xl text-slate-700 hover:bg-slate-50">
                    <i data-lucide="home" class="w-5 h-5 text-blue-600"></i> Главная
                </button>
                <button onclick="navigateTo('about')" class="flex items-center gap-4 p-3 rounded-xl text-slate-700 hover:bg-slate-50">
                    <i data-lucide="info" class="w-5 h-5 text-blue-600"></i> О нас
                </button>
                <button onclick="navigateTo('support')" class="flex items-center gap-4 p-3 rounded-xl text-pink-600 bg-pink-50">
                    <i data-lucide="heart" class="w-5 h-5"></i> Поддержать проект
                </button>
            </nav>
        </div>
    </div>
`;