
let setUpToolTip = function() {

	let tooltip = "", 	// contains the tex that will be displayed in the tooltip
		toolTipDiv = document.querySelector('.div-tooltip'),	// points to the div object that contians the tooltip
		toolTipElements = Array.from(document.querySelectorAll('.hover-reveal'));	// array in case there are more elements assigned to .hover-reveal (without Array.from just a node list)


	let displayTooltip = function(e, obj) {
			tooltip = obj.dataset.tooltip; 		//grabs data-tooltip from html
			toolTipDiv.innerHTML = tooltip;		// set inner HTML to , define inner context of element
			toolTipDiv.style.top = e.pageY + 'px';	// change style of tooltip and top-position
			toolTipDiv.style.left = e.pageX + 'px';
			toolTipDiv.style.opacity = 1;
	};


		toolTipElements.forEach(function(elem) {	// for each element in array we gonna add the EventListerner 'mouseenter' - foreach is a higher order function !!!
			elem.addEventListener('mouseover', function(e) {
				displayTooltip(e, this);
			});
			elem.addEventListener('mouseleave', function(e) {
				toolTipDiv.style.opacity = 0;
			});
		});

};

setUpToolTip();		// call the function

