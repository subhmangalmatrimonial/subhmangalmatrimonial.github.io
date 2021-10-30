$(document).ready(function () {
    $("#emailcheckwait_wait").hide();
    $("#emailcheckwait_ok").hide();
    $("#emailcheckwait_cros").hide();
    chdisable();

    $('.required').focus(function () {
        //				  alert("fg");
        var $parent = $("#err" + $(this).attr("id"));//$(this).parent();
        $parent.removeClass('error');
        $('span.error', $parent).fadeOut();
    });
    /// ddl religion change 
    $("#ddlreligion").change(function () {

//alert("f");
        $("#loadcaste").show();
        $.ajax({
            type: "POST",
            url: "admin/ajax/functions.php?f=getcaste&p=" + $("#ddlreligion").val(),
            data: "",
            success: function (data1) {
                var $datag = data1.split("!@#$%");
                $("#ddlcaste").empty();
                $("<option value='0'>--- Select Caste ---</option>").appendTo('#ddlcaste');
                var str = "";
                for (var i = 0; i < $datag.length; i++)
                {
                    if ($datag[i] != "")
                    {
                        var $datat = $datag[i].split('@@@@!!@@@@');
                        str += "<option value='" + $datat[1] + "'>" + $datat[0] + "</option>";
                    }
                }
                $(str).appendTo('#ddlcaste');


//alert("f");
                $("#loadsubcaste").show();
                $.ajax({
                    type: "POST",
                    url: "admin/ajax/functions.php?f=getsubcaste&p=" + $("#ddlcaste").val(),
                    data: "",
                    success: function (data1) {
                        var $datag = data1.split("!@#$%");
                        $("#ddlsubcaste").empty();
                        $("<option value='0'>--- Select Sub Caste ---</option>").appendTo('#ddlsubcaste');
                        var str = "";
                        for (var i = 0; i < $datag.length; i++)
                        {
                            if ($datag[i] != "")
                            {
                                var $datat = $datag[i].split('@@@@!!@@@@');
                                str += "<option value='" + $datat[1] + "'>" + $datat[0] + "</option>";
                            }
                        }
                        $(str).appendTo('#ddlsubcaste');
                        $("#loadsubcaste").hide();
                    }
                });


                $("#loadcaste").hide();
            }
        });




// ddl sub caste

    });


    $("#ddlcaste").change(function () {

//alert("f");
        $("#loadsubcaste").show();
        $.ajax({
            type: "POST",
            url: "admin/ajax/functions.php?f=getsubcaste&p=" + $("#ddlcaste").val(),
            data: "",
            success: function (data1) {
                var $datag = data1.split("!@#$%");
                $("#ddlsubcaste").empty();
                $("<option value='0'>--- Select Sub Caste ---</option>").appendTo('#ddlsubcaste');
                var str = "";
                for (var i = 0; i < $datag.length; i++)
                {
                    if ($datag[i] != "")
                    {
                        var $datat = $datag[i].split('@@@@!!@@@@');
                        str += "<option value='" + $datat[1] + "'>" + $datat[0] + "</option>";
                    }
                }
                $(str).appendTo('#ddlsubcaste');
                $("#loadsubcaste").hide();
            }
        });

    });
    $("#ddlcity").change(function(){
if($("#ddlcity").val()=="xx"){
$("#txtcity").show();
$("#lblcity").show();
$("#txtcity").val("");
}else{
    if($("#ddlcity").val()=="0"){
        $("#txtcity").hide();
        $("#lblcity").hide();
        $("#txtcity").val("");
    }else{
$("#txtcity").hide();
$("#lblcity").hide();
$("#txtcity").val($("#ddlcity option:selected").text());
}
}

});

$("#ddlstate").change(function(){
    
//alert($("#ddlstate").val());
$("#loadcity").show();
$.ajax({
type: "POST",
url: "admin/ajax/functions.php?f=getcity&p="+$("#ddlstate").val(),
data: "",
success: function(data1){
var $datag=data1.split("!@#$%");
$("#ddlcity").empty();
$("<option value='0'>--- Select City ---</option>").appendTo('#ddlcity');
var str="";
for(var i=0;i<$datag.length;i++)
{
if($datag[i]!="")
{
   var $datat=$datag[i].split('@@@@!!@@@@');
    str+="<option value='"+$datat[1]+"'>"+$datat[0]+"</option>";
}
}
$(str).appendTo('#ddlcity');
$("<option value='xx'>Other</option>").appendTo('#ddlcity');
$("#loadcity").hide();
if($("#ddlcity").val()=="xx"){
$("#txtcity").show();
$("#lblcity").show();
$("#txtcity").val("");
}else{
    
    if($("#ddlcity").val()=="0"){
        $("#txtcity").hide();
        $("#lblcity").hide();
        $("#txtcity").val("");
    }else{
$("#txtcity").hide();
$("#lblcity").hide();
$("#txtcity").val($("#ddlcity option:selected").text());
}}
}
});});

$("#ddlcountryliving").change(function(){
    
//alert($("#ddlstate").val());
$("#loadstate").show();
$.ajax({
type: "POST",
url: "admin/ajax/functions.php?f=getstate&p="+$("#ddlcountryliving").val(),
data: "",
success: function(data1){
   
//alert(data1);
var $datag=data1.split("!@#$%");
$("#ddlstate").empty();
$("<option value='0'>--- Select State ---</option>").appendTo('#ddlstate');
var str="";
for(var i=0;i<$datag.length;i++)
{
if($datag[i]!="")
{
   var $datat=$datag[i].split('@@@@!!@@@@');
    str+="<option value='"+$datat[1]+"'>"+$datat[0]+"</option>";
}
}
$(str).appendTo('#ddlstate');
$("#loadcity").show();
$.ajax({
type: "POST",
url: "ajax/functions.php?f=getcity&p="+$("#ddlstate").val(),
data: "",
success: function(data1){
var $datag=data1.split("!@#$%");
$("#ddlcity").empty();
$("<option value='0'>--- Select City ---</option>").appendTo('#ddlcity');
var str="";
for(var i=0;i<$datag.length;i++)
{
if($datag[i]!="")
{
   var $datat=$datag[i].split('@@@@!!@@@@');
    str+="<option value='"+$datat[1]+"'>"+$datat[0]+"</option>";
}
}
$(str).appendTo('#ddlcity');
$("<option value='xx'>Other</option>").appendTo('#ddlcity');
$("#loadcity").hide();
if($("#ddlcity").val()=="xx"){
$("#txtcity").show();
$("#lblcity").show();
$("#txtcity").val("");
}else{
    if($("#ddlcity").val()=="0"){
        $("#txtcity").hide();
        $("#lblcity").hide();
        $("#txtcity").val("");
    }else{
$("#txtcity").hide();
$("#lblcity").hide();
$("#txtcity").val($("#ddlcity option:selected").text());
}}}});
//alert($("#ddlcountryliving option:selected").text());
if($("#ddlcountryliving option:selected").text().toLowerCase()=="india"){

  $("#ddlstate").attr("class","form-control required combo");   
}else
{
    $("#ddlstate").removeAttr("class");   
	 $("#ddlstate").attr("class","form-control required combo");   
}
$("#loadstate").hide();
}
});});
});
function validateFields_reg() {

    $("#txtheight").val($("#ddlheightno option:selected").text());
    var xx = validation("#form-registration");
//    alert(xx);
//    return false;
//    if ($(".error").size() == 0) {
//
//        var tt = 0;
//    } else {
//
//        var xy = $(".error").css("top").split("px");
//        var tt = xy[0];
//        tt = tt - 50;
//    }
//alert(tt);
//    $(document).scrollTop(tt);
//var xx=true;
//alert(xx);
if($("#txtemailid").val()==="" || $("#txtpass").val()==="" || $("#txtcpass").val()===""){
  
    return false;
}

    if (xx) {

        if ($("#txtmobile").val() === "" || $("#txtmobile").val().length !== 10 || $("#txtmobile").val() === "0000000000") {
            alert("Please Enter Valid Mobile No.");
            $("#txtmobile").focus();
            return false;
        }

        if ($('input[name=sex]:checked').val() === "Male" && $("#txtage").val() < 21) {

            alert("Age should be greater than to 21.");
            $("#txtdob").focus();
            return false;
        }


        if ($("#tcbox").prop("checked") === false) {
            alert("Please Accept Terms and Conditions.");
            $("#tcbox").focus();
            return false;
        }
        if ($("#ct_captcha").val() === "") {
            alert("Please Enter captcha.");
            $("#ct_captcha").focus();
            return false;
        }

        if ($("#ct_captcha").val() !== $("#secure_chk").val()) {
            alert("Please Enter Valid  captcha code .");
            $("#ct_captcha").focus();
            return false;
        }
        $('#form-registration input[name=sex]').on('change', function () {
            alert($('input[name=sex]:checked', '#form-registration').val());
            return false;
        });
        $.ajax({
            type: "POST",
            url: "admin/ajax/functions.php?f=checkemailid&p=" + $("#txtemailid").val(),
            data: "",
            success: function (data1) {

                if (data1 === "false") {
                    $("#form-registration").submit();
                    return true;

                } else {
                    $("#btnsubmit").val("Submit & Continue...");
                    alert("Email Id Already Exists.");
                    $("#txtemailid").focus();
                    return false;
                }

            }
        });
        return false;
    } else {

        return false;
    }
    return false;
}

function ddchange(x) {
    return true;
}
function newddchange(x) {
    return true;
}

function chdisable() {
    $("#ddlchild").attr("disabled", "true");
    $("#ddlchild").val("None");
    $("#rdchliv").attr("disabled", "true");
    $("#rdchnotliv").attr("disabled", "true");
    $("#rdchliv").removeAttr("checked");
    $("#rdchnotliv").removeAttr("checked");
}
function chenable() {
    $("#ddlchild").removeAttr("disabled");
    $("#rdchliv").removeAttr("disabled");
    $("#rdchnotliv").removeAttr("disabled");

}




function checkemail()
{
    var email = $("#txtemailid").val();
//alert(email);
    if ($("#txtemailid").val() == '' || !validateEmail($("#txtemailid").val())) {
        alert("!Pleast Enter Valid Email Id.");
    } else {
        $("#emailcheckwait_wait").show();
        $.ajax({
            type: "POST",
            url: "pages/Checkemail.php?email123=" + email,
            data: "",
            success: function (data1) {
//	alert(data1);
//$("#check").html(data1);

                if (data1 === "1") {
                    $("#emailcheckwait_wait").hide();
                    $("#emailcheckwait_ok").show();
                    $("#emailcheckwait_cros").hide();
                } else {
                    $("#emailcheckwait_wait").hide();
                    $("#emailcheckwait_ok").hide();
                    $("#emailcheckwait_cros").show();
                }
            }
        });

    }

    return false;

}


function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}