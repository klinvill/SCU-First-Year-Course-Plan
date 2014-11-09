// Function to be called whenever something changes on the website.

function updateSchedule()
{
    var quarters = 3
    var classesPerQuarter = 4;
    
    // Make the schedule visible
    if($('#Major').val() != null)
    {
        $('#schedule').show();
        $('#schedule-default').hide();
    }
    
    console.log("Updating Schedule.");
    
    // See if a checkbox was just checked (used for CheckWaived())
    checked = 0;
    if(this.checked == true)
        checked = 1;
    
    // Updated waived status of courses.
    CheckWaived();
    
    // Generating a schedule.
    var courseSchedule = generateSchedule();
    
    // Error checking to make sure proper amount of quarters are present
    if (courseSchedule.length != quarters)
        throw "Error while rendering schedule, invalid number of quarters. Thrown from UpdateSchedule.js";
    
    var quarterClass;
    
    // Update schedule display.
    // The outer loop iterates through the array of quarters
    for (var i = 0; i < courseSchedule.length; i++)
    {
        if (courseSchedule[i].length != classesPerQuarter)
        {
            console.log("Number of classes is: " + courseSchedule[i].length);
            throw "Error while rendering schedule, invalid number of courses. Thrown from UpdateSchedule.js";
        }
            
        
        switch(i) {
            case 0:
                quarterClass = "fall-quarter";
                break;
            case 1:
                quarterClass = "winter-quarter";
                break;
            case 2:
                quarterClass = "spring-quarter";
                break;
            default:
                throw "Invalid value used for quarter in UpdateSchedule.js";
        }
        
        // The inner loop iterates through the array of classes w/in a quarter
        for (var j = 0; j < courseSchedule[i].length; j++)
        {
            $('.'+quarterClass+':eq('+j+')').text(courseSchedule[i][j].id + " - " + courseSchedule[i][j].name);
        }
    }
    
    // Update the courses waived section into two columns
    $('.waived-courses').empty();
    var coursesWaived = [];
    for (var i = 0; i < COEN_course_array.length; i++)
    {
        //console.log(COEN_course_array[i]);
        if(COEN_course_array[i].waived)
        {
            coursesWaived.push(COEN_course_array[i].id);
        }
    }
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < Math.ceil(coursesWaived.length / 3); j++)
        {
            if(j + i * Math.ceil(coursesWaived.length / 3) < coursesWaived.length)
                $('#waived-column-'+i).append('<li>'+coursesWaived[j + i * Math.ceil(coursesWaived.length / 3)]+'</li>');
        }
    }
}

/*
 * Description: placeEngr1 takes the value of the ENGR1_Qtr select box and uses it to show the engr1 course in the selected quarter while hiding the engr1 course in the other quarter.
 * Called by: onchange event in the #ENGR1_Qtr select box
 * Arguments: none
 * Returns: none
 * Exceptions: invalid value sent for ENGR_Qtr1
 */
function placeEngr1 ()
{
    if($('#ENGR1_Qtr').val() === "Fall")
    {
        $('#ENGR1-fall').css('visibility','visible');
        $('#ENGR1-winter').css('visibility','hidden');
    }
    else if($('#ENGR1_Qtr').val() === "Winter")
    {
        $('#ENGR1-fall').css('visibility','hidden');
        $('#ENGR1-winter').css('visibility','visible');
    }
    else
    {
        console.log($('#ENGR1_Qtr').val());
        throw "Invalid value for ENGR1_Qtr";
    }
}