window.addEventListener("load", init, false);

var mycount = 0;

$("#saveProgram").click(function () {
    var num = getProgram(Days.Monday).length;
    for (var i = 1; i <= num; i++) {
        removePeriod(Days.Monday, 0);
    }

    for (var i = 1; i <= mycount; i++) {
        addPeriod(Days.Monday, $("#day" + i).val(), $("#night" + i).val());
    }

});

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

function fillWeek() {
    getWeekProgram();
    var times = getProgram(Days.Monday)

    for (var i = 0; i < times.length; i++) {
        $('#day' + (i + 1)).timepicker('setTime', times[i][0]);
        $('#night' + (i + 1)).timepicker('setTime', times[i][1]);
        $('#row' + (i + 1)).show();
        mycount++;
    }
}





function init() {
    mycount = 0;
    for (var i = 1; i <= 5; i++) {
        $("#row" + i).hide();
    }
    fillWeek();
}