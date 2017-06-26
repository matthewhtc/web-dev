var player1 = "O"; //player1 = triangle
var player2 = "X"; //player2 = circle
var turn = "O"; 
var originalBoard = [0 ,1 ,2, 3, 4, 5, 6, 7, 8];
var popup = $(".popup"); 

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

function modal() {
	 
	popup.fadeIn(350); 
        
}

//manipulate
$(document).on("click", ".board", function() {
	//if player 1, fill with colour purple
	if (turn == "O") {
		//add class for styling
		 $(this).removeClass("board"); 
		 $(this).addClass("cross"); 
		//add actual triangle to the board
		$(this).append('<i class="fa fa-times cross" aria-hidden="true"></i></i>');

		$(this).addClass("cross");

		//add player's move to the originalBoard
		originalBoard[Number($(this).attr("value"))] = turn; 
	}
	//else (player 2), fill with colour gray
	else {
		//add class for styling
		$(this).removeClass("board"); 
		$(this).addClass("circle"); 
		//add actual circle to the board
		$(this).append('<i class="fa fa-circle circle" aria-hidden="true"></i>'); 

		
		
		//add player's move to the originalBoard
		originalBoard[Number($(this).attr("value"))] = turn; 
	}

	//check for a winner
	if (winning(originalBoard, turn)) {
		modal(); 
	}


	if (turn == player1) {
		turn = player2; 
	}
	else {
		turn = player1; 
	}

	
}); 

// returns the available spots on the board
function emptyIndexies(board){
  return  board.filter(s => s != "O" && s != "X");
}

// winning combinations using the board indexies for instace the first win could be 3 xes in a row
function winning(board, player){
	if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
		return true;
    } 
    else {
        return false;
    }
}

