//javascript
//1
function textChange(){
	document.getElementById('h2').innerHTML="text has been changed";
}
//2
function textRepeat(){
	var data="Repeated text";
	document.getElementById('hh').innerHTML = data.repeat(6);
}
//3
function imgChangeOne(){
	document.getElementById('img').src="image/portfolio-4.jpg";
}
function imgChangeTwo(){
	document.getElementById('img').src="image/portfolio-5.jpg";
}

//4
function alertMessage(){
	alert("show notification");
}
//5
function trueOrFalse(){
	document.getElementById('demo1').innerHTML = Boolean(10 > 9);
}
//jquery
$(document).ready(function(){
	//1
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	})
	//2
	 wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
})