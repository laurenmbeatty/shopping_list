$(document).ready(function () {
    event.preventDefault();
    var name = "";

    //function to make .ajax call to connect server-side
    function sendNoteToServer(name) {
        $.ajax({
            url: "/note/" + name,
        });
    }
    //clicking on the New Liszt heading opens up a text box, and New Liszt fades
    $(".toAppend").on('click', function () {
        $("input").addClass("show-input").fadeIn("slow").focus();
        $(".toAppend").fadeOut(1000);
    });

    //on keystroke "enter," get text input value and append to ul;
    //empties text box, sends console.log with item name to server
    $("input").keypress(function (e) {
        if (e.which == 13) {
            var $text = $("input:text");
            sendNoteToServer($text.val());
            var $newListItem = $("<li class='sortableItem'>" + "<button class='btn-xs check-box'>" +
                "<span class='glyphicon glyphicon-ok'></span></button>" + $text.val() + "</li>");
            $(".userList").append($newListItem);
            $text.val('');

            //clicking on checkbox removes list item with animation and puts focus back in text box
            $("li").on("click", function() {
                $(this).animate({
                    opacity: 0.0,
                    paddingLeft: '+=40'
                }, 500, function() {
                    $(this).remove();
                });
                $("input").focus();
            });
            return false;
        }
    });
});
    //this code will someday allow user to click on li and edit it, then re-append
    //it's close but glitchy

    //$(document).on('click', 'li', function () {
    //    console.log('clicked');
    //    var $newText = $(this).text();
    //    var $newTextBox = $("<input type=text placeholder='" + $newText + "'class='newBox'" + "/>");
    //    $(this).replaceWith($newTextBox);
    //
    //    //then after editing text box user can press enter and replace
    //    $('input').keypress(function (e) {
    //        if (e.which == 13) {
    //            var $newText = $('input:text');
    //            sendNoteToServer($newText.val());
    //            var $brandNewListItem = $("<li class='sortableItem'>" + "<button class='btn-xs check-box'>" +
    //                "<span class='glyphicon glyphicon-ok'></span></button>" + $newText.val() + "</li>");
    //            $(this.newBox).replaceWith($brandNewListItem);
    //            $(".newBox").remove();
    //
    //            $newText.val('');
    //            $(".check-box").on('click', function () {
    //                $(this.li).fadeOut(500);
    //                $(".newBox").remove();
    //                $(".addItem").focus();
    //
    //            });
    //            return false;
    //        }
    //
    //    });
    //
    //});



