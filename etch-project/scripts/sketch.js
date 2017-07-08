//everything goes inside the $(document).ready part!
$(document).ready(function() {

	//declare variables
	var $grid = $(".grid");
	var $clear = $("#clear");
	var $trail = $("#trail");
	var $randomColour = $("#random");
	var $erase = $("#erase");
	var $default = $("#default");
	var size = 50; //default grid size is 50x50
	var option = 1;
	var confirm = true;

	//making the grid 
	var createGrid = function(size, option) {
		for(var i = 0; i < size; i++) {
			for(var j = 0; j < size; j++) {
				$grid.append("<div class='box'></div>");
			}
		$grid.append("<br>");
		}	

		if (option===1 || option===3) {
			hover(option);
		}
		else {
			trail();
		}
	}

	var hover = function() {
		if (option ===1 || option===2) {
			$('.box').hover(function() {
 				$(this).css("background-color", "black");
 			});
		}
		else {
			$('.box').hover(function() {
				var randCol = randomColour();
 				$(this).css("background-color", randCol);
 			});
 		}
	};

	//declare toggle between trail function
 	var trail = function() {
		$('.box').hover(function() {
 			$(this).css("opacity", 0);
 		}, function() {
 			$(this).fadeTo('fast', 1);
 		});
 	};

	//random color generator generator
 	var randomColour = function() {
 		var r = Math.floor((Math.random()*255));
 		var g = Math.floor((Math.random()*255)); 
 		var b = Math.floor((Math.random()*255)); 
 		return 'rgb(' + r + ',' + g + ',' + b + ')';

 	};

	createGrid(size, option);
	

	//clear grid button
 	$clear.on('click', function() {
 		size = prompt("Please enter the number of squares per side to make the new grid:");
 		//remove grid
 		$grid.empty();
 		//call createGrid function
 		createGrid(size, option);
 	});

 	//reset button
 	$erase.on('click', function() {
 		$grid.empty();
 		createGrid(size, option); 
 	})

 	//default button resests to default settings
 	$default.on('click', function() {
 		$grid.empty();
 		size = 50;
 		option = 1;
		createGrid(size, option);
 	})

	//random colour button
 	$randomColour.on('click', function() {
 		$grid.empty();
 		option = 3;
 		createGrid(size, option);
 	})

 	//change to trail button
 	$trail.on('click', function() {
 		size = prompt("Please enter the number of squares per side to make the new grid:");
 		//remove grid
 		$grid.empty();
 		option = 2;
 		//call createGrid function
 		createGrid(size, option);
 		
 	});
});