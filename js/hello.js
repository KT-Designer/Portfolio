// 進站問候語
$(document).ready(function () {
    function setGreeting() {
        var greeting = $('#hello');
        var now = new Date();
        var hour = now.getHours();
        var greetingText;

        if (hour >= 6 && hour < 12) {
            greetingText = 'Good morning.';
        } else if (hour >= 12 && hour < 18) {
            greetingText = 'Good afternoon.';
        } else {
            greetingText = 'Good evening.';
        }

        greeting.text(greetingText);
    }

    // 在頁面加載時設置初始問候語
    setGreeting();
});