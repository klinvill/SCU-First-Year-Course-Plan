/* ----- File containing the logic for making the schedule look nice. ----- */

var rowBasedSchedule;

// Function: initializes the row based schedule based on global variabls.

function initRowBasedSchedule()
{
    rowBasedSchedule = [];
    
    for (var i = 0; i < coursesPerQuarter; i++)
    {
        rowBasedSchedule.push([]);
        
        for (var j = 0; j < numQuarters; j++)
        {
            rowBasedSchedule[i].push(undefined);
        }
    }
}


// Function: called on a course schedule to improve the look of the schedule.
// Parameter: a quarter based schedule array.
// Return Value: a quarter based schedule that has been organized.
function organizeSchedule(schedule)
{
    throwIfTypeDoesNotMatch(schedule, "object", "organizeSchedule");
    
    var subjectsToCheck = ["MATH", "COEN", "CTW", "PHYS", "C&I"];
    
    for (var i = 0; i < subjectsToCheck.length; i++)
    {
        var subject = subjectsToCheck[i]
        var coursesOfSubjectByQuarter = [];
        
        // Getting the courses for the subject.
        for (var j = 0; j < schedule.length; j++)
        {
            var tempCourse;
            
            if (subject == "MATH")
            {
                tempCourse = mathClassFromQuarter(schedule[j]);
            } else {
                tempCourse = courseOfTypeFromQuarter(subject, schedule[i]));
            }
            
            //
            coursesOfSubjectByQuarter.push(tempCourse);
            //Remove course from old schedule.
            removeCourseFromSchedule(tempCourse, schedule);
        }
        
        //Checking each row for room to place courses.
        for (var j = 0; j < rowBasedSchedule.length; j++)
        {
            var row = rowBasedSchedule[j];
            
            if (rowHasRoom(row, coursesOfSubjectByQuarter))
            {
                placeCoursesInRow(coursesOfSubjectByQuarter, row);
                break;
            }
        }
    }
    
    var newSchedule;
    
    // Initialize newSchedule based on rowBasedSchedule.
    
    // Remove undefined values from newSchedule.
    
    // Place remaining courses into newSchedule.
    
}

/* --- Schedule Information Getters and Setters --- */

// Function: removes the given course from the schedule.
// Parameters: a course to be removed and the schedule.
// Return Value: Boolean for whether course was found in schedule.
function removeCourseFromSchedule(tempCourse, schedule)
{
    if (tempCourse == undefined) return false;
    
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

