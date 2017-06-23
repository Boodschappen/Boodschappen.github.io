var mycount = 0;

$("#add").click(function (ev) {
    $("#container").append('            <div class="row" style="margin:0"> \
                <div class="panel panel-default" style="background-color:white;"> \
                    <div class="panel-body txtcenter">\
                        <div class="row" style="margin:0">\
                            <div class="col-xs-12">\
                                <div id="add" class="input-group bootstrap-timepicker timepicker">\
                                    <input type="text" class="form-control input-small timepicker1" readonly="true"></input>\
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>\
                                    <img src="images/sun.png" width="30vmin" height="30vmin" /></p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
                <div class="panel panel-default" style="background-color:white;">\
                    <div class="panel-body txtcenter">\
                        <div class="row" style="margin:0">\
                            <div class="col-xs-12">\
                                <div id="add" class="input-group bootstrap-timepicker timepicker">\
                                    <input type="text" class="form-control input-small timepicker1" readonly="true"></input>\
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>\
                                    <img src="images/moon.png" width="30vmin" height="30vmin" /></p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>');
    $('.timepicker1').timepicker({
        showMeridian: false,
        minuteStep: 5,
        showInputs: false,
        disableFocus: true
    });
    mycount = mycount + 1
    if (mycount >= 5) {
        this.disabled = true 
    } else {
        this.disabled=false
    }
});