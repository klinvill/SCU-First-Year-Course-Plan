function runUnitTests()
{
    QUnit.test("MATH Course Array Tests", function(assert) {
               // Select COEN Major and set defaults
               $('#Major').val("COEN").prop("selected", true).change();
               var schedule = convertCoursesToIds(generateSchedule());
               var expectedSchedule = [["MATH 11", "COEN 10", "CTW 1", "CHEM 11"],
                                       ["MATH 12", "COEN 11", "CTW 2", "PHYS 31"],
                                       ["MATH 13", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               
               /******************************************************/
               /**                    CALC AB TESTS                 **/
               /******************************************************/
               
               // Set Calc AB AP score to just before waiving 11
               $('#AP_Calc_AB_Score').val("3").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 11", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 12", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 13", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               // Set Calc AB AP score to waive 11
               $('#AP_Calc_AB_Score').val("4").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 12", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 13", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 14", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               // Set Calc AB AP score to just after waiving 11
               $('#AP_Calc_AB_Score').val("5").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 12", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 13", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 14", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               // Set Calc AB AP score to waive 11 and set Calc BC AP score to waive 11, then set Calc BC AP to be low enough to not waive 11
               $('#AP_Calc_BC_Score').val("5").prop("selected", true).change();
               $('#AP_Calc_AB_Score').val("5").prop("selected", true).change();
               $('#AP_Calc_BC_Score').val("1").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 12", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 13", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 14", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
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
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               // Set Calc BC AP score to waive 11
               $('#AP_Calc_BC_Score').val("3").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 12", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 13", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["MATH 14", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               // Set Calc BC AP score to just after waiving 11 (already tested below)
               
               
               // Set Calc BC AP score to just before waiving 12 (already tested above)
               
               // Set Calc BC AP score to waive 12
               $('#AP_Calc_BC_Score').val("4").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 13", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 14", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["AMTH 106", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               // Set Calc BC AP score to just after waiving 12
               $('#AP_Calc_BC_Score').val("5").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 13", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 14", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["AMTH 106", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               // Set Calc BC AP score to waive 11 and set Calc AB AP score to waive 11, then set Calc AB AP to be low enough to not waive 11
               $('#AP_Calc_BC_Score').val("5").prop("selected", true).change();
               $('#AP_Calc_AB_Score').val("5").prop("selected", true).change();
               $('#AP_Calc_AB_Score').val("1").prop("selected", true).change();
               schedule = convertCoursesToIds(generateSchedule());
               expectedSchedule = [["MATH 13", "COEN 10", "CTW 1", "CHEM 11"],
                                   ["MATH 14", "COEN 11", "CTW 2", "PHYS 31"],
                                   ["AMTH 106", "COEN 12", "PHYS 32", "COEN 19"]];
               assert.equal(JSON.stringify(schedule), JSON.stringify(expectedSchedule));
               
               
               // Reset Calc AP scores
               $('#AP_Calc_AB_Score').val('').prop("selected", true).change();
               $('#AP_Calc_BC_Score').val('').prop("selected", true).change();
               
               
               // Set
               
               
               });
    var schedule = convertCoursesToIds(generateSchedule());
    var expectedSchedule = [["MATH 11", "COEN 10", "CTW 1", "CHEM 11"],
                            ["MATH 12", "COEN 11", "CTW 2", "PHYS 31"],
                            ["MATH 13", "COEN 12", "PHYS 32", "COEN 19"]];
    console.log(JSON.stringify(schedule) == JSON.stringify(expectedSchedule));
}

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