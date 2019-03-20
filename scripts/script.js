$(document).ready(function(){
$(".js-btn-buy-link").click(function(){
	var o=$(this).attr("href"),
	n=$(o).offset().top,
	t=$(".js-main-logo-block").height();
	return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:n-t},1e3),!1
});
var o=$(".js-main-logo-block").offset().top,
n=function(){
	var o=$(".js-main-logo-block").height()+28+"px";
	$(".js-main-content").css("margin-top",o)},
	t=function(){
		$(window).scrollTop()>o?$(".js-main-logo-block").addClass("sticky"):$(".js-main-logo-block").removeClass("sticky")};
		n(),t(),
		$(window).scroll(function(){t()}),
		$(window).bind("resize orientationchange",
			function(){n(),t()})});