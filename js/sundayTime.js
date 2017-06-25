window.addEventListener("load", init, false);

$("#saveProgram").click(function () {
    var num = getProgram(Days.Tuesday).length;
    for (var i = 1; i <= num; i++) {
        removePeriod(Days.Tuesday, 0);
    }

    for (var i = 1; i <= 5; i++) {
        if ($("#row" + i).is(":visible")) {
            addPeriod(Days.Tuesday, $("#day" + i).val(), $("#night" + i).val());
        }
    }
    setWeekProgram();
});

/**-------------------------ADD---------------------------------------------------**/
$("#add1").click(function () {
    $("#row1").show();
    $("#add1").hide();

});

$("#add2").click(function () {
    $("#row2").show();
    $("#add2").hide();
});

$("#add3").click(function () {
    $("#row3").show();
    $("#add3").hide();
});

$("#add4").click(function () {
    $("#row4").show();
    $("#add4").hide();

});

$("#add5").click(function () {
    $("#row5").show();
    $("#add5").hide();
});
/**-------------------------REMOVE---------------------------------------------------**/
$("#remove1").click(function () {
    $("#row1").hide();
    $("#add1").show();

});

$("#remove2").click(function () {
    $("#row2").hide();
    $("#add2").show();

});

$("#remove3").click(function () {
    $("#row3").hide();
    $("#add3").show();

});

$("#remove4").click(function () {
    $("#row4").hide();
    $("#add4").show();

});

$("#remove5").click(function () {
    $("#row5").hide();
    $("#add5").show();


});

function fillWeek() {
    getWeekProgram();
    var times = getProgram(Days.Tuesday)

    for (var i = 0; i < times.length; i++) {
        $('#day' + (i + 1)).timepicker('setTime', times[i][0]);
        $('#night' + (i + 1)).timepicker('setTime', times[i][1]);
        $('#row' + (i + 1)).show();
        $("#add" + (i + 1)).hide();
    }
}





function init() {
    mycount = 0;
    for (var i = 1; i <= 5; i++) {
        $("#row" + i).hide();

        $("#day" + i).timepicker().on('hide.timepicker', onDayHide.bind(this, i));
        $("#night" + i).timepicker().on('hide.timepicker', onNightHide.bind(this, i));
    }
    fillWeek();

}

function onDayHide(i, e) {
    var night = $("#night" + i).val();
    if (parseTime(e.time.value) > parseTime(night)) {
        $('#night' + i).timepicker('setTime', e.time.value);
    }
}

function onNightHide(i, e) {
    var day = $("#day" + i).val();
    if (parseTime(e.time.value) < parseTime(day)) {
        $('#day' + i).timepicker('setTime', e.time.value);
    }
}