// 漢堡選單
$(document).ready(function () {
    $('#menu-icon').click(function () {
        $(this).toggleClass('fa-xmark');
    });

    // 點擊後，收合選單，並將ICON改成預設的樣式
    $('.navbar a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('#menu-icon').removeClass('fa-xmark').addClass('fa-bars');
    });
});




// 選單預設和點擊樣式
// 在css要特別設一個.active的樣式，例如  .my-navbar .nav-link.active
$(function () {
    $('.navbar-nav .nav-link').click(function () {
        // 移除之前的活動類
        $('.navbar-nav .nav-link').removeClass('active');
        // 添加當前點擊的菜單項的活動類
        $(this).addClass('active');
    });
});

