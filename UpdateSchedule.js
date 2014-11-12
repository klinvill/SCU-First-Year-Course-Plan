
function createCheckboxes()
{
    var tempCourseArray = jQuery.extend(true, [], allCourses);
    tempCourseArray.sort(function(course1, course2){
                         if (course1.id < course2.id)
                            return -1;
                         else if (course1.id > course2.id)
                            return 1;
                         else
                            return 0;
                         });
    
    $.each(tempCourseArray, function(index, value){
           if (value.shouldHaveCheckBox)
           {
                var htmlString ='<label id="Label_'+value.id+'" style="display:none"><input type="checkbox" onchange="updateSchedule()" name="Other_Waived" id="OC_'+value.id+'" value="'+value.id+'">'+value.id+'</label><br style="display:none"/>';
                if (value.id.substring(0, 4) == "MATH" || value.id.substring(0, 4) == "AMTH")
                {
                    $("[id = 'Math Checkboxes']").append(htmlString);
                }
               else if (value.id.substring(0, 4) == "PHYS" || value.id.substring(0, 4) == "CHEM" || value.id.substring(0, 4) == "ENVS")
               {
                    $("[id = 'Science Checkboxes']").append(htmlString);
               }
               else if (value.id.substring(0, 4) == "COEN")
               {
                    $("[id = 'Coen Checkboxes']").append(htmlString);
               }
               else if (value.id.substring(0, 4) == "ELEN")
               {
                    $("[id = 'Elen Checkboxes']").append(htmlString);
               }
           else throw ("Uncategorized Checkbox: ", value.id.substring(0, 4));
           
                $("[id = 'OC_"+value.id+"']").bind("click", updateSchedule); //allow jQuery binding
           }
           });
}

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
    
    updateSchedule();
}


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
    
    // See if a checkbox was just checked (used for CheckWaived())
    checked = 0;
    if(this.checked == true)
        checked = 1;
    
    // Updated waived status of courses.
    CheckWaived();
    
    // Generating a schedule.
    var major = document.getElementById("Major").value;
    var courseSchedule = generateSchedule(major);
    console.log(courseSchedule);
    
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
            if (courseSchedule[i][j].hasLab)
                $('.'+quarterClass+':eq('+j+')').text(courseSchedule[i][j].id + " - " + courseSchedule[i][j].name + " + L");
            else
                $('.'+quarterClass+':eq('+j+')').text(courseSchedule[i][j].id + " - " + courseSchedule[i][j].name);
        }
    }
    
    // Update the courses waived section into three columns
    $('.waived-courses').empty();
    var coursesWaived = [];
    for (var i = 0; i < COEN_course_array.length; i++)
    {
        //console.log(COEN_course_array[i]);
        if(COEN_course_array[i].waived && COEN_course_array[i].id != "MATH 9")
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
    
    
    // Place engineering 1
    placeEngr1(courseSchedule);
}

/*
 * Description: placeEngr1 takes the value of the ENGR1_Qtr select box and uses it to show the engr1 course in the selected quarter while hiding the engr1 course in the other quarter.
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
        
        console.log("Fall labs: ", numLabsFall);
        console.log("Winter labs: ", numLabsWinter);
        console.log("Spring labs: ", numLabsSpring);
        
        
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