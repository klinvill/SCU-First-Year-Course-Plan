/* ----- File containing the logic for making the schedule look nice. ----- */

var rowBasedSchedule;

// Function: initializes the row based schedule based on global variabls.

(function initRowBasedSchedule()
{
    rowBasedSchedule = [];
    
    for (var i = 0; i < numQuarters; i++)
    {
        rowBasedSchedule.push([]);
    }
})()


// Function: called on a course schedule to improve the look of the schedule.
// Parameter: a quarter based schedule array.
// Return Value: a quarter based schedule that has been organized.
function organizeSchedule(schedule)
{
    throwIfTypeDoesNotMatch(schedule, "object", "organizeSchedule");
    
    var subjectsToCheck = ["MATH", "COEN", "CTW", "C&I", "PHYS"]
    
    // MATH
    var mathCoursesByQuarter = [];
    
    for (var i = 0; i < schedule.length; i++)
    {
        mathCoursesByQuarter.push(mathClassFromQuarter(schedule[i]));
    }
    
    for (var i = 0; i < rowBasedSchedule.length; i++)
    {
        var row = rowBasedSchedule[i];
        if (rowHasRoom(row, )
    }
    
    // COEN
    var COENCoursesByQuarter = [];
    
    for (var i = 0; i < schedule.length; i++)
    {
        COENCoursesByQuarter.push(courseOfTypeFromQuarter("COEN", schedule[i]));
    }
}

/* --- Schedule Information Getters and Setters --- */

// Function: removes the given course from the schedule.
// Parameters: a course to be removed and the schedule.
// Return Value: Boolean for whether course was found in schedule.
function removeCourseFromSchedule(tempCourse, schedule)
{
    throwIfTypeDoesNotMatch(tempCourse, "object", "removeCourseFromSchedule");
    throwIfTypeDoesNotMatch(schedule, "object", "removeCourseFromSchedule");
    
    for (var i = 0; i < schedule.length; i++)
    {
        var quarter = schedule[i];
        
        for (var j = 0; j < quarter.length; j++)
        {
            if (quarter[i] == tempCourse)
            {
                quarter.splice(j,1);
                return true;
            }
        }
    }
    
    return false;
}

// Function: counts the number of non-undefined values in the array.
// Parameter: a row of courses.
// Return Value: number of courses in the row array.
function numCoursesInRow(row)
{
    throwIfTypeDoesNotMatch(row, "object", "numCoursesInRow");
    
    var count = 0;
    
    for (var i = 0; i < row.length; i++)
    {
        if (row[i] != undefined) count++;
    }
    
    return count;
}

// Function: called to check if a given row has room for all the courses in a list.
// Parameters: a row array and a list of courses array.
// Return value: Boolean.

function rowHasRoom(row, courses)
{
    
}

/* --- Extracting Data from Schedule or Quarter --- */


// Function: called to get a course of given type out of a quarter.
// Parmaeters: a type string and a quarter array of courses.
// Return value: a course of given type if one is present in quarter. Undefined otherwise.
function courseOfTypeFromQuarter(type, quarter)
{
    throwIfTypeDoesNotMatch(type, "string", "courseOfTypeFromQuarter");
    throwIfTypeDoesNotMatch(quarter, "object", "courseOfTypeFromQuarter");
    
    for (var i = 0; i < quarter.length; i++)
    {
        var tempCourse = quarter[i];
        if (courseIsType(type))
            return tempCourse;
    }
    
    return undefined;
}

// Function: called to get a math course out of a quarter.
// Parmaeter: a quarter array of courses.
// Return value: a math course if one is present. Undefined otherwise.
function mathClassFromQuarter(quarter)
{
    throwIfTypeDoesNotMatch(quarter, "object", "mathClassFromQuarter");
    
    for (var i = 0; i < quarter.length; i++)
    {
        var tempCourse = quarter[i];
        if (courseIsType("MATH") || courseIsType("AMTH"))
            return tempCourse;
    }
    
    return undefined;
}

