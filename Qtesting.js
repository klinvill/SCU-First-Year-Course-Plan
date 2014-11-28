// Function: Runs all the unit tests
// Parameters: none
// Return Value: none
function runUnitTests()
{
    
    /******************************************************/
    /**                MATH SCHEDULE TESTS               **/
    /******************************************************/
    
    QUnit.test("MATH Course Array Tests", function(assert) {
               // Select COEN Major and set defaults
               $('#Major').val("COEN").prop("selected", true).change();
               var schedule = convertCoursesToIds(generateSchedule());
               var expectedSchedule = [["MATH 11", "COEN 10", "CTW 1", "CHEM 11"],
                                       ["MATH 12", "COEN 11", "CTW 2", "PHYS 31"],
                                       ["MATH 13", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               
               /******************************************************/
               /**                    CALC AB TESTS                 **/
               /******************************************************/
               
               // Set Calc AB AP score to just before waiving 11
               $('#AP_Calc_AB_Score').val("3").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 11", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 12", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 13", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Set Calc AB AP score to waive 11
               $('#AP_Calc_AB_Score').val("4").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 12", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 13", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 14", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Set Calc AB AP score to just after waiving 11
               $('#AP_Calc_AB_Score').val("5").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 12", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 13", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 14", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Set Calc AB AP score to waive 11 and set Calc BC AP score to waive 11, then set Calc BC AP to be low enough to not waive 11
               $('#AP_Calc_BC_Score').val("5").prop("selected", true).change();
               $('#AP_Calc_AB_Score').val("5").prop("selected", true).change();
               $('#AP_Calc_BC_Score').val("1").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 12", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 13", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 14", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Reset Calc AP scores
               $('#AP_Calc_AB_Score').val('').prop("selected", true).change();
               $('#AP_Calc_BC_Score').val('').prop("selected", true).change();
               
               
               /******************************************************/
               /**                    CALC BC TESTS                 **/
               /******************************************************/
               
               // Set Calc BC AP score to just before waiving 11
               $('#AP_Calc_BC_Score').val("2").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 11", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 12", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 13", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Set Calc BC AP score to waive 11
               $('#AP_Calc_BC_Score').val("3").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 12", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 13", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 14", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Set Calc BC AP score to just after waiving 11 (already tested below)
               
               
               // Set Calc BC AP score to just before waiving 12 (already tested above)
               
               // Set Calc BC AP score to waive 12
               $('#AP_Calc_BC_Score').val("4").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 13", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 14", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["AMTH 106", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Set Calc BC AP score to just after waiving 12
               $('#AP_Calc_BC_Score').val("5").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 13", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 14", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["AMTH 106", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Set Calc BC AP score to waive 11 and set Calc AB AP score to waive 11, then set Calc AB AP to be low enough to not waive 11
               $('#AP_Calc_BC_Score').val("5").prop("selected", true).change();
               $('#AP_Calc_AB_Score').val("5").prop("selected", true).change();
               $('#AP_Calc_AB_Score').val("1").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 13", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 14", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["AMTH 106", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               
               
               // Reset Calc AP scores
               $('#AP_Calc_AB_Score').val('').prop("selected", true).change();
               $('#AP_Calc_BC_Score').val('').prop("selected", true).change();
               
               
               /******************************************************/
               /**                MATH CHECKBOX TESTS               **/
               /******************************************************/
               
               /* Action: Set math 11 checkbox
                * Expected Result: Math 11 is waived
                */
               
               
               /* Action: Set math 11 and math 13 checkbox
                * Expected Result: Math 11-13 are waived, Math 11-12 are unclickable
                */
               
               
               /* Action: Set math 11 and math 13 checkbox and then unset the math 13 checkbox
                * Expected Result: Math 11 is waived
                */
               
               
               /* Action: Set the Calc BC score to waive MATH 11 and MATH 12 and check all the math checkboxes (13 and 14), then set the CRE score to above 15
                * Expected Result: The math courses should stay waived (no change)
                */
               
               
               
               /******************************************************/
               /**           CALCULUS READINESS EXAM TESTS          **/
               /******************************************************/
               
               /* Action: Set the Calc BC score to waive MATH 11 and MATH 12 and check all the math checkboxes (13 and 14), then set the CRE score to above 15
                * Expected Result: The math courses should stay waived (no change)
                */
               $('#AP_Calc_BC_Score').val("5").prop("selected", true).change();
               // Checking MATH 14 should also check its predecessors
               $("[id = 'OC_MATH 14']").click();
               $('#CRE_Score').val("Pass").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["AMTH 106", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["AMTH 108", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 53", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               
               /* Action: Set the Calc BC score and check all the math checkboxes, then set the CRE score to below 15
                * Expected Result: The math courses should be unwaived and MATH 9 should be inserted
                */
               $('#CRE_Score').val("Fail").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 9", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 11", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 12", "COEN 12", "PHYS 32", "COEN 19"]];
               //assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               assert.unsortedSchedulesEqual(schedule, expectedSchedule);
               
               // Reset Scores set for CRE testing
               $('#AP_Calc_BC_Score').val('').prop("selected", true).change();
               $('#CRE_Score').val('').prop("selected", true).change();
               $("[id = 'OC_MATH 14']").click();
               
               
               });
    var schedule = convertCoursesToIds(generateSchedule());
    var expectedSchedule = [["MATH 11", "COEN 10", "CTW 1", "CHEM 11"],
                            ["MATH 12", "COEN 11", "CTW 2", "PHYS 31"],
                            ["MATH 13", "COEN 12", "PHYS 32", "COEN 19"]];
    console.log(JSON.stringify(schedule) == JSON.stringify(expectedSchedule));
}

// Function: Converts a schedule (array of an array of courses) into an array of an array of strings that correspond to the courseIDs (easier to read and understand)
// Parameters: schedule object.
// Return Value: 2D array of courseIDs.
function convertCoursesToIds(schedule)
{
    var newSchedule = [[], [], []];
    for (var i = 0; i < schedule.length; i++)
    {
        for (var j = 0; j < schedule[i].length; j++)
        {
            newSchedule[i][j] = schedule[i][j].id;
        }
    }
    return newSchedule;
}


// Function: compares two schedules. Returns true if they contain the same the same classes in each quarter. This allows us to test the schedule independent of the sorting function.
// Parameters: two schedule objects (really works for any 2 dimensional array).
// Return Value: Boolean.
function unsortedSchedulesEqual(schedule1, schedule2)
{
    if(schedule1.length != schedule2.length)
        return false;
    // check each quarter
    for (var i = 0; i < schedule1.length; i++)
    {
        if (schedule1[i].length != schedule2[i].length)
            return false;
        for (var j = 0; j < schedule1[i].length; j++)
        {
            if (schedule2[i].indexOf(schedule1[i][j]) == -1)
                return false;
        }
    }
    return true;
    
}

// Function: Calls unsortedSchedulesEqual as a QUnit assertion with a custom expected value so we can read the expected vs. actual schedules as output
// Parameters: two schedule objects.
// Return Value: Boolean.
QUnit.assert.unsortedSchedulesEqual = function checkUnsortedSchedulesEqual(schedule, expectedSchedule)
{
    this.push(unsortedSchedulesEqual(schedule, expectedSchedule), schedule, expectedSchedule, "Schedules equal (unsorted)?");
}