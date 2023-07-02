// 作品集_滑鼠點擊交互
const linkItems = document.querySelectorAll('.item-link');

linkItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        linkItems.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

