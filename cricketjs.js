// declaring global variables

var TeamNames = ["NSW Blues", "QLD Bulls", "TAS Tigers", "WA Warriors"];

var SelectTeam1;
var SelectTeam2;

var playBat = 0;
var playField = 0;	


function gamePlay()														// modularsing sequence.
{
		selection()
		displayWinner()
		updateHighscore()
}

function selection()
{
		SelectTeam1 = document.getElementById("selectTeam1").selectedIndex;
		SelectTeam2 = document.getElementById("selectTeam2").selectedIndex;
		 
		if (SelectTeam1 != SelectTeam2) {
									
		var team1 = document.cricket.selectTeam1.value;						// get and display selected team 1 name.
		
		if (team1 == "0") {
		document.cricket.name1.value = TeamNames[0];
		}
		
		else if (team1 == "1") {
		document.cricket.name1.value = TeamNames[1];
		}
		
		else if (team1 == "2") {
		document.cricket.name1.value = TeamNames[2];
		}
		
		else if (team1 == "3") {
		document.cricket.name1.value = TeamNames[3];
		}
		
		
		var team2 = document.cricket.selectTeam2.value;						// get and display selected team 2 name.
		
		if (team2 == "0") {
		document.cricket.name2.value = TeamNames[0];
		}
		
		else if (team2 == "1") {
		document.cricket.name2.value = TeamNames[1];
		}
		
		else if (team2 == "2") {
		document.cricket.name2.value = TeamNames[2];
		}
		
		else if (team2 == "3") {
		document.cricket.name2.value = TeamNames[3];
		}

		}
		
		else if (SelectTeam1 == SelectTeam2) {							// error check to ensure same team doesn't play against each other with appropriate user feedback.
		alert("Same team cannot play against themselves.");				
		document.getElementById("name1").value= "";
		document.getElementById("name2").value= "";
		return;
		}


}

function calculate() {


	var playerRuns = 0;	
	
	var runs = parseInt(runs);
	var playerOut = false;
	
	do {
	
	playBat = parseInt(Math.round(Math.random()*6+0.5));			// generate random number between 1 and 6.
	playField = parseInt(Math.round(Math.random()*6+0.5));			// generate random number between 1 and 6.
	var diff = parseInt(playBat - playField);						// calculate difference between playBat and playField.
	
	if(diff == 0 && playBat != 6 && playField != 6)					// test whether player is out based on criteria of difference of zero and neither batting and fielding scoring 6.
	
		{
		playerOut = true;								// if criteria is met player is out with 0 runs.
		parseInt(runs = 0);								

		}
		else {
	
		if (diff != 0 && diff != 5){					
		runs = Math.max(diff, 0);						// compare difference to zero and return highest integer value for number of runs. Therefore if diff is less than zero then return zero.
		}
			else if(diff == 5) {						// if difference of playBat and playField equals 5 then runs equals 6.
			parseInt(runs = 6);
			}
				else if(playBat == 6 && playField == 6) {
				parseInt(runs = 0);
				}
					
		}
		playerRuns = parseInt(playerRuns + runs);	// add number of runs to running total of playerRuns.
		parseInt(runs++);
						
	}
	while (playerOut==false);						// only go run through loop and add to running total when player is NOT out.

	return playerRuns;								// return total runs player achieves when calculate function id called.

}


function displayRuns(){
		document.cricket.one1.value = calculate();  // runs for each player on team 1 calculated and displayed in corresponding output box.
		document.cricket.one2.value = calculate();
		document.cricket.one3.value = calculate();
		document.cricket.one4.value = calculate();
		document.cricket.one5.value = calculate();
		document.cricket.one6.value = calculate();
		document.cricket.one7.value = calculate();
		document.cricket.one8.value = calculate();
		document.cricket.one9.value = calculate();
		document.cricket.one10.value = calculate();
		
		
		
		document.cricket.two1.value = calculate();	// runs for each player on team 2 calculated and displayed in corresponding output box.
		document.cricket.two2.value = calculate();
		document.cricket.two3.value = calculate();
		document.cricket.two4.value = calculate();
		document.cricket.two5.value = calculate();
		document.cricket.two6.value = calculate();
		document.cricket.two7.value = calculate();
		document.cricket.two8.value = calculate();
		document.cricket.two9.value = calculate();
		document.cricket.two10.value = calculate();
		
		
		
}

function calcTotalAvg(){
	displayRuns()											// call outputted runs of the 10 players from each team before calculating and displaying teams' totals and averages.
	
	var Team1Players =[];
	Team1Players[0] = parseInt(document.cricket.one1.value);
	Team1Players[1] = parseInt(document.cricket.one2.value);
	Team1Players[2] = parseInt(document.cricket.one3.value);
	Team1Players[3] = parseInt(document.cricket.one4.value);
	Team1Players[4] = parseInt(document.cricket.one5.value);
	Team1Players[5] = parseInt(document.cricket.one6.value);
	Team1Players[6] = parseInt(document.cricket.one7.value);
	Team1Players[7] = parseInt(document.cricket.one8.value);
	Team1Players[8] = parseInt(document.cricket.one9.value);
	Team1Players[9] = parseInt(document.cricket.one10.value);
	
	
	document.cricket.total1.value = parseInt(Team1Players[0]+Team1Players[1]+Team1Players[2]+Team1Players[3]+Team1Players[4]+Team1Players[5]+Team1Players[6]+Team1Players[7]+Team1Players[8]+Team1Players[9]);
	document.cricket.avg1.value =  parseFloat(document.cricket.total1.value/10).toFixed(2);
	
	var Team2Players =[];
	Team2Players[0] = parseInt(document.cricket.two1.value);
	Team2Players[1] = parseInt(document.cricket.two2.value);
	Team2Players[2] = parseInt(document.cricket.two3.value);
	Team2Players[3] = parseInt(document.cricket.two4.value);
	Team2Players[4] = parseInt(document.cricket.two5.value);
	Team2Players[5] = parseInt(document.cricket.two6.value);
	Team2Players[6] = parseInt(document.cricket.two7.value);
	Team2Players[7] = parseInt(document.cricket.two8.value);
	Team2Players[8] = parseInt(document.cricket.two9.value);
	Team2Players[9] = parseInt(document.cricket.two10.value);
	
	
	document.cricket.total2.value = parseInt(Team2Players[0]+Team2Players[1]+Team2Players[2]+Team2Players[3]+Team2Players[4]+Team2Players[5]+Team2Players[6]+Team2Players[7]+Team2Players[8]+Team2Players[9]);
	document.cricket.avg2.value =  parseFloat(document.cricket.total2.value/10).toFixed(2);
}	


function displayWinner(){
		calcTotalAvg()													// call outputted total and average for both teams to determine winner and display winning team name.
		
		var Team1Total = parseInt(document.cricket.total1.value);
		var Team2Total = parseInt(document.cricket.total2.value);
		var winningTeam;
		
		if (Team1Total > Team2Total) {									// if total runs of team 1 is greater than team 2's then display team 1 as winner.
		winningTeam  = document.cricket.name1.value;
		document.cricket.winner.value = winningTeam;
		}
		
		else if (Team1Total < Team2Total) {							// if total runs of team 2 is greater than team 1's then display team 2 as winner.
		winningTeam  = document.cricket.name2.value;
		document.cricket.winner.value = winningTeam;
		}
		
		else if (Team1Total == Team2Total) {							// if total runs of team 1 equal team 2's then display "DRAW" in winner output textbox.
		document.cricket.winner.value == "DRAW";
		}
}

function updateHighscore(){
		
		var ResultsTeam1 = parseInt(document.cricket.total1.value);
		var ResultsTeam2 = parseInt(document.cricket.total2.value);
		var highScore = 0;
		
		highScore = Math.max(ResultsTeam1, ResultsTeam2);				// compare team totals and display highest number of runs in highschore output textbox.
		
		document.cricket.highscore.value = highScore;
		
}