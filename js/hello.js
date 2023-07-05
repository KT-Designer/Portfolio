// 進站問候語
$(document).ready(function () {
    function setGreeting() {
        var greeting = $('#hello');
        var now = new Date();
        var hour = now.getHours();
        var greetingText;

        if (hour >= 6 && hour < 12) {
            greetingText = 'Hi, Good Morning.';
        } else if (hour >= 12 && hour < 18) {
            greetingText = 'Hi, Good Afternoon.';
        } else {
            greetingText = 'Hi, Good Evening.';
        }

        greeting.text(greetingText);
    }

    // 在頁面加載時設置初始問候語
    setGreeting();
});