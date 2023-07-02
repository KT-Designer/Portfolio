// 淡入淡出
ScrollReveal({
    reset: false,
    // 手機不顯示特效
    mobile: false,
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 50,
});



ScrollReveal().reveal('.card-left');
ScrollReveal().reveal('.card-right', { origin: 'bottom' });
ScrollReveal().reveal('.education', { origin: 'left' });
ScrollReveal().reveal('.work', { origin: 'right' });
ScrollReveal().reveal('.skill-card', { interval: 100 });
