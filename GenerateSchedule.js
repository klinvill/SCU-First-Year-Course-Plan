// Code for determining a schedule.

//Array of arrays of courses for each quarter.
//First array [0] corresponds to Fall.
//First array [1] corresponds to Winter.
//First array [2] corresponds to Spring.


var classesPerQuarter = 4;

// Function called to fill the courseSchedule with courses.

function generateSchedule(major)
{
    var courseSchedule = [ [], [], [] ];
    var courseArray;
    
    // Sleceting correct course array.
    if (major == "ELEN") {
        courseArray = courseArrayForMajor("ELEN");
    }
    else if (major == "COEN" || major == "")
    {
        courseArray = courseArrayForMajor("COEN");
    }
    else throw "Improper major selection in generateSchedule function.";
    
    
    for (var i = 0; i < courseArray.length; i++)
    {
        var tempCourse = courseArray[i];
        // Check if the course has been waived.
        if (tempCourse.waived) continue;
        
        // Attempt to place the course in the schedule, starting with Fall.
        for (var j = 0; j < courseSchedule.length; j++)
        {
            var quarter = courseSchedule[j]; // Array of courses for quarter.
            
            // Check if the quarter already has 4 courses.
            if (quarter.length >= classesPerQuarter) continue;
            
            // Check if course is available in the quarter.
            var quarterID; //String F, W, or S to identify quarter.
            
                // Getting quarterID.
            if (j == 0) quarterID = "F";
            else if (j == 1) quarterID = "W";
            else if (j == 2) quarterID = "S";
            else throw "j is not a valid quarter, thrown from GenerateSchedule.js";
            
            if (tempCourse.offered.search(quarterID) == -1) continue;
            
            // Check if pre-requisite is waived or already in the quarter.
            if(tempCourse.previous === "")
                var preReqPresent = true;
            else
                var preReqPresent = false;
            
            // check to see if the pre-req is already waived
            if (!preReqPresent)
            {
                // Only check the previous quarters (not the current quarter)
                for (var k = 0; k < j; k++)
                {
                    for (var l = 0; l < courseSchedule[k].length; l++)
                    {
                        var courseInSchedule = courseSchedule[k][l];
                        if (courseInSchedule.id === tempCourse.previous)
                        {
                            preReqPresent = true;
                            break;
                        }
                    }
                }
                
                
                
            }
            
            // If any of the pre-reqs are in the same quarter, move to the next quarter
            if (prereqsPresentInQuarter(tempCourse, quarter))
            {
                continue;
            }
            
            // check to see if the pre-req is already waived
            if (!preReqPresent)
            {
                // the pre-req will be listed before the course in the course array so can shorten the search time by starting at the previous course and working backwards
                for (var k = i - 1; k >= 0; k--)
                    if (courseArray[k].waived && courseArray[k].id === tempCourse.previous )
                    {
                        preReqPresent = true;
                        break;
                    }
            }
            
            if (preReqPresent == true) //continue;
            {
                // Add course to schedule.
                quarter.push(tempCourse);
                break;
            }
        }
    }
    
    // Potentially fill in holes with CNI 1 and 2.
    var fallQuarter = courseSchedule[0];
    var winterQuarter = courseSchedule[1];
    var springQuarter = courseSchedule[2];
        //Check Fall and Winter
    if (fallQuarter.length < classesPerQuarter &&
        winterQuarter.length < classesPerQuarter)
    {
        fallQuarter.push(CNI1Course);
        winterQuarter.push(CNI2Course);
    }
        //Check Winter and Spring
    else if (winterQuarter.length < classesPerQuarter &&
        springQuarter.length < classesPerQuarter)
    {
        winterQuarter.push(CNI1Course);
        springQuarter.push(CNI2Course);
    }
    //Check Winter and Spring
    else if (fallQuarter.length < classesPerQuarter &&
             springQuarter.length < classesPerQuarter)
    {
        fallQuarter.push(CNI1Course);
        springQuarter.push(CNI2Course);
    }
    
    // Fill in holes with core
    for (var j = 0; j < courseSchedule.length; j++)
    {
        var quarter = courseSchedule[j]; // Array of courses for quarter.
        
        // Check if the quarter already has 4 courses.
        while (quarter.length < classesPerQuarter)
            quarter.push(finalCourseOption);
    }
    
    return courseSchedule;
}

// Function: returns boolean if any of a course's prerequisites are in the quarter.
// Takes as parameters the course and the quarter.
function prereqsPresentInQuarter(tempCourse, quarter)
{
    //For courses with a single previous string.
    if (typeof(tempCourse.previous) == "string")
    {
        if (tempCourse.previous === "") return false;
        else {
            var prev = courseForID(tempCourse.previous);
            if (prev == undefined)  debugger;
            // Checking all courses in quarter.
            for (var i = 0; i < quarter.length; i++)
            {
                if (prev.id == quarter[i].id) return true;
            }
            return prereqsPresentInQuarter(prev, quarter);
        }
    }
    // For courses with and array of previous course strings.
    else if (typeof(tempCourse.previous) == "object")
    {
        var allPresent = true;
        
        for (var i = 0; i < tempCourse.previous; i++)
        {
            var prev = courseForID(tempCourse.previous[i]);
            // Checking all courses in quarter.
            for (var i = 0; i < quarter.length; i++)
            {
                if (prev.id == quarter[i].id) return true;
            }
            allPresent = allPresent && prereqsPresentInQuarter(prev, quarter);
        }
        
        return allPresent;
    }
}

//Function: called on a quarter to get the number of courses
//          with labs in the quarter.
// Parameters: a quarter from within the courseSchedule array.
// Return Value: the number of courses with labs in the quarter.
function numLabsInQuarter(quarter)
{
    if (typeof(quarter) != "object")
    {
        throw "Invalid value for quarter in labsInQuarter function.";
    }
    
    var numLabs = 0;
    
    for (var i = 0; i < quarter.length; i++)
    {
        var tempCourse = quarter[i];
        if (tempCourse.hasLab == true) numLabs++;
    }
    
    return numLabs;
}