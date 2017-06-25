
window.addEventListener("load", init, false);

function timeSet(){
    put("time", "time", "11:00");
    put("day", "current_day", Days.Monday);
    setDefault();
    weekProgramOn();
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
        setTarget(x.value);
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
    window.setInterval(currentTemp, 3000);

    window.setInterval(getTarget, 10000);
    
    currentTemp();

    getWeekProgram();
    
    weekProgramOn();

}