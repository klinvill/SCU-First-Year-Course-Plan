/*
 * Description: checkboxClicked handles a user checking or unchecking a checkbox. Used to distinguish between an onclick driven or function driven checking of a checkbox in order to appropriately track when a checkbox should be unclickable.
 * Called by: onclick event in one of the checkboxes
 * Arguments: courseID
 * Returns: none
 * Exceptions: checkbox not found
 */
function checkboxClicked(courseID)
{
    var checkboxElement = getHTMLCheckBoxElementForCourseID(courseID);
    if (checkboxElement != undefined)
    {
        if(checkboxElement.checked)
        {
            // Increment number of checks and record user checking.
            incrementChecks(courseID, courseID+" check_box");
            setCheckedByUser(courseID);
            
            // Also check the predecessors, except for physics classes.
            if (courseID.substring(0, 4) != "PHYS")
            {
                var preReqs = preReqsChain(courseID);
                incrementChecksAndDisabledGroup(preReqs, courseID+" check_box");
            }
        }
        else
        {
            // Decrement number of checks and record user un-checking.
            decrementChecks(courseID, courseID+" check_box");
            setUncheckedByUser(courseID);
            
            // Also uncheck the predecessors, except for physics classes.
            if (courseID.substring(0, 4) != "PHYS")
            {
                var preReqs = preReqsChain(courseID);
                decrementChecksAndDisabledGroup(preReqs, courseID+" check_box");
            }
        }
        
    }
    else
    {
        throw "Error: checkbox element could not be found in checkboxClicked.";
    }
    
    updateSchedule();
}



/*
 * Description: majorChanged handles the event where the selected major is changed. It hides unnecessary checkboxes and includes the name of the major in the schedule title.
 * Called by: onchange event in #Major dropdown
 * Arguments: none
 * Returns: none
 * Exceptions: unsupported major
 */
function majorChanged()
{
    // Change checkboxes shown on page
    // Hide all checkboxes
    $('#OC_Form>div').children().children(":not(.unhidable)").hide();
    
    $.each(courseArrayForMajor($('#Major').val()), function(index, value){
           if ($("[id = 'Label_"+value.id+"']") != null)
           {
                $("[id = 'Label_"+value.id+"']").show();
                $("[id = 'Label_"+value.id+"']").next("br").show();
           }
           });
    
    if($('#Major').val() == "COEN")
    {
        $("[id = 'Coen Checkboxes']").show();
        $("[id = 'Elen Checkboxes']").hide();
    }
    else if($('#Major').val() == "ELEN")
    {
        $("[id = 'Coen Checkboxes']").hide();
        $("[id = 'Elen Checkboxes']").show();
    }
    else throw "Unsupported Major";
    
    // Add the name of the major to the schedule title
    $('#schedule .panel-heading .panel-title').text($('#Major option:selected').text() + " Schedule");
    
    updateSchedule();
}


// The master function to be called whenever something changes on the website.
/*
 * Description: updateSchedule is the master function that is called everytime something changes on the website. This function calls the functions to figure out which courses should be waived and the functions that accordingly update the displayed schedule and checkboxes.
 * Called by: onchange event every dropdown except #Major, majorChanged, checkboxClicked, and resetPage
 * Arguments: none
 * Returns: none
 * Exceptions: invalid number of quarters, invalid number of courses in a quarter, invalid quarter value,
 */
function updateSchedule()
{
    // Make the schedule visible
    if($('#Major').val() != null)
    {
        $('#schedule').show();
        $('#schedule-default').hide();
    }
    
    // See if a checkbox was just checked (used for CheckWaived())
    checked = 0;
    if(this.checked == true)
        checked = 1;
    
    // Updated waived status of courses.
    CheckWaived();
    
    // Updating the checkbox display.
    updateCheckBoxDisplay();
    
    // Generating a schedule.
    var major = document.getElementById("Major").value;
    var courseSchedule = generateSchedule(major);
    
    // Error checking to make sure proper amount of quarters are present
    if (courseSchedule.length != numQuarters)
        throw "Error while rendering schedule, invalid number of quarters. Thrown from UpdateSchedule.js";
    
    var quarterClass;
    
    // Update schedule display.
    // The outer loop iterates through the array of quarters
    for (var i = 0; i < courseSchedule.length; i++)
    {
        //logQuarterBasedSchedule(courseSchedule);
        
        if (courseSchedule[i].length != coursesPerQuarter)
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
            if (courseSchedule[i][j].hasLab)
                $('.'+quarterClass+':eq('+j+')').text(courseSchedule[i][j].id + " - " + courseSchedule[i][j].name + " + L");
            else
                $('.'+quarterClass+':eq('+j+')').text(courseSchedule[i][j].id + " - " + courseSchedule[i][j].name);
        }
    }
    
    // Update the courses waived section into three columns
    $('.waived-courses').empty();
    var coursesWaived = [];
    // If a major is selected, display waived courses
    if(major != "")
    {
        for (var i = 0; i < courseArrayForMajor(major).length; i++)
        {
            courseArray = courseArrayForMajor(major);
            //console.log(COEN_course_array[i]);
            if(courseArray[i].waived && courseArray[i].id != "MATH 9" && courseArray[i].id != "ENVS 21")
            {
                coursesWaived.push(courseArray[i].id);
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
    
    
    // Place engineering 1
    placeEngr1(courseSchedule);
}

/*
 * Description: placeEngr1 takes the value of the ENGR1_Qtr select box and uses it to show the engr1 course in the selected quarter while hiding the engr1 course in the other quarter. If Auto is selected, engr1 will be placed in the course with the fewest number of labs. In the event of a tie, the earlier quarter is chosen.
 * Called by: onchange event in the #ENGR1_Qtr select box
 * Arguments: courseSchedule
 * Returns: none
 * Exceptions: invalid value sent for ENGR_Qtr1
 */
function placeEngr1 (courseSchedule)
{
    if($('#ENGR1_Qtr').val() === "Fall")
    {
        $('#ENGR1-fall').css('visibility','visible');
        $('#ENGR1-winter').css('visibility','hidden');
        $('#ENGR1-spring').css('visibility','hidden');
    }
    else if($('#ENGR1_Qtr').val() === "Winter")
    {
        $('#ENGR1-fall').css('visibility','hidden');
        $('#ENGR1-winter').css('visibility','visible');
        $('#ENGR1-spring').css('visibility','hidden');
    }
    else if($('#ENGR1_Qtr').val() === "Spring")
    {
        $('#ENGR1-fall').css('visibility','hidden');
        $('#ENGR1-winter').css('visibility','hidden');
        $('#ENGR1-spring').css('visibility','visible');
    }
    // Auto select quarter for user
    else if($('#ENGR1_Qtr').val() === "Auto")
    {
        // Change to quarter w/ least units, if tied prioritize fall
        var numLabsFall = numLabsInQuarter(courseSchedule[0]);
        var numLabsWinter = numLabsInQuarter(courseSchedule[1]);
        var numLabsSpring = numLabsInQuarter(courseSchedule[2]);
        
        
        if (numLabsSpring < numLabsFall && numLabsSpring < numLabsWinter)
        {
            $('#ENGR1-fall').css('visibility','hidden');
            $('#ENGR1-winter').css('visibility','hidden');
            $('#ENGR1-spring').css('visibility','visible');
        }
        else if (numLabsWinter < numLabsFall)
        {
            $('#ENGR1-fall').css('visibility','hidden');
            $('#ENGR1-winter').css('visibility','visible');
            $('#ENGR1-spring').css('visibility','hidden');
        }
        else
        {
            $('#ENGR1-fall').css('visibility','visible');
            $('#ENGR1-winter').css('visibility','hidden');
            $('#ENGR1-spring').css('visibility','hidden');
        }
        
    }
    else
    {
        console.log($('#ENGR1_Qtr').val());
        throw "Invalid value for ENGR1_Qtr";
    }
}


/*
 * Description: resetPage resets all the forms on the page, shows the default "select a major" message, and hides the schedule
 * Called by: index page load, reset button onclick event
 * Arguments: none
 * Returns: none
 * Exceptions: none
 */
function resetPage()
{
    $("form").each(function(){this.reset()});
    resetCheckBoxes();
    updateSchedule();
    $("#schedule-default").show();
    $("#schedule").hide();
}