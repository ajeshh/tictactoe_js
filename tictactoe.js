var turn = 0;
var x = []; 
var o = [];
var winCombo = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var win = false;

var divClicked = function(divNumber) {
	var playerTurn = document.getElementById("playerTurn");
	var theDiv = "div" + divNumber;
	var d = document.getElementById(theDiv);

	if(d.innerHTML === "X" || d.innerHTML === "O"){
		alert("spot taken");

	} else {
		turn+=1;

	if (turn % 2){ 
		d.innerHTML = "X";
		d.style.backgroundColor = "#49c8df"; 
		d.style.color = "#ffdb21";
		d.style.fontFamily="Comic Sans,sans-serif";
		x.push(divNumber);
		playerTurn.innerHTML = "O's turn";

		} else {
		d.innerHTML = "O";
		d.style.backgroundColor = "#525eff";
		d.style.color = "#ffdb21";
		d.style.fontFamily="Comic Sans,sans-serif";
		o.push(divNumber);
		playerTurn.innerHTML = "X's turn";
		}
	}
	
	for (var i = 0; i < winCombo.length; i++) {
		if(x.indexOf(winCombo[i][0]) >= 0) {
			if(x.indexOf(winCombo[i][1]) >= 0) {
				if(x.indexOf(winCombo[i][2]) >= 0) {
					alert("you are an xcellent playa");
					location.reload();
					return win = true;	
				}
			}
		}
	}
	for (i = 0; i < winCombo.length; i++) {
		if(o.indexOf(winCombo[i][0]) >= 0) {
			if(o.indexOf(winCombo[i][1]) >= 0) {
				if(o.indexOf(winCombo[i][2]) >= 0) {
					alert("you are an ocellent playa");
					location.reload();
					return win = true;					

				}
			}
		}
	}
	if (turn === 9 && win === false){
		alert("Both of y'all are terrible at this!");
		location.reload();
	}
};




