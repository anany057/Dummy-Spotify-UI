
// When the user clicks on the bttn
// toggle between hiding and showing dropdown

function myFunction(){
	document.getElementById("myDropdown").classList.toggle("show");


}


// Close the dropdown menu if the user clicks outside of it


window.onclick=function(event){

	if(!event.target.matches('.dropdown-content')){
		var dropdowns=document.getElementByClassName("dropdown-content");

		var i;

		for(i=0;i<dropdowns.length;i++){
			var openDropdown=dropdowns[i];
			if(openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}



var asideScroll = document.getElementsByClassName('overflow-y');
var i;

for (i = 0; i < asideScroll.length; i++) {


  asideScroll[i].addEventListener('mouseenter', function() {
    this.style.overflowY = 'scroll';
  });


  asideScroll[i].addEventListener('mouseleave',function(){
var element=this;
  	setTimeout(function(){element.style.overflowY='hidden';},2000);


  });
};



var playbuttons = document.getElementsByClassName('fa-circle-play');
var k = 0;

for (var i = 0; i < playbuttons.length; i++) {
  playbuttons[i].addEventListener('click', function() {
    if (k % 2 === 0) {
      document.getElementsByClassName('Music-play-widget')[0].style.display = 'inline-block';
    } else {
      document.getElementsByClassName('Music-play-widget')[0].style.display = 'none';
    }
    k++;
  });
}
