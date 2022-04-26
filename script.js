// let player1 = prompt("Player One: Enter Your Name, You will be Blue");
// let player2 = prompt("Player Two: Enter Your Name, You will be Red");
let player1 = 1;
let player2 =  2;
$(".player").text("PLAYER "+ player1 + ": TURN FOLLOWS")

let countClick = 0;
$(".circle").click(function(e){
    countClick += 1;
    if(countClick % 2 != 0){
        $(this).css("background-color", "aqua");
        $(this).addClass("fa fa-check")
        $(this).off("click");
        if(check("fa fa-check")){
            $(".player").text("PLAYER " + player1 + ": Won the Game")
            $(".circle").off("click");
        }
        else{
            $(".player").text("PLAYER "+ player2 + ": TURN FOLLOWS")
        }
    }
    else{
        $(this).css("background-color", "red");
        $(this).addClass("fa fa-times")
        $(this).off("click");
        if(check("fa fa-times")){
            $(".player").text("PLAYER " + player2 + ": Won the Game")
            $(".circle").off("click");
        }
        else{
            $(".player").text("PLAYER "+ player1 + ": TURN FOLLOWS")
        }
    }
})


function check(symbol) {
	if ($(".sq1").hasClass(symbol) &&
		$(".sq2").hasClass(symbol) &&
		$(".sq3").hasClass(symbol))
	{
		$(".sq1").css("color", "green");
		$(".sq2").css("color", "green");
		$(".sq3").css("color", "green");
		return true;
	} else if ($(".sq4").hasClass(symbol)
			&& $(".sq5").hasClass(symbol)
			&& $(".sq6").hasClass(symbol))
	{
		$(".sq4").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq6").css("color", "green");
		return true;
	} else if ($(".sq7").hasClass(symbol)
			&& $(".sq8").hasClass(symbol)
			&& $(".sq9").hasClass(symbol))
	{
		$(".sq7").css("color", "green");
		$(".sq8").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq1").hasClass(symbol)
			&& $(".sq4").hasClass(symbol)
			&& $(".sq7").hasClass(symbol))
	{
		$(".sq1").css("color", "green");
		$(".sq4").css("color", "green");
		$(".sq7").css("color", "green");
		return true;
	} else if ($(".sq2").hasClass(symbol)
			&& $(".sq5").hasClass(symbol)
			&& $(".sq8").hasClass(symbol))
	{
		$(".sq2").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq8").css("color", "green");
		return true;
	} else if ($(".sq3").hasClass(symbol)
			&& $(".sq6").hasClass(symbol)
			&& $(".sq9").hasClass(symbol))
	{
		$(".sq3").css("color", "green");
		$(".sq6").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq1").hasClass(symbol)
			&& $(".sq5").hasClass(symbol)
			&& $(".sq9").hasClass(symbol))
	{
		$(".sq1").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq3").hasClass(symbol)
			&& $(".sq5").hasClass(symbol)
			&& $(".sq7").hasClass(symbol))
	{
		$(".sq3").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq7").css("color", "green");
		return true;
	} else {
		return false;
	}
}

// Reset 
$(".reset").click(function(e){
    window.location.reload();
})
