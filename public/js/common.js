$(function() {
	$(document).on('click', '.hd_acd_btn', function(){
		// 각각 모두 토글
		// if( $(this).hasClass('active') ){
		// 	$(this).closest('li').removeClass('active');
		// 	$(this).removeClass('active');
		// 	$(this).next('.hmd2_dept').stop().slideUp(300).removeClass('active');
		// } else {
		// 	$(this).closest('li').addClass('active');
		// 	$(this).addClass('active');
		// 	$(this).next('.hmd2_dept').stop().slideDown(300).addClass('active');
		// }

		// 한개만 열기
		if( $(this).hasClass('active') ){
			$(this).closest('li').siblings().find('.hd_acd_btn').removeClass('active');
			$(this).closest('li').siblings().find('.hmd2_dept').stop().slideUp(300).removeClass('active');
			$(this).closest('li').removeClass('active');
			$(this).closest('li').siblings().removeClass('active');
			$(this).removeClass('active');
			$(this).next('.hmd2_dept').stop().slideUp(300).removeClass('active');
		} else {
			$(this).closest('li').siblings().find('.hd_acd_btn').removeClass('active');
			$(this).closest('li').siblings().find('.hmd2_dept').stop().slideUp(300).removeClass('active');
			$(this).closest('li').addClass('active');
			$(this).closest('li').siblings().removeClass('active');
			$(this).addClass('active');
			$(this).next('.hmd2_dept').stop().slideDown(300).addClass('active');
		}
	});
});