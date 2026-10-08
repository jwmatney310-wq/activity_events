// Jackson Matney | October 8, 2026
$(document).ready(function () {
    // Select one button by its ID and respond to a click.
    $("#click-button").on("click", function () {
        $(this).text("You clicked the button!");
    });

    // Select the button by its class and respond to a double-click.
    $(".double-button").on("dblclick", function () {
        $(this).toggleClass("changed-button");

        if ($(this).hasClass("changed-button")) {
            $(this).text("You double-clicked the button!");
        } else {
            $(this).text("Double-click me");
        }
    });

    // Let keyboard users trigger the same change with Enter or Space.
    $(".double-button").on("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            $(this).trigger("dblclick");
        }
    });

    // Select a paragraph by its element type and class.
    $("p.hover-box").on("mouseenter focus", function () {
        $(this).addClass("hover-active");
        $(this).text("The hover event changed this paragraph!");
    });

    $("p.hover-box").on("mouseleave blur", function () {
        $(this).removeClass("hover-active");
        $(this).text("Hover over me");
    });
});
