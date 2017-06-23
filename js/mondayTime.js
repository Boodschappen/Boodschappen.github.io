window.addEventListener("load", init, false);

var mycount = 0;

$("#add").click(function (ev) {
    mycount = mycount + 1;

    for (var i = 1; i <= 5; i++) {
        if (i > mycount) {
            $("#row" + i).hide();
        } else {
            $("#row" + i).show();
        }
    }



    if (mycount >= 5) {
        this.disabled = true
    } else {
        this.disabled = false
    }
});

function init() {
    mycount = 0;
    for (var i = 1; i <= 5; i++) {
        $("#row" + i).hide();
    }
}