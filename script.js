document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.input');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
