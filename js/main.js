document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('language') || 'en';

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('.lang-en, .lang-ru, .lang-ua').forEach(el => {
            el.classList.add('hidden');
        });
        document.querySelectorAll('.lang-${lang}').forEach(el => {
            el.classList.remove('hidden');
        });
        localStorage.setItem('language', lang);
        currentLang = lang;
    }

    setLanguage(currentLang);

    langToggle.addEventListener('click', function() {
        const languages = ['en', 'ru', 'ua'];
        const currentIndex = languages.indexOf(currentLang);
        const nextLang = languages[(currentIndex + 1) % languages.length];
        setLanguage(nextLang);
    });

    // Simple progress tracking placeholder using localStorage
    function updateProgress(module, completed) {
        let progress = JSON.parse(localStorage.getItem('slavicbridge-progress') || '{}');
        progress[module] = completed;
        localStorage.setItem('slavicbridge-progress', JSON.stringify(progress));
    }

    // Example usage: updateProgress('lesson-1', true);

    window.updateProgress = updateProgress;
});