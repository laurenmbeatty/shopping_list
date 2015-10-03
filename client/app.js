$(document).ready(function () {
    event.preventDefault();
    var name = "";

    function sendNoteToServer(name) {
        $.ajax({
            url: "/note/" + name,
        });
    };

    $(".toAppend").on('click', function () {
        $("input").addClass("show-input").fadeIn(1000).focus();
        $(".toAppend").fadeOut(1000);
    });

    //on "enter", get text input value and append to ul
    $('input').keypress(function (e) {
        if (e.which == 13) {
            var $text = $('input:text');
            sendNoteToServer($text.val());
            var $newListItem = $("<li class='sortableItem'>" + "<button class='btn-xs check-box'>" +
                "<span class='glyphicon glyphicon-ok'></span></button>" + $text.val() + "</li>");
            $(".userList").append($newListItem);
            $text.val('');
            //clicking on checkbox removes list item and puts focus back in text box
            $(".check-box").on('click', function () {
                $("li:hover").fadeOut(500);
                $("input").focus();

            });
            return false;
        }
    });
});



        //$("li").on('click', function () {
        //        var $newText = $(this).text();
        //        var $newTextBox = $("<input type=text placeholder='" + $newText + "'class='newBox'" + "/>");
        //        $(this).replaceWith($newTextBox);
        //
        //    //then after editing text box user can press enter and replace
        //    $('input').keypress(function (e) {
        //        if (e.which == 13) {
        //            var $newText = $('input:text');
        //            sendNoteToServer($newText.val());
        //            var $brandNewListItem = $("<li class='sortableItem'>" + "<button class='btn-xs check-box'>" +
        //                "<span class='glyphicon glyphicon-ok'></span></button>" + $newText.val() + "</li>");
        //            $(".newBox").replaceWith($brandNewListItem);
        //            //$(".newBox").remove();
        //
        //            $text.val('');
        //        }
        //
        //    });
        //});









