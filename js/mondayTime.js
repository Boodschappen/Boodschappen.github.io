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

$("#remove1").click(function () {
    $("#row1").hide();
    removePeriod(Days.Monday,0);
    mycount=mycount-1;
});

$("#remove2").click(function () {
    $("#row2").hide();
    removePeriod(Days.Monday,1)
    mycount=mycount-1;
});

$("#remove3").click(function () {
    $("#row3").hide();
    removePeriod(Days.Monday,2)
    mycount=mycount-1;
});

$("#remove4").click(function () {
    $("#row4").hide();
    removePeriod(Days.Monday,3)
    mycount=mycount-1;
});

$("#remove5").click(function () {
    $("#row5").hide();
    removePeriod(Days.Monday,4)
    mycount=mycount-1;
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