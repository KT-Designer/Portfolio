
$(document).ready(function () {
    var containerEl1 = document.querySelector('[data-ref="mix1"]');
    var containerEl2 = document.querySelector('[data-ref="mix2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer1 = mixitup(containerEl2, config);
    // 卡片點選動畫_UI/UX_預設
    var mixer = mixitup('#ui-ux');
    mixer.filter('.Projects');
    // 卡片點選動畫_Graphic_預設
    var mixer = mixitup('#Graphic');
    mixer.filter('.Event');

});

















