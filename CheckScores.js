/*  Function:       CheckWaived()
 Description:    Checks each course to see if it has been waived and updates the information in the course list.
 */

function CheckWaived() {
    
    // None of the following logic includes the section where they can
    // just choose to waive any course that they want.
    
    //alert($(this).id);
    
    resetWaivedStatuses();
    
    // Check Box Waiving
    
    checkBoxWaiving();
    
    // Getting Scores
    var AP_Calc_AB_Score = document.getElementById("AP_Calc_AB_Score").selectedIndex;
    var AP_Calc_BC_Score = document.getElementById("AP_Calc_BC_Score").selectedIndex;
    var AP_Chem_Score = document.getElementById("AP_Chem_Score").selectedIndex;
    var AP_Comp_Sci_Score = document.getElementById("AP_Comp_Sci_Score").selectedIndex;
    var AP_Env_Sci_Score = document.getElementById("AP_Env_Sci_Score").selectedIndex;
    var AP_PHYS_Mech_Score = document.getElementById("AP_Mech_Score").selectedIndex;
    var AP_PHYS_EnM_Score = document.getElementById("AP_EnM_Score").selectedIndex;
    
    var Prog_Exp = document.getElementById("PPE_Value").selectedIndex;
    var CRE_Score = document.getElementById("CRE_Score").selectedIndex;
    
    // --- Math Courses ---
    
    // MATH 9
    if (CRE_Score == 2) // Score of 15 or less
    {
        unwaiveCourseAndPreReqs("MATH 14");
        
    } else if (CRE_Score == 1) {
        waiveCourse("MATH 9");
    }
    
    // MATH 11
    if (CRE_Score != 2 && (AP_Calc_BC_Score >= 3 || AP_Calc_AB_Score >= 4))
    {
        console.log("CRE_Score = " + CRE_Score + ".");
        console.log("AP_Calc_BC_Score = " + AP_Calc_BC_Score + ".");
        console.log("AP_Calc_AB_Score = " + AP_Calc_AB_Score + ".");
        waiveCourse("MATH 11");
        incrementChecksAndDisabled("MATH 11", "MATH 11 AP_Score");
    } else {
        decrementChecksAndDisabled("MATH 11", "MATH 11 AP_Score");
    }
    
    // MATH 12
    if (CRE_Score != 2 && AP_Calc_BC_Score >= 4)
    {
        waiveCourse("MATH 12");
        incrementChecksAndDisabled("MATH 12", "MATH 12 AP_Score");
        var preReqs = preReqsChain("MATH 12");
        incrementChecksAndDisabledGroup(preReqs, "MATH 12 AP_Score");
    } else {
        decrementChecksAndDisabled("MATH 12", "MATH 12 AP_Score");
        var preReqs = preReqsChain("MATH 12");
        decrementChecksAndDisabledGroup(preReqs, "MATH 12 AP_Score");
    }
    
    //Note this logic might not be correct for ELEN's.
    // AMTH 106
    if ((AP_Chem_Score == 3 && AP_Env_Sci_Score >=4) ||
        (AP_Chem_Score == 3 && checkBoxCheckedByUser("ENVS 21")) ||
        (checkBoxCheckedByUser("CHEM 11") && AP_Env_Sci_Score >= 4) ||
        AP_Chem_Score >= 4)
        
    {
        waiveCourse("AMTH 106");
    }
    // --- Chem Courses ---
    
    // Chem 11
    if (AP_Chem_Score >= 3)
    {
        waiveCourse("CHEM 11");
        incrementChecksAndDisabled("CHEM 11", "CHEM 11 AP_Score");
    } else {
        decrementChecksAndDisabled("CHEM 11", "CHEM 11 AP_Score");
    }
    
    if (AP_Env_Sci_Score >= 4)
    {
        waiveCourse("CHEM 11");
    }
    
    // Chem 12
    if (AP_Chem_Score >= 4)
    {
        waiveCourse("CHEM 12");
    }
    
    /* Currently outside the scope of our system
    // Chem 13
    if (AP_Chem_Score >= 5)
    {
        waiveCourse("CHEM 13");
    }
    */
     
    // --- ENVS Course ---
    
    // ENVS 21
    if (AP_Env_Sci_Score >= 4)
    {
        waiveCourse("ENVS 21");
        incrementChecksAndDisabled("ENVS 21", "ENVS 21 AP_Score");
    } else {
        decrementChecksAndDisabled("ENVS 21", "ENVS 21 AP_Score");
    }
    
    // --- Coen Courses ----
    
    // COEN 10
    if (AP_Comp_Sci_Score >= 3 || Prog_Exp == 1)
    {
        waiveCourse("COEN 10");
        incrementChecksAndDisabled("COEN 10", "COEN 10 AP_Score");
    } else {
        decrementChecksAndDisabled("COEN 10", "COEN 10 AP_Score");
    }
    
    // COEN 11 && COEN 44
    if (AP_Comp_Sci_Score >= 4)
    {
        waiveCourse("COEN 44");
        
        waiveCourse("COEN 11");
        incrementChecksAndDisabled("COEN 11", "COEN 11 AP_Score");
    } else {
        decrementChecksAndDisabled("COEN 11", "COEN 11 AP_Score");
    }
    
    // --- Physics Courses ----
    
    // PHYS 31
    if (AP_PHYS_Mech_Score > 3)
    {
        waiveCourse("PHYS 31");
        incrementChecksAndDisabled("PHYS 31", "PHYS 31 AP_Score");
    } else {
        decrementChecksAndDisabled("PHYS 31", "PHYS 31 AP_Score");
    }
    
    // PHYS 33
    if (AP_PHYS_EnM_Score > 3)
    {
        waiveCourse("PHYS 33");
        incrementChecksAndDisabled("PHYS 33", "PHYS 33 AP_Score");
    } else {
        decrementChecksAndDisabled("PHYS 33", "PHYS 33 AP_Score");
    }
    
}

/* --- Helper Functions to CheckScores Schedule --- */
//Function: Waives courses based on user clicked checkboxes.
function checkBoxWaiving()
{
    var coursesWaivedByUser = userCheckedCourseIDs();
    
    for (var i = 0; i < coursesWaivedByUser.length; i++)
    {
        debugger;
        tempCourseID = coursesWaivedByUser[i];
        if (tempCourseID)
        {
            if (startsWith(tempCourseID, "PHYS"))
                waiveCourse(tempCourseID);
            else
                waiveCourseAndPreReqs(tempCourseID);
        }
    }
    
    // Waiving AMTH 106.
    if (coursesWaivedByUser.indexOf("CHEM 11") > -1 &&
        coursesWaivedByUser.indexOf("ENVS 21") > -1)
    {
        waiveCourse("AMTH 106");
    }
}