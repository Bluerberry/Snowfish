var topnav = document.getElementById('topnav');
var tablinks = document.getElementsByClassName('tablink');
var tabcontent = document.getElementsByClassName('tabcontent');



// Top menu script
function foldingMenu() {
	if (topnav.className === 'unfolded') { //bistable folding menu
		topnav.classList.remove('unfolded');
	} else {
		topnav.className = 'unfolded';
	}
}



// Tab menu script
function openTab(pageName, element) {
	for (var i=0; i < tablinks.length; i++) { //reset all tabs to closed position
		tabcontent[i].style.display = 'none';
		tablinks[i].style.backgroundColor = '';
		tablinks[i].style.color = '';
	}
	document.getElementById(pageName).style.display = 'block'; //open the right tab
	element.style.backgroundColor = '#f0f2ef';
	element.style.color = '#333333';
}