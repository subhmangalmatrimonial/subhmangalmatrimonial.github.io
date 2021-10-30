$(document).ready(function() { 		   

$('#btnlogin1').click(function(e){

var xx=validation("#form-login1");
//alert(xx);
if(!xx)
{e.preventDefault();}});
$('.required').focus(function(){
			//				  alert("fg");
		var $parent =  $("#err"+$(this).attr("id"));//$(this).parent();
		$parent.removeClass('error');
		$('span.error',$parent).fadeOut();
	});




/*********************** forgot Password */
$('#submit2').click(function(e){

var xx=validation("#form-forgotpassword");
//alert(xx);
if(!xx)
{e.preventDefault();}});
$('.required').focus(function(){
			//				  alert("fg");
		var $parent =  $("#err"+$(this).attr("id"));//$(this).parent();
		$parent.removeClass('error');
		$('span.error',$parent).fadeOut();
	});

/*********************** end forget ************/



});

