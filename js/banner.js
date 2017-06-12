function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 70;
        if (distanceY > shrinkOn) {
            $("#banner-title").addClass("smaller"),
			$("#jumbotron").addClass("smaller"),
			$("#navigate").addClass("smaller"),
			$("#header-image").addClass("smaller");
			$("#navigation").addClass("smaller");
        } else if (distanceY == 0) {
            $("#banner-title").removeClass("smaller"),
			$("#jumbotron").removeClass("smaller"),
			$("#navigate").removeClass("smaller"),
			$("#header-image").removeClass("smaller");
			$("#navigation").removeClass("smaller");
            }
    });
}

window.onload = init();