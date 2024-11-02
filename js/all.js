(function () {
    var disableRightClick = function (e) {
        if (e.target.tagName === "IMG") {
            e.preventDefault();
            alert("別當盜圖仔！");
        }
    };

    document.addEventListener('contextmenu', disableRightClick);
})();



// 複製郵件
function copyEmail() {
    const emailInput = document.getElementById("emailInput");
    emailInput.select();
    emailInput.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");
    alert("已複製   " + emailInput.value);
}

document.getElementById("copyEmailTop").addEventListener("click", copyEmail);
document.getElementById("copyEmailBottom").addEventListener("click", copyEmail);







