window.addEventListener('DOMContentLoaded', function(e){
var myArr;

	e.preventDefault();  // any default your page may have, it will override it and just take all code from here.
	console.log("js is connected");

	var xmlhttp = new XMLHttpRequest();
	var jsonurl = "data.json";
	xmlhttp.onreadystatechange = function() {
  		if (this.readyState == 4 && this.status == 200) {
    	myArr = JSON.parse(this.responseText);
   
	console.log(xmlhttp); 
	console.log(myArr);

  }
  
}

xmlhttp.open("GET", jsonurl, true);
xmlhttp.send();


$(window).scroll(function(){
		 var scrollPos = $(window).scrollTop() + 88.3;  //scrollTop is built into the jQuery library  //this one the value changes with scroll
		 console.log(scrollPos);


// ********** calculating the offsets between the links and the top and storing it in variables:

	var firstOff = $("#one").offset().top; 
	var secondOff = $("#two").offset().top;
	var thirdOff = $("#three").offset().top;
	var fourthOff = $("#four").offset().top;
	var fifthOff = $("#five").offset().top ;
	var sixthOff = $("#six").offset().top ;
	var seventhOff = $("#seven").offset().top ;
	var eigthOff = $("#eight").offset().top ;

// Define the position of the scrolling to fill in and hide the images 


if (scrollPos >= firstOff && scrollPos < secondOff){

		$('.placement').addClass('show');
		$('.onee').addClass('filled');

		$("img").attr("src",myArr[0].url);
		$("p").text(myArr[0].desc);
       

	} else {
		// $('.placement').removeClass('show');
		$('.onee').removeClass('filled');
		$("img").attr("src",'');

			};


if (scrollPos >= secondOff && scrollPos < thirdOff){

		$('.twoo').addClass('filled');

		$("img").attr("src",myArr[1].url);
		$("p").text(myArr[1].desc);

	}  else { $('.twoo').removeClass('filled');

			};


if (scrollPos >= thirdOff && scrollPos < fourthOff){
		
	 	
		$('.three').addClass('filled');

		$("img").attr("src",myArr[2].url);
		$("p").text(myArr[2].desc);

	}  else { $('.three').removeClass('filled');
			};


if (scrollPos >= fourthOff && scrollPos < fifthOff){

		$('.four').addClass('filled');

		
		$("img").attr("src",myArr[3].url);
		$("p").text(myArr[3].desc);

	}  else { $('.four').removeClass('filled');
			};
	
if (scrollPos >= fifthOff && scrollPos < sixthOff){

		$('.fivee').addClass('filled');

		
		$("img").attr("src",myArr[4].url);
		$("p").text(myArr[4].desc);

	}  else { $('.fivee').removeClass('filled');
			};

if (scrollPos >= sixthOff && scrollPos < seventhOff){
		$('.sixx').addClass('filled');

		
		$("img").attr("src",myArr[5].url);
		$("p").text(myArr[5].desc);

	}  else { $('.sixx').removeClass('filled');
			};

if (scrollPos >= seventhOff && scrollPos < eigthOff){
		$('.sevenn').addClass('filled');

		
		$("img").attr("src",myArr[6].url);
		$("p").text(myArr[6].desc);

	}  else { $('.sevenn').removeClass('filled');
			};

if (scrollPos >= eigthOff){
		$('.eightt').addClass('filled');

		
		$("img").attr("src",myArr[7].url);
		$("p").text(myArr[7].desc);

	}  else { $('.eightt').removeClass('filled');
			};

		});  // end of scroll function


}); // end of DOM CONTENT LOADED

	
