$(document).ready(function () {
    // chains together multiple animation effects in the same function
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000, function () {
                // Using a callback to restart the loop prevents the fast-cycling bug
                shineLoop();
            });
    };

    // starts the initial shine loop
    shineLoop();

    $(document).on("scroll", function () {
        // determining if the user has scrolled down more than 50 px, then add the class to shrink the header size
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });


    $("#classicCars").on({
        // moves down the images of the cars when the user moves the mouse over the div with the classic cars iD
        mouseenter: function () {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        // hides titles sequentially when the mouse leaves the div with the classic cars id
        mouseleave: function () {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    // adding a click event listener to question elements
    $('div.question').on('click', function () {

        // selecting the immediate next element -- the answer -- and toggle a sliding motion
        $(this).next()
            .slideToggle('slow')

            // target the other answer divs to only show one at a time
            .siblings('div.answer').slideUp();
    });

    $('.carImage').on({
        // fading the color of the car image elements while adding the color class
        mouseenter: function () {
            $(this).fadeTo(500, 1.0, function () {
                // apply the new class as the fade completes
                $(this).addClass('color-focus').removeClass('bw-filter');
            });
        },

        // fade out of the color and back to the grayscale filter
        mouseleave: function () {
            $(this).fadeTo(500, 0.8, function () {
                $(this).addClass('bw-filter').removeClass('color-focus');
            });
        }
    });

    // log if a user starts navigating the website for the FIRST time only
    $("#classicCars").one("mouseenter", function () {
        console.log("User has started exploring the classic cars collection.");
    });

    $("#classicCars").one("mouseenter", function () {
        // make a badge element that goes at the very beginning of the html file
        $("<p class='badge'>Old Cars</p>")
            // make it visible after the user navigates the site for the first time
            .prependTo(this)
            // wait 5 seconds
            .delay(5000)
            // fade it away to invisible
            .fadeOut(1000, function () {
                // then remove the element 
                $(this).remove();
            });
    });
});