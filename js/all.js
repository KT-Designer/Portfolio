(function () {
    var disableRightClick = function (e) {
        e.preventDefault();
        alert("別當盜圖仔！");
    };

    document.addEventListener('contextmenu', disableRightClick);
})();
