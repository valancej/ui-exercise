$(document).ready(function() {
    //Display default values
    setDefaultValues();
    //Run main function on click
    $(".prescreen-button").click(calculateValues);
    //reset on click
    $(".reset-button").click(resetInput);
    //Check for palindrome
    $('body').on('DOMNodeInserted', function(e) {
        $('.key').each(function() {
            var keyText = $(this).text().replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g, "").toLowerCase();
            var palindrome = keyText.split('').reverse().join('');
            if (palindrome === keyText) {
                $(this).parent().addClass('prescreen-palindrome');
            }
        })
    });
});



function setDefaultValues() {
    var values = "John, 2\n" + "Jane, 3\n" + "John, 4\n" + "Jane, 5";
    $(".prescreen-input").val(values);
}


function calculateValues() {
    var input = $(".prescreen-input").val();
    var mainObj = {};

    if (!input) {
        alert("No input entered."); //check if any input
    } else {
        //Create two variables to store key value pairs
        var name = "";
        var number = 0;
        input = input.split("\n");


        for (var i = 0; i < input.length; i++) {
            name = input[i].split(",")[0];
            number = input[i].split(",")[1];
            name = name.trim();
            number = parseInt(number.trim());

            //Check if name is in mainObj
            if (name in mainObj) {
                mainObj[name] += number;
            } else {
                mainObj[name] = number;
            }

        }
    }

    //Display Result
    if (mainObj) {
        var result = "";
        $.each(mainObj, function(nameKey, numberVal) {
            result += "<div class='key-val-output'>" + "The total for " + "<span class='key'>" + nameKey + "</span>" + " is " + numberVal + ". " + "</div>";
        });
        $(".prescreen-output").html(result);
    }
}
//reset
function resetInput() {
    setDefaultValues();
    $(".prescreen-output").html("");
}
