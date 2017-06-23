window.addEventListener("load", init, false);

function init() {

    timeUpdate();
    weekProgramOff();



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
    
}