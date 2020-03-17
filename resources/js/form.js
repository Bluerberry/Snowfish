const compatibilityerror = document.getElementById("compatibilityerror");
const interneterror = document.getElementById("interneterror");
const priceerror = document.getElementById("priceerror");
const slider = [
	document.getElementById("q1"),
	document.getElementById("q4")];
const sliderInput = [
	document.getElementById("inputq1"),
	document.getElementById("inputq4")];
const q2 = document.getElementsByName("q2");
const q3 = document.getElementsByName("q3");
const carrousel = document.getElementById("q5");
const modals = document.getElementsByClassName("modal");
var slideIndex = 1;
var carrouselOffset = 0;



for (let element of q2) { //add EventListner for q1
	element.addEventListener("change", updateForm);}
for (let element of q3) { //add EventListner for q2
	element.addEventListener("change", updateForm);}
for (let element of modals) { //open the first slide of every modal
	showSlides(slideIndex, element.id);}
document.getElementById("defaultOpen").click();
updateForm();



//Responsive slider
function updateSlider(value, q, min, max) {
	if (value > max) {
		sliderInput[q].value = max; //rounds down inputbox
	} else if (value < min) {
		sliderInput[q].value = min; //rounds up inputbox
	} else {
		sliderInput[q].value = value; //equals inputbox to current value
	}
	slider[q].value = sliderInput[q].value; //equals slider to inputbox
}



//Responsive orderforms
function updateForm() {
	var price = 300; //approximating price
	var internet = 0; //either 0, 1 or 2, respectively representing: none, wifi and ethernet
	var server = false; //server config
	var pc = false;	//pc config

	compatibilityerror.style.display = ""; //lower error messages
	priceerror.style.display = "";
	interneterror.style.display = "";

    for (var i=0; i < q2.length; i++) {
		var values = q2[i].value.split("-");
		if (q2[i].checked) {
    		if (values[0] > price) { //update price
        		price = values[0];
			}
			if (values[1] > internet) { //update internet
        		internet = values[1];
			}
			if (values[2] === "0") { //update to pc
        		pc = true;
			} else { //update to server
				server = true;
			}
		}
	}
	if (pc && server) {
		compatibilityerror.style.display = "block"; //raise compatibility error
	}
	if (parseInt(price) > parseInt(q1.value)) {
		priceerror.style.display = "block"; //raise price error
	}
    for (var i=0; i < q3.length; i ++) {
		if (q3[i].checked && q3[i].value < internet) { //check if internet requirements are met
			interneterror.style.display = "block"; //otherwise, raise internet error
			break;
		}
	}
}



//Modal interactions
function openModal(modal) { //open a modal
	document.getElementById(modal).style.display = "block";
}
function closeModal(modal) { //close a modal
	document.getElementById(modal).style.display = "none";
}
function plusSlides(n, slideshow) { //go to next slide
  showSlides(slideIndex += n, slideshow);
}
function showSlides(n, slideshow) { //show correct slide
	var slides = document.getElementById(slideshow).getElementsByClassName("slide");
	if (n > slides.length) { //loop back around if you reach the end of the slideshow
		slideIndex = 1;
	}
	if (n < 1) { //loop back around if you reach the beginning of the slideshow
		slideIndex = slides.length;
	}
	for (var i=0; i < slides.length; i++) { //hide all slides
    	slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block"; //show correct slide
}



//Carrousel interactions
function prevcard() {
  if (carrouselOffset !== 0) {
    carrouselOffset += 270;
    carrousel.style.transform = `translateX(${carrouselOffset}px)`;
    }
}
function nextcard() {
  if (carrouselOffset > -270) {
    carrouselOffset -= 270;
    carrousel.style.transform = `translateX(${carrouselOffset}px)`;
  }
}