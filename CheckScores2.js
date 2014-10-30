/*  Function:       CheckWaived()
    Description:    Checks each test and sees if each test can get a class waived.
                    Afterwards, it displays the waived classes on the textbox.
                    ...There must be a more efficient way of doing this.
*/

console.warn("Need custom course waiving logic in course waiving function.");
console.warn("Need to check AMATH 106 waiving logic.");
console.warn("Need to add AP Physics B Test.");

function CheckWaived() {
    
    // None of the following logic includes the section where they can
    // just choose to waive any course that they want.
    
    var score;
    
    // Getting Scores
    var AP_Calc_AB_Score = document.getElementById("AP_Calc_AB_Score").selectedIndex;
    var AP_Calc_BC_Score = document.getElementById("AP_Calc_BC_Score").selectedIndex;
    var CRE_Score = document.getElementById("CRE_Score").selectedIndex;
    var AP_Chem_Score = getElementById("AP_Chem_Score").selectedIndex;
    var AP_Comp_Sci_Score = document.getElementById("AP_Comp_Sci_Score").selectedIndex;
    var AP_PHYS_Mech_Score = document.getElementById("AP_Mech_Score").selectedIndex;
    var AP_PHYS_EnM_Score = document.getElementById("AP_EnM_Score").selectedIndex;
    
    // --- Math Courses ---
    
        // MATH 9
    if (CRE_Score == 2) // Score of 15 or less
    {
        waiveCourse("MATH 9");
    } else {
        unwaiveCourse("MATH 9");
    }
    
        // MATH 11
    if (CRE_Score != 2 && (AP_Calc_AB_Score >= 3 || AP_Calc_BC_Score >= 3))
    {
        waiveCourse("MATH 11");
    } else {
        unwaiveCourse("MATH 11");
    }
    
        //MATH 12
    if (CRE_Score != 2 && AP_Calc_BC_Score >= 4)
    {
        waiveCourse("MATH 12");
    } else {
        unwaiveCourse("MATH 12");
    }
    
    // --- Chem Courses ---
    
        // Chem 11
    if (AP_Chem_Score >= 3)
    {
        waiveCourse("CHEM 11");
        
    } else {
        unwaiveCourse("CHEM 11");
    }
    
    // Chem 12
    if (AP_Chem_Score >= 4)
    {
        waiveCourse("CHEM 12");
        
    } else {
        unwaiveCourse("CHEM 12");
    }
    
    // Chem 13
    if (AP_Chem_Score >= 5)
    {
        waiveCourse("CHEM 13");
        
    } else {
        unwaiveCourse("CHEM 13");
    }
    
    // --- Coen Courses ----
    
        // COEN 10
    if (AP_Comp_Sci_Score >= 3)
    {
        waiveCourse("COEN 10");
    } else {
        unwaiveCourse("COEN 10");
    }
    
        // COEN 11
    if (AP_Comp_Sci_Score >= 4)
    {
        waiveCourse("COEN 11");
    } else {
        unwaiveCourse("COEN 11");
    }
    
    // --- Physics Courses ----
    
    //Need to add AP Phisics B Test.
        // PHYS 31
    if (AP_PHYS_Mech_Score > 3)
    {
        waiveCourse("PHYS 31");
    } else {
        unwaiveCourse("PHYS 31");
    }
    
    // PHYS 33
    if (AP_PHYS_EnM_Score > 3)
    {
        waiveCourse("PHYS 33");
    } else {
        unwaiveCourse("PHYS 33");
    }