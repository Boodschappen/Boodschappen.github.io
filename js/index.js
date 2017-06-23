
window.addEventListener("load", init, false);

function timeSet(){
    put("time", "time", "11:00");
    put("day", "current_day", Days.Monday);
}

function init() {

    timeUpdate();


    //slider
    mySlider = $("#slid").slider({
        reversed: true,
        step: step,
    });

    getTarget();

    mySlider.on("change", function (x) {
        setTarget(x.value.newValue);
    });

    $("#dayMode").on("click", function () {
        setTarget(parseFloat(get("dayTemperature", "day_temperature")));
    });

    $("#nightMode").on("click", function () {
        setTarget(parseFloat(get("nightTemperature", "night_temperature")));
    });

    //runtime
    window.setInterval(timeUpdate, 1000);
    //gettemp
    window.setInterval(currentTemp, 1000);

    window.setInterval(getTarget, 1000);
    
    setDefault();
    addPeriod(Days.Monday, "12:00", "14:00");
    addPeriod(Days.Monday, "17:00", "21:00");
    addPeriod(Days.Tuesday, "12:00", "14:00");
    addPeriod(Days.Tuesday, "22:00", "23:00");
    addPeriod(Days.Wednesday, "12:00", "14:00");
    addPeriod(Days.Wednesday, "15:30", "19:00");
    addPeriod(Days.Thursday, "12:00", "14:00");
    addPeriod(Days.Friday, "16:30", "22:00");
    addPeriod(Days.Saturday, "12:00", "14:00");
    addPeriod(Days.Sunday, "17:00", "23:30");
    getWeekProgram();
    
    weekProgramOn();


}