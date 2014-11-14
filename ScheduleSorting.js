/* ----- File containing the logic for making the schedule look nice. ----- */

var rowBasedSchedule = [[],[],[],[]];


// Function: called on a course schedule to improve the look of the schedule.
// Parameter: a quarter based schedule array.
// Return Value: a quarter based schedule that has been organized.
function organizeSchedule(schedule)
{
    throwIfTypeDoesNotMatch(schedule, "object", "organizeSchedule");
    
    // MATH
    var mathCoursesByQuarter = [];
    
    for (var i = 0; i < schedule.length)
    
    = [mathClassFromQuarter(schedule[0]),
                                mathClassFromQuarter(schedule[1]),
                                mathClassFromQuarter(schedule[2])];
    // COEN
    
    // CTW
    
    // CNI
    
    // PHYS
}

/* --- Functions for removing courses from the schedule --- */

// Function: removes the given course from the schedule.
// Parameters: a course to be removed and the schedule.
// Return Value: Boolean for whether course was found in schedule.
function removeCourseFromSchedule(tempCourse, schedule)
{
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
            return tempCourse
    }
    
    return undefined;
}

