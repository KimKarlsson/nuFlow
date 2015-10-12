$(document).ready(function() {
    var myName = "";
    var myEmail = "";
    var myMess = "";
    //Name
    $("#form_name").on("input", function() {
        var input = $(this);
        //----------------------- få värde
        var myNewName = $(this).val();
        myName = $("#firstname");
        myName = myNewName;
        console.log(myNewName);
        //-------------------------
        var is_fname = input.val();
        if (is_fname) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //email
    $("#form_email").on("input", function() {
        var input = $(this);
        //----------------------- få värde
        var myNewEmail = $(this).val();
        myEmail = $("#email");
        myEmail = myNewEmail;
        console.log(myNewEmail);
        //-------------------------
        var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    // Message 
    $("#form_mess").keyup(function(event) {
        var input = $(this);
        //---------------få värde
        var myNewMess = $(this).val();
        myMess = $("#mess");
        myMess = myNewMess;
        console.log(myNewMess);
        //-----------------------
        var message = $(this).val();
        console.log(message);
        if (message) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //submit
    $("#contact").on("click", function(event) { // testar 
        var form_data = $("#inmat").serializeArray();
        var error_free = true;
        for (var input in form_data) {
            var element = $("#form_" + form_data[input]["name"]);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());
            if (!valid) {
                error_element.removeClass("error").addClass("error_show");
                error_free = false;
            }
            else {
                error_element.removeClass("error_show").addClass("error");
            }
        }
        if (!error_free) {
            event.preventDefault();
        }
        else {
            event.preventDefault();
            //--------ger användarens värden till popup          
            $("#name").text(myName);
            $("#email").text(myEmail);
            $("#mess").text(myMess);
            //----- stäng popup
            $("#popclose").click(function() {
                var targeted_popup_class = $(this).attr('data-popup-close');
                $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
            });
            //----- öppna popup
            $("#contact").is(function() {
                var targeted_popup_class = $(this).attr("data-popup-open");
                $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
            });
            // return ("No errors: Form will be submitted");

        }
    });
});
