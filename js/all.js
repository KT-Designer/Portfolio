(function () {
    var disableRightClick = function (e) {
        if (e.target.tagName === "IMG") {
            e.preventDefault();
            alert("別當盜圖仔！");
        }
    };

    document.addEventListener('contextmenu', disableRightClick);
})();

