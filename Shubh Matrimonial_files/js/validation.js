function validation($form)
{

    var $formId = $($form);
    var formAction = $formId.attr('action');
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var $error = $("<span class='error'></span>");


    //alert(formAction);
    var left = 0;
    var top = 0;

    $('.err', $formId).removeClass('error');
    $('span.error').remove();

    // Validate all inputs with the class "required"
    $('.email', $formId).each(function () {
        var p = $(this).offset();
        var p = $(this).offset();
        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);
        ;

        var inputVal = $(this).val();
        var $parentTag = $("#err" + $(this).attr("id"));
        if (inputVal != '' && !emailReg.test(inputVal)) {
            $parentTag.append($error.clone().text('Enter Valid E-Mail.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
        }

    });
    $('.image', $formId).each(function () {

        var p = $(this).offset();

        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);

        var inputVal = $(this).val();
        var $parentTag = $("#err" + $(this).attr("id"));
        var $arr = inputVal.split(".");

        if (inputVal != "" && $arr[$arr.length - 1].toLowerCase() != "jpg" && $arr[$arr.length - 1].toLowerCase() != "png" && $arr[$arr.length - 1].toLowerCase() != "jpeg" && $arr[$arr.length - 1].toLowerCase() != "bmp") {
            $parentTag.append($error.clone().text('Selcet Image File.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
        }

    });
//		alert("12"); 
    /*var x=$(".required");
     for(i=0;i<$(".required").size();i++){
     
     }
     */		$('.required', $formId).each(function () {
        //alert("fg");							 
        var p = $(this).offset();
        top = p.top;
//alert(top);
        left = parseInt($(this).width() + 20) + parseInt(p.left);

        var inputVal = $(this).val();
//alert($(this).attr("id"));
//alert(inputVal);

        var $parentTag = $("#err" + $(this).attr("id"));
//alert($parentTag.attr("id"));
        if (inputVal == '') {
            $parentTag.append($error.clone().text('Required Field').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
        } else {

            if ($(this).hasClass('space') == true) {

                if (inputVal.indexOf(" ") != -1) {

                    $parentTag.append($error.clone().text('Space Not Allowed.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }

            if ($(this).hasClass('combo') == true) {

                if (inputVal == '0') {

                    $parentTag.append($error.clone().text('Please Select.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }

            if ($(this).hasClass('code') == true) {

                if (inputVal.length != 4) {
                    $parentTag.append($error.clone().text('Enter 4 Character Code.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }
            if ($(this).hasClass('pass') == true) {
                if (inputVal.length < 6) {
                    $parentTag.append($error.clone().text('Minimum 6 characters required.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }

            if ($(this).hasClass('name_valid') == true) {
                if (inputVal.length < 4) {
                    $parentTag.append($error.clone().text('Minimum 4 characters required.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }




            // Check passwords match for inputs with class "password"
            if ($(this).hasClass('password') == true) {
                var password1 = $('#txtpass').val();
                var password2 = $('#txtcpass').val();
                if (password1 != password2) {
                    $parentTag.append($error.clone().text('Passwords must match').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;width:180px;"));
                }
            }
        }
    });
//alert($('span.error').length);

    if ($('span.error').length > 0) {

        $('span.error').each(function () {

            // Set the distance for the error animation
            var distance = 50;

            // Get the error dimensions
            //var width = $(this).outerWidth();

            // Calculate starting position
            //var start = width + distance;

            // Set the initial CSS
            $(this).show().css({
                //display: 'block',
                opacity: 0,
                //right: -start+'px'
            })
                    // Animate the error message
                    .animate({
                        //right: -width+'px',
                        opacity: 1
                    }, 'slow');

        });
        return false;
    } else {
        return true;

    }
    // Prevent form submission

    // Fade out error message when input field gains focus
    return false;
}
function validationres($form)
{

    var $formId = $($form);
    var formAction = $formId.attr('action');
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var $error3 = $("<span class='error3'></span>");


    //alert(formAction);
    var left = 0;
    var top = 0;

    $('.err', $formId).removeClass('error3');
    $('span.error3').remove();

    // Validate all inputs with the class "required"
    $('.email', $formId).each(function () {
        var p = $(this).offset();
        var p = $(this).offset();
        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);
        ;

        var inputVal = $(this).val();
        var $parentTag = $("#err" + $(this).attr("id"));
        if (inputVal != '' && !emailReg.test(inputVal)) {
            $parentTag.append($error3.clone().text('Enter Valid E-Mail.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
        }

    });
    $('.image', $formId).each(function () {

        var p = $(this).offset();

        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);

        var inputVal = $(this).val();
        var $parentTag = $("#err" + $(this).attr("id"));
        var $arr = inputVal.split(".");

        if (inputVal != "" && $arr[$arr.length - 1].toLowerCase() != "jpg" && $arr[$arr.length - 1].toLowerCase() != "png" && $arr[$arr.length - 1].toLowerCase() != "jpeg" && $arr[$arr.length - 1].toLowerCase() != "bmp") {
            $parentTag.append($error3.clone().text('Selcet Image File.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
        }

    });
//		alert("12"); 
    /*var x=$(".required");
     for(i=0;i<$(".required").size();i++){
     
     }
     */		$('.required', $formId).each(function () {
        //alert("fg");							 
        var p = $(this).offset();
        top = p.top;
//alert(top);
        left = parseInt($(this).width() + 20) + parseInt(p.left);

        var inputVal = $(this).val();
//alert($(this).attr("id"));
//alert(inputVal);

        var $parentTag = $("#err" + $(this).attr("id"));
//alert($parentTag.attr("id"));
        if (inputVal == '') {
            $parentTag.append($error3.clone().text('Required Field').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
        } else {

            if ($(this).hasClass('space') == true) {

                if (inputVal.indexOf(" ") != -1) {

                    $parentTag.append($error3.clone().text('Space Not Allowed.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }

            if ($(this).hasClass('combo') == true) {

                if (inputVal == '0') {

                    $parentTag.append($error3.clone().text('Please Select.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }

            if ($(this).hasClass('code') == true) {

                if (inputVal.length != 4) {
                    $parentTag.append($error3.clone().text('Enter 4 Character Code.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }
            if ($(this).hasClass('pass') == true) {
                if (inputVal.length < 6) {
                    $parentTag.append($error3.clone().text('Minimum 6 characters required.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }

            if ($(this).hasClass('name_valid') == true) {
                if (inputVal.length < 4) {
                    $parentTag.append($error3.clone().text('Minimum 4 characters required.').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;"));
                }
            }




            // Check passwords match for inputs with class "password"
            if ($(this).hasClass('password') == true) {
                var password1 = $('#txtpass').val();
                var password2 = $('#txtcpass').val();
                if (password1 != password2) {
                    $parentTag.append($error3.clone().text('Passwords must match').attr("style", "position:absolute;left:" + left + "px;top:" + top - 100 + "px;width:180px;"));
                }
            }
        }
    });
//alert($('span.error').length);

    if ($('span.error3').length > 0) {

        $('span.error3').each(function () {

            // Set the distance for the error animation
            var distance = 50;

            // Get the error dimensions
            //var width = $(this).outerWidth();

            // Calculate starting position
            //var start = width + distance;

            // Set the initial CSS
            $(this).show().css({
                //display: 'block',
                opacity: 0,
                //right: -start+'px'
            })
                    // Animate the error message
                    .animate({
                        //right: -width+'px',
                        opacity: 1
                    }, 'slow');

        });
        return false;
    } else {
        return true;

    }
    // Prevent form submission

    // Fade out error message when input field gains focus
    return false;
}

function isNumberKey(evt)

{

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;



    return true;

}
function israte(evt)

{

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (charCode != 46) {
        if ((charCode > 31 && (charCode < 48 || charCode > 57)))
            return false;
        return true;
    } else
        return true;
}
function validationnew($form)
{
    var $formId = $($form);
    var formAction = $formId.attr('action');
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var $error = $("<span class='error'></span>");

    var left = 0;
    var top = 0;

    $('.err', $formId).removeClass('error');
    $('span.error').remove();

    // Validate all inputs with the class "required"
    $('.email', $formId).each(function () {
        var p = $(this).offset();
        var p = $(this).offset();
        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);
        ;

        var inputVal = $(this).val();
        var $parentTag = $("#err" + $(this).attr("id"));
        if (inputVal != '' && !emailReg.test(inputVal)) {
            $parentTag.addClass('error').append($error.clone().text('Enter Valid E-Mail.').attr("style", ""));
        }

    });
    $('.image', $formId).each(function () {
        var p = $(this).offset();

        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);

        var inputVal = $(this).val();
        var $parentTag = $("#err" + $(this).attr("id"));
        var $arr = inputVal.split(".");

        if (inputVal != "" && $arr[$arr.length - 1].toLowerCase() != "jpg" && $arr[$arr.length - 1].toLowerCase() != "png" && $arr[$arr.length - 1].toLowerCase() != "jpeg" && $arr[$arr.length - 1].toLowerCase() != "bmp") {
            $parentTag.addClass('error').append($error.clone().text('Selcet Image File.').attr("style", ""));
        }

    });
    //alert("12");
    $('.required', $formId).each(function () {
        //alert("fg");							 
        var p = $(this).offset();
        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);

        var inputVal = $(this).val();
//alert($(this).attr("id"));
//alert(inputVal);

        var $parentTag = $("#err" + $(this).attr("id"));
//alert($parentTag.attr("id"));
        if (inputVal == '') {
            $parentTag.append($error.clone().text('Required Field').attr("style", ""));
        } else {



            if ($(this).hasClass('combo') == true) {

                if (inputVal == '0') {

                    $parentTag.addClass('error').append($error.clone().text('Please Select.').attr("style", ""));
                }
            }
            if ($(this).hasClass('space') == true) {

                if (inputVal.indexOf(" ") != -1) {

                    $parentTag.addClass('error').append($error.clone().text('Space Not Allowed.').attr("style", ""));
                }
            }
            if ($(this).hasClass('code') == true) {

                if (inputVal.length != 4) {
                    $parentTag.addClass('error').append($error.clone().text('Enter 4 Character Code.').attr("style", ""));
                }
            }

            // Check passwords match for inputs with class "password"
            if ($(this).hasClass('password') == true) {
                var password1 = $('#txtpass').val();
                var password2 = $('#txtcpass').val();
                if (password1 != password2) {
                    $parentTag.addClass('error').append($error.clone().text('Passwords must match').attr("style", "width:140px;"));
                }
            }
        }
    });
//alert($('span.error').length);
    if ($('span.error').length > 0) {

        $('span.error').each(function () {

            // Set the distance for the error animation
            var distance = 50;

            // Get the error dimensions
            var width = $(this).outerWidth();

            // Calculate starting position
            var start = width + distance;

            // Set the initial CSS
            $(this).show().css({
                display: 'block',
                opacity: 0,
                right: -start + 'px'
            })
                    // Animate the error message
                    .animate({
                        right: -width + 'px',
                        opacity: 1
                    }, 'slow');

        });
        return false;
    } else {
        return true;

    }
    // Prevent form submission

    // Fade out error message when input field gains focus
    return false;
}


$(document).ready(function () {


    // for buttons
//        $("input[type=reset]").addClass("myButton");
//        if($.browser.msie){
//         $(".myButton").css("padding","5px 0px");
//        }
});


/********************************** second validation ***********************************/

function validation2($form)
{


    var $formId = $($form);
    var formAction = $formId.attr('action');
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var $error = $("<span class='error'></span>");


    // alert(formAction);
    var left = 0;
    var top = 0;

    $('.err', $formId).removeClass('error');
    $('span.error').remove();

    // Validate all inputs with the class "required"
    $('.email', $formId).each(function () {
        var p = $(this).offset();
        var p = $(this).offset();
        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);
        ;

        var inputVal = $(this).val();
        var $parentTag = $("#err" + $(this).attr("id"));
        if (inputVal != '' && !emailReg.test(inputVal)) {
            $parentTag.append($error.clone().text('Enter Valid E-Mail.').attr("style", "position:absolute;left:" + left + "px;top:" + top + "px;"));
        }

    });
    $('.image', $formId).each(function () {

        var p = $(this).offset();

        top = p.top;
        left = parseInt($(this).width() + 20) + parseInt(p.left);

        var inputVal = $(this).val();
        var $parentTag = $("#err" + $(this).attr("id"));
        var $arr = inputVal.split(".");

        if (inputVal != "" && $arr[$arr.length - 1].toLowerCase() != "jpg" && $arr[$arr.length - 1].toLowerCase() != "png" && $arr[$arr.length - 1].toLowerCase() != "jpeg" && $arr[$arr.length - 1].toLowerCase() != "bmp") {
            $parentTag.append($error.clone().text('Selcet Image File.').attr("style", "position:absolute;left:" + left + "px;top:" + top + "px;"));
        }

    });
//		alert("12"); 
    var x = $(".required");
    for (i = 0; i < $(".required").size(); i++) {

        //alert("fg");							 
        var p = $(x[i]).offset();
        top = p.top;
//alert(top);
        left = parseInt($(x[i]).width() + 20) + parseInt(p.left);

        var inputVal = $(x[i]).val();
//alert($(this).attr("id"));
//alert(inputVal);

        var $parentTag = $("#err" + $(x[i]).attr("id"));
//alert($parentTag.attr("id"));
        if (inputVal == '') {
            $parentTag.append($error.clone().text('Required Field').attr("style", "position:absolute;left:" + left + "px;top:" + top + "px;"));
        } else {



            if ($(x[i]).hasClass('combo') == true) {

                if (inputVal == '0') {

                    $parentTag.append($error.clone().text('Please Select.').attr("style", "position:absolute;left:" + left + "px;top:" + top + "px;"));
                }
            }
            if ($(x[i]).hasClass('space') == true) {

                if (inputVal.indexOf(" ") != -1) {

                    $parentTag.append($error.clone().text('Space Not Allowed.').attr("style", "position:absolute;left:" + left + "px;top:" + top + "px;"));
                }
            }
            if ($(x[i]).hasClass('code') == true) {

                if (inputVal.length != 4) {
                    $parentTag.append($error.clone().text('Enter 4 Character Code.').attr("style", "position:absolute;left:" + left + "px;top:" + top + "px;"));
                }
            }

            // Check passwords match for inputs with class "password"
            if ($(x[i]).hasClass('password') == true) {
                var password1 = $('#txtpass').val();
                var password2 = $('#txtcpass').val();
                if (password1 != password2) {
                    $parentTag.append($error.clone().text('Passwords must match').attr("style", "position:absolute;left:" + left + "px;top:" + top + "px;width:140px;"));
                }
            }
        }

    }


    if ($('span.error').length > 0) {

        $('span.error').each(function () {

            // Set the distance for the error animation
            var distance = 50;

            // Get the error dimensions
            var width = $(this).outerWidth();

            // Calculate starting position
            var start = width + distance;

            // Set the initial CSS
            $(this).show().css({
                display: 'block',
                opacity: 0,
                right: -start + 'px'
            })
                    // Animate the error message
                    .animate({
                        right: -width + 'px',
                        opacity: 1
                    }, 'slow');

        });
        return false;
    } else {
        return true;

    }
    // Prevent form submission

    // Fade out error message when input field gains focus
    return false;
}

