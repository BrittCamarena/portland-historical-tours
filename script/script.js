// For hamburger icon

window.addEventListener("load", function() {
	var icon = document.getElementById("navIcon");
	var nav = document.getElementsByTagName("ul")[0];
	var link = document.querySelectorAll('nav a');
	
	icon.addEventListener("click", function() {					
		if (nav.className !== "navMobile") {
			nav.className = "navMobile";						
		} else if (nav.className == "navMobile") {
			nav.className = "";
		}
	});
	
	for (var i = 0; i < link.length; i++) {
		link[i].addEventListener("click", function() {
			if (nav.className == "navMobile") {
				nav.className = "";
			}
		});
	};
});