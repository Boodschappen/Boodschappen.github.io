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
    Time = get("time", "time")
    CurrentDay = get("day", "current_day")
    $("#day").text(CurrentDay);
    $("#clock").text(Time);
}

function currentTemp() {
    var curr = parseFloat(get("currentTemperature", "current_temperature"));
    var targ = parseFloat(get("targetTemperature", "target_temperature"));

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
    $("#tillTemp").text(nextProgramTime());
}

function setTarget(temp) {
    mySlider.slider('setValue', temp);
    put("targetTemperature", "target_temperature", temp);
    $("#raiseT").text(temp.toFixed(1));
}

function getTarget() {
    setTarget(parseFloat(get("targetTemperature", "target_temperature")));
}

function timesDay(day){
    var times = getProgram(day)
    times = _.flatten(times);
    times.sort(function(a, b) {
        return parseTime(a) - parseTime(b);
    });
    return times;
}

function timeComparision(time){
    return parseTime(time) >= parseTime(Time);
}

function nextProgramTime() {
    return timesDay(CurrentDay).find(timeComparision) || getProgram(nextDay(CurrentDay))[0][0];
}

function nextDay(day){
    if(day===Days.Monday){
        return Days.Tuesday
    }
    if(day===Days.Tuesday){
        return Days.Wednesday
    }
    if(day===Days.Wednesday){
        return Days.Thursday
    }
    if(day===Days.Thursday){
        return Days.Friday
    }
    if(day===Days.Friday){
        return Days.Saturday
    }
    if(day===Days.Saturday){
        return Days.Sunday
    }
    if(day===Days.Sunday){
        return Days.Monday
    }
}

function init() {
    put("time", "time", "11:00");
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

    put("weekProgramState", "week_program_state", "on");


}