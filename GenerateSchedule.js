// Code for determining a schedule.

//Array of arrays of courses for each quarter.
//First array [0] corresponds to Fall.
//First array [1] corresponds to Winter.
//First array [2] corresponds to Spring.


var classesPerQuarter = 4;

// Function called to fill the courseSchedule with courses.

function generateSchedule()
{
    var courseSchedule = [ [], [], [] ];
    
    // Need to add logic here for choosing which course array to use.
    var courseArray = COEN_course_array;
    console.warn("Need to choose course array.");
    
    
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
                //console.log("Course schedule", courseSchedule);
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
                console.log("Adding to quarter: ", j, tempCourse);
                // Add course to schedule.
                quarter.push(tempCourse);
                break;
            }
        }
    }
    
    // Potentially fill in holes with CNI 1 and 2.
    
    // Fill in holes with core
    for (var j = 0; j < courseSchedule.length; j++)
    {
        var quarter = courseSchedule[j]; // Array of courses for quarter.
        
        // Check if the quarter already has 4 courses.
        if (quarter.length < classesPerQuarter)
            quarter.push(finalCourseOption);
    }
    
    return courseSchedule;
}