/*  Function:       CheckWaived()
 Description:    Checks each course to see if it has been waived and updates the information in the course list.
 */

console.warn("Need to check AMATH 106 waiving logic.");

function CheckWaived() {
    
    // None of the following logic includes the section where they can
    // just choose to waive any course that they want.
    
    resetWaivedStatuses();
    
    // Getting Scores
    var AP_Calc_AB_Score = document.getElementById("AP_Calc_AB_Score").selectedIndex;
    var AP_Calc_BC_Score = document.getElementById("AP_Calc_BC_Score").selectedIndex;
    var CRE_Score = document.getElementById("CRE_Score").selectedIndex;
    var AP_Chem_Score = document.getElementById("AP_Chem_Score").selectedIndex;
    var AP_Comp_Sci_Score = document.getElementById("AP_Comp_Sci_Score").selectedIndex;
    var AP_PHYS_Mech_Score = document.getElementById("AP_Mech_Score").selectedIndex;
    var AP_PHYS_EnM_Score = document.getElementById("AP_EnM_Score").selectedIndex;
    
    // --- Math Courses ---
    
    // MATH 9
    if (CRE_Score == 2) // Score of 15 or less
    {
        unwaiveCourse("MATH 9");
    } else if (CRE_Score == 1) {
        waiveCourse("MATH 9");
    }
    
    // MATH 11
    if (CRE_Score != 2 && (AP_Calc_BC_Score >= 3 || AP_Calc_AB_Score >= 4))
    {
        waiveCourse("MATH 11");
    }
    
    //MATH 12
    if (CRE_Score != 2 && AP_Calc_BC_Score >= 4)
    {
        waiveCourse("MATH 11");
        waiveCourse("MATH 12");
    }
    
    // --- Chem Courses ---
    
    // Chem 11
    if (AP_Chem_Score >= 3)
    {
        waiveCourse("CHEM 11");
        
    }
    
    // Chem 12
    if (AP_Chem_Score >= 4)
    {
        waiveCourse("CHEM 11");
        waiveCourse("CHEM 12");
        waiveCourse("AMTH 106");
        
    }
    
    // Chem 13
    if (AP_Chem_Score >= 5)
    {
        waiveCourse("CHEM 13");
        
    }
    
    // --- Coen Courses ----
    
    // COEN 10
    if (AP_Comp_Sci_Score >= 3)
    {
        waiveCourse("COEN 10");
    }
    
    // COEN 11
    if (AP_Comp_Sci_Score >= 4)
    {
        waiveCourse("COEN 10");
        waiveCourse("COEN 11");
    }
    
    // --- Physics Courses ----
    
    // PHYS 31
    if (AP_PHYS_Mech_Score > 3)
    {
        waiveCourse("PHYS 31");
    }
    
    // PHYS 33
    if (AP_PHYS_EnM_Score > 3)
    {
        waiveCourse("PHYS 33");
    }
    
    $("#OC_Form input").each(function() {
        if($(this).is(":checked"))
        {
            waiveCourse($(this).val());
        }
    });
}