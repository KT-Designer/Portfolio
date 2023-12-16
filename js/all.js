(function () {
    var images = document.querySelectorAll('img');

    images.forEach(function (image) {
        image.addEventListener('contextmenu', function (event) {
            event.preventDefault();

            // 將圖片更換為指定的圖片
            image.src = '../images/bad.jpg';

            // 避免觸發其他右鍵菜單
            return false;
        });
    });
})();
