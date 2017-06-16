var step = 0.1;
var mySlider;

window.addEventListener("load", init, false);

function raise() {
    var current = mySlider.slider('getValue');
    setTarget(current + step);
}

function lower() {
    var current = mySlider.slider('getValue');
    setTarget(current - step);
}

function timeUpdate() {
    $("#day").text(get("day", "current_day"));
    $("#clock").text(get("time", "time"));
}

function currentTemp() {
    var curr = get("currentTemperature", "current_temperature");
    var targ = get("targetTemperature", "target_temperature")

    $("#currentTemp").text(curr + "°C");

    if (curr < targ) {
        $("#up").show();
        $("#dup").hide();
        
    }
    else if (curr > targ) {
        $("#dup").show();
        $("#up").hide();
    }
    else {
        $("#up").hide();
        $("#dup").hide();
    }

}

function setTarget(temp) {
    mySlider.slider('setValue', temp);
    put("targetTemperature", "target_temperature", temp);
    $("#raiseT").text(temp.toFixed(1));
}

function getTarget() {
    setTarget(parseFloat(get("targetTemperature", "target_temperature")));
}

function init() {
    put("time", "time", "20:00");
    put("day", "current_day", Days.Monday);
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

}