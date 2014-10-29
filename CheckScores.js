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
    var math13 = 0;
    var chem11 = 0;
    var chem12 = 0;
    var chem13 = 0;
    var coen10 = 0;
    var coen11 = 0;
    var phys31 = 0;
    var phys33 = 0;
    var biol22 = 0;
    var math9 = 1;
    
    //check each AP score box and waive appropriate classes
    var score = document.getElementById("AP_Calc_AB_Score").selectedIndex;
    if(score > 3) {
        math11 = 1;//waive math 11
    }
    score = document.getElementById("AP_Calc_BC_Score").selectedIndex;
    if(score == 3)
        math11 = 1;//waive math 11
    else if (score > 3) {
        math11 = 1;
        math12 = 1;//waive math 11 and math 12
    }
    score = document.getElementById("AP_Chem_Score").selectedIndex;
    if(score == 3)
        chem11 = 1;//waive chem11
    else if(score == 4) {
        chem11 = 1;
        chem12 = 1;//waive chem11 and chem12
    }
    else if(score == 5) {
        chem11 = 1;
        chem12 = 1;
        chem13 = 1;//waive chem11, chem12, chem13
    }
    score = document.getElementById("AP_Comp_Sci_Score").selectedIndex;
    if(score == 3)
        coen10 = 1;//waive coen10
    else if(score > 3) {
        coen10 = 1;
        coen11 = 1;//waive coen 10 and coen 11
    }
    score = document.getElementById("AP_Mech_Score").selectedIndex;
    if(score > 3)
        phys31 = 1;//waive phys31
    score = document.getElementById("AP_EnM_Score").selectedIndex;
    if(score > 3)
        phys33 = 1;//waive phys33
    

    //check CRE
    var CREScore = document.getElementById("CRE_Score").selectedIndex;
    if(CREScore == 2)
        math9 = 0;//unwaive math 9
  

    
    //check all checkboxes
    if(document.getElementById("OC_MATH11").checked == true)
        math11 = 1;//waive math 11
    if(document.getElementById("OC_MATH12").checked == true)
        math12 = 1;//waive math 12
    if(document.getElementById("OC_MATH13").checked == true)
        math13 = 1;//waive math 13
    if(document.getElementById("OC_COEN10").checked == true)
        coen10 = 1;//waive COEN10
    if(document.getElementById("OC_COEN11").checked == true)
        coen11 = 1;//waive COEN11
    if(document.getElementById("OC_PHYS31").checked == true)
        phys31 = 1;//waive PHYS31
        
        
        
        
        
        
    
    //alert waived classes
    if(math9 == 1)
        alert("Math 9 is waived.");
    if(math11 == 1)
        alert("Math 11 is waived.");
    if(math12 == 1)
        alert("Math 12 is waived.");
    if(math13 == 1)
        alert("Math13 is waived.");
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