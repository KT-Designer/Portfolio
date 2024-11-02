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
const email = "10360123.ntua@gmail.com"; 
function copyEmail() {
    navigator.clipboard.writeText(email).then(function () {
        alert("已複製   " + email);
    }).catch(function (err) {
        console.error("複製失敗！", err);
    });
}
document.getElementById("copyEmailTop").addEventListener("click", copyEmail);
document.getElementById("copyEmailBottom").addEventListener("click", copyEmail);








