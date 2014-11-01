// Code for determining a schedule.

//Array of arrays of courses for each quarter.
//First array [0] corresponds to Fall.
//First array [1] corresponds to Winter.
//First array [2] corresponds to Spring.

var courseSchedule = [ [], [], [] ];
var classesPerQuarter = 4;

// Function called to fill the courseSchedule with courses.

function generateSchedule()
{
    // Need to add logic here for choosing which course array to use.
    var courseArray = COEN_course_array;
    console.warn("Need to choose course array.");
    
    for (tempCourse in courseArray)
    {
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
            else if (j == 1) quarterID = "S";
            else if (j == 2) quarterID = "W";
            else throw "j is not a valid quarter, thrown from GenerateSchedule.js";
            
            debugger;
            
            if (tempCourse.offered.search(quarterID) == -1) continue;
            
            // Check if pre-requisite is already in the quarter.
            var preReqPresent = false;
            
            for (var courseInSchedule in courseSchedule)
            {
                if (courseInSchedule.id === tempCourse.pre_req)
                {
                    preReqPresent = true;
                    break;
                }
            }
            
            if (preReqPresent == true) continue;
            
            // Add course to schedule.
            quarter.push(tempCourse);
        }
    }
    
    return courseSchedule;
}