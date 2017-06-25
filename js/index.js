
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

    mySlider.on("slideStop", function (x) {
        setTarget(x.value.newValue);
    });

    $("#dayMode").on("click", function () {
        setTarget(parseFloat(get("dayTemperature", "day_temperature")));
    });

    $("#nightMode").on("click", function () {
        setTarget(parseFloat(get("nightTemperature", "night_temperature")));
    });

    //runtime
    window.setInterval(timeUpdate, 10000);
    //gettemp
    window.setInterval(currentTemp, 10000);

    window.setInterval(getTarget, 10000);
    
    setDefault();
    addPeriod(Days.Monday, "09:00", "12:00");
    addPeriod(Days.Monday, "17:00", "22:00");
    addPeriod(Days.Tuesday, "09:00", "12:00");
    addPeriod(Days.Tuesday, "17:00", "22:00");
    addPeriod(Days.Wednesday, "09:00", "12:00");
    addPeriod(Days.Wednesday, "17:00", "22:00");
    addPeriod(Days.Thursday, "09:00", "12:00");
    addPeriod(Days.Friday, "17:00", "22:00");
    addPeriod(Days.Saturday, "09:00", "12:00");
    addPeriod(Days.Sunday, "17:00", "22:00");
    getWeekProgram();
    
    weekProgramOn();

}