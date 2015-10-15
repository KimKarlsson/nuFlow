$(document).ready(function() {
    var myName = "";
    var myEmail = "";
    var myMess = "";
    //Name
    $("#form_name").blur("input", function() {
        var input = $(this);
        //Ger värden till popup
        var myNewName = $(this).val();
        myName = $("#firstname");
        myName = myNewName;
        console.log(myNewName);
        var is_fname = input.val();
        // Validerar
        if (is_fname) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //email
    $("#form_email").blur("input", function() {
        var input = $(this);
        //Ge värden till popup
        var myNewEmail = $(this).val();
        myEmail = $("#email");
        myEmail = myNewEmail;
        console.log(myNewEmail);
        //Avgör vad användaren kan mata in
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        var is_email = re.test(input.val());
        //Validerar
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    // Message 
    $("#form_mess").blur(function(event) {
        var input = $(this);
        //Ge värden till popup
        var myNewMess = $(this).val();
        myMess = $("#mess");
        myMess = myNewMess;
        console.log(myNewMess);
        var message = $(this).val();
        console.log(message);
        //Validerar
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
            // Öppnar popup
            $("#furrycontact").is(function() {
                $(".popup, overlay").fadeIn(350);
                $(".close").click(function(e) {
                    $(".popup, overlay").fadeOut(350);
                });
            });
        }
    });
});

$(document).ready(function() {
    //Variablar för att ge värden till popup
    var myFirstname = "";
    var mySecname = "";
    var myZip = "";
    var myEmail = "";
    var myPricemodel = "";
    var myAntal = "";
    //förnamn
    $("#form_fname").on("input", function() {
        var input = $(this);
        //Lämnar värden till popup 
        myFirstname = $("#firstname");
        myFirstname = input.val();
        console.log(myFirstname);
        //Validerar
        if (myFirstname) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //efternamn 
    $("#form_lname").on("input", function() {
        var input = $(this);
        // Lämnar värden till popupen
        mySecname = $("#secnamn");
        mySecname = input.val();
        console.log(mySecname);
        //Validerar
        if (mySecname) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    // postnummer 
    $("#form_number").on("input", function() {
        var input = $(this);
        var re = /\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/;
        var is_test = re.test(input.val());
        //Validerar
        if (is_test) {
            input.removeClass("invalid").addClass("valid");
            //få ut rätt värde till popupen
            var varZip = $(this).val();
            //Ger ändrat värde till popup
            varZip = this.value.replace(/SE|se|-|\s|/g, '');
            myZip = $('#zipcode');
            myZip = varZip;
            console.log(myZip);
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //email
    // måste vara email
    $("#form_email").on("input", function() {
        var input = $(this);
        // ge värde rätt värde till popupen
        var varEmail = $(this).val();
        myEmail = $('#email');
        myEmail = varEmail;
        console.log(myEmail);
        //Avgör vad användaren kan mata in
        var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        var is_email = re.test(input.val());
        //Validerar
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    $("#form_price").on("mouseup", function() {
        var input = $(this);
        // Lämnar värde till popup
        var varPrice = $(this).val();
        myPricemodel = $('#pricemodel');
        myPricemodel = varPrice;
        console.log(myPricemodel);
        var is_price = input.val();
        is_price = (input.value !== "");
        //Validerar
        if (is_price) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    // antal
    $("#form_antal").on("blur keyup", function() {
        var input = $(this);
        var re = /^[0-9]+$/;
        var is_test = re.test(input.val());
        //Lämna värde till popup 
        var varAntal = $(this).val();
        myAntal = $('#antal');
        myAntal = varAntal;
        console.log(myAntal);
        //Validerar
        if (is_test) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //submit
    $("#furrycontact").on("click", function(event) {
        // Validerar användarens uppgifter
        var form_data = $("#inmat").serializeArray();
        var error_free = true;
        for (var input in form_data) {
            var element = $("#form_" + form_data[input]["name"]);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());
            // visar annvändaren om valideringen inte går igenom
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
            //--------ger värden till popup          
            $("#firstname").text(myFirstname);
            $("#secnamn").text(mySecname);
            $("#zipcode").text(myZip);
            $("#email").text(myEmail);
            $("#pricemodel").text(myPricemodel);
            $("#antal").text(myAntal);
            //----- Öppnar popup
            $("#furrycontact").is(function() {
                $(".popup, overlay").fadeIn(350);
                //Stänger popup om användaren väljer det
                $(".close").click(function(e) {
                    $(".popup, overlay").fadeOut(350);
                });
            });
        }
    });
});
