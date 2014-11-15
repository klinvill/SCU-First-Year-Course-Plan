/* ----- File containing the logic for making the schedule look nice. ----- */

// Function: called on a course schedule to improve the look of the schedule.
// Parameter: a quarter based schedule array.
// Postcondition: schedule is reorganized.
function organizeSchedule(schedule)
{
    throwIfTypeDoesNotMatch(schedule, "object", "organizeSchedule");
    
    var rowBasedSchedule = newRowBasedSchedule();
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
        }
        
        //Checking each row for room to place courses.
        for (var j = 0; j < rowBasedSchedule.length; j++)
        {
            var row = rowBasedSchedule[j];
            
            if (rowHasRoom(row, coursesOfSubjectByQuarter))
            {
                if (placeCoursesInRow(coursesOfSubjectByQuarter, row))
                {
                    //If successfully placed, remove from schedule.
                    removeCoursesFromSchedule(coursesOfSubjectByQuarter, schedule);
                }
                break;
            }
        }
    }
    
    //Place remaining courses into row based schedule.
    for (var i = 0; i < rowBasedSchedule.length; i++)
    {
        var row = rowBasedSchedule[i];
        
        for (var j = 0; i < row.length; j++)
        {
            if (row[j] == undefined)
                row[j] = popFront(schedule[j]);
        }
    }
    
    // Initialize newSchedule based on rowBasedSchedule.
    var newSchedule = newUndefinedSchedule();
    
    // Transfer rowBasedSchedule into newSchedule.
    rowBasedToQuarterBased(rowBasedSchedule, newSchedule);
    
}

/* --- Schedule Initialization --- */

// Function: initializes the row based schedule based on global variabls.
function newRowBasedSchedule()
{
    var rowBasedSchedule = [];
    
    for (var i = 0; i < coursesPerQuarter; i++)
    {
        rowBasedSchedule.push([]);
        
        for (var j = 0; j < numQuarters; j++)
        {
            rowBasedSchedule[i].push(undefined);
        }
    }
    
    return rowBasedSchedule;
}

// Function: Used to initialize a new schedule of quarters filled with undefined.
// Return Value: a quarter schedule filled qith undefined for courses.
function newUndefinedSchedule()
{
    newSchedule = [];
    
    for (var i = 0; i < numQuarters; i++)
    {
        newSchedule.push([]);
    }
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

// Function: removes courses in a list from the schedule.
// Parameters: a course array and the schedule.
function removeCoursesFromSchedule(courseList, schedule)
{
    throwIfTypeDoesNotMatch(courseList, "object", "removeCoursesFromSchedule");
    throwIfTypeDoesNotMatch(schedule, "object", "removeCoursesFromSchedule");
    
    for (var i = 0; i < courseList.length; i++)
    {
        var tempCourse = courseList[i];
        
        if (tempCourse != undefined)
        {
            removeCourseFromSchedule(tempCourse, schedule);
        }
    }
}

// Function: pops the front element off of the array.
// Parameter: an array.
// Return value: the first element of the given array.

function popFront(myArray)
{
    throwIfTypeDoesNotMatch(myArray, "object", "popFront");
    
    if (myArray.length == 0)
    {
        throw "Array provided to popFront is empty.";
    }
    
    var firstElement = myArray[0];
    myArray.splice(0,1);
    
    return firstElement;
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
function rowHasRoom(row, courseList)
{
    throwIfTypeDoesNotMatch(row, "object", "rowHasRoom");
    throwIfTypeDoesNotMatch(courseList, "object", "rowHasRoom");
    
    for (var i = 0; i < row.length; i++)
    {
        if (courseList[i] != undefined && row[i] != undefined)
            return false;
    }
    
    return true;
}

// Function: called to attempt to place the courses
//           in the course list into a given row.
// Parameters: a course array and and a row.
// Return value: Boolean corresponding to whether courses were successsfully placed.
function placeCoursesInRow(courseList, row)
{
    throwIfTypeDoesNotMatch(courseList, "object", "rowHasRoom");
    throwIfTypeDoesNotMatch(row, "object", "rowHasRoom");
    
    if (rowHasRoom(row, courseList))
    {
        for (var i = 0; i < row.length; i++)
        {
            var tempCourse = courseList[i];
            if (tempCourse != undefined)
            {
                row[i] = tempCourse;
            }
        }
        
        return true;
    } else {
        return false;
    }
}

/* --- Schedule Transfer ---*/

// Function: transfers contents of a rowBasedSchedule into a quarter based schedule.
function rowBasedToQuarterBased(rowBasedSchedule, quarterBasedSchedule)
{
    throwIfTypeDoesNotMatch(rowBasedSchedule, "object", "rowBasedToQuarterBased");
    throwIfTypeDoesNotMatch(quarterBasedSchedule, "object", "rowBasedToQuarterBased");
    
    if (rowBasedSchedule.length == 0 || quarterBasedSchedule.length == 0)
        throw "Schedules are empty in rowBasedToQuarterBased.";
    
    if (rowBasedSchedule.length != quarterBasedSchedule[0].length ||
        quarterBasedSchedule.length != rowBasedSchedule[0].length)
        throw "Schedule dimensions do not match in rowBasedToQuarterBased.";
    
    // Main Functionality
    
    for (var i = 0; i < rowBasedSchedule.length; i++)
    {
        var row = rowBasedSchedule[i];
        
        for (var j = 0; j < row.length; j++)
        {
            quarterBasedSchedule[j][i] = row[j];
        }
    }
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

