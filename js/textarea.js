// textarea表格動態
const textarea = document.getElementById('message');
const label = document.querySelector('.label-messsage');

textarea.addEventListener('focus', () => {
    label.style.top = '-12px';
});

textarea.addEventListener('blur', () => {
    if (textarea.value === '') {
        label.style.top = '15px';
    }
});


