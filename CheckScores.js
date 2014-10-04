/*  Function:       CheckWaived()
    Description:    Checks each test and sees if each test can get a class waived.
                    Afterwards, it displays the waived classes on the textbox.
                    ...There must be a more efficient way of doing this.
*/

function CheckWaived() {
    
    /*  Variables for each class that can be waived. 
    *  0 = NOT waived
    *  1 = waived
    */
    var math11 = 0;
    var math12 = 0;
    var chem11 = 0;
    var chem12 = 0;
    var chem13 = 0;
    var coen10 = 0;
    var coen11 = 0;
    var phys31 = 0;
    var phys33 = 0;
    var biol22 = 0;

    //possible tests
    var APtests = ["CalcAB", "CalcBC", "Chem", "CompSciA", "PhysicsM", "PhysicsEaM"];
    
    var testsTaken = [];
    var scoresTaken = [];

    //obtain the tests taken and their respective scores and store in variables
    for (var j = 1; j < (Counts["AP"]+1); j++) {
        var testIndex = document.getElementById("AP_Test_" + j).selectedIndex - 1; //-1 to account for option "Test"
        var score = document.getElementById("AP_Score_" + j).selectedIndex;
        testsTaken[testsTaken.length] = APtests[testIndex];
        scoresTaken[scoresTaken.length] = score;
    }
    
    //check each test taken and see if it waives a class
	for (var i = 0; i < testsTaken.length; i++){
        var currentTest = testsTaken[i];
        var currentScore = scoresTaken[i];
        
		if(currentTest == "CalcAB"){
			if(currentScore > 3)
                math11 = 1;
        }
        else if(currentTest == "CalcBC") {
            if(currentScore == 3)
                math11 = 1;
            else if (currentScore > 3) {
                math11 = 1;
                math12 = 1;
            }
        }
        else if(currentTest == "Chem") {
            if(currentScore == 3) 
                chem11 = 1;
            else if(currentScore == 4) {
                chem11 = 1;
                chem12 = 1;
            }
            else if(currentScore == 5) {
                chem11 = 1;
                chem12 = 1;
                chem13 = 1;
            }
        }
        else if(currentTest == "CompSciA") {
            if(currentScore == 3)
                coen10 = 1;
            else if(currentScore > 3) {
                coen10 = 1;
                coen11 = 1;
            }
        }
        else if(currentTest == "PhysicsM") {
            if(currentScore > 3)
                phys31 = 1;
        }
        else if(currentTest == "PhysicsEaM") {
            if(currentScore > 3)
                phys33 = 1;
        }   
    }
    
    //alert waived classes
    if(math11 == 1)
        alert("Math 11 is waived.");
    if(math12 == 1)
        alert("Math 12 is waived.");
    if(chem11 == 1)
        alert("Chem 11 is waived.");
    if(chem12 == 1)
        alert("Chem 12 is waived.");
    if(chem13 == 1)
        alert("Chem13 is waived.");
    if(coen10 == 1)
        alert("COEN 10 is waived.");
    if(coen11 == 1)
        alert("COEN 11 is waived.");
    if(phys31 == 1)
        alert("Phys 31 is waived.");
    if(phys33 == 1)
        alert("Phys 33 is waived.");
    if(biol22 == 1)
        alert("Bio 22 is waived.");
	}