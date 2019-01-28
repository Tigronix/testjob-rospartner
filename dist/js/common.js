"use strict"

//templates
new Vue({
	el: '#global-svg',
	template: '<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-circle-up" viewBox="0 0 32 32"><title>circle-up</title><path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"></path><path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"></path></symbol><symbol id="icon-circle-down" viewBox="0 0 32 32"><title>circle-down</title><path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM3 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13z"></path><path d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z"></path></symbol></defs></svg>'
})

//animate
function animate(dataAttr, animationIn, animationOut, hideTiming) {
	$(document).on('click', '[data-class]', function () {
		var dataClass = $(this).attr('data-class');
		var dataNumber = $(this).attr('data-number');
		hideTiming = hideTiming ||1000;
		if (dataClass == dataAttr) {
			$('[data-class="' + dataClass + '"]').each(function () {
				if ($(this).attr('data-number') === dataNumber) {
					if ($(this).hasClass('animate__button')) {
						$(this).toggleClass('active');
					}

					if ($(this).hasClass('animate__content')) {
						$(this).show();
						if ($(this).hasClass(animationIn)) {
							var animateContent = $(this);
							animateContent.removeClass(animationIn).addClass(animationOut);
							setTimeout(function () {
								animateContent.hide();
							}, hideTiming);
						} else {
							$(this).removeClass(animationOut).addClass(animationIn);
						}
					}
				}
			});
		}
	});
}

animate('test', 'bounceIn', 'bounceOut');
animate('accordion', 'lightSpeedIn', 'lightSpeedOut', 500);