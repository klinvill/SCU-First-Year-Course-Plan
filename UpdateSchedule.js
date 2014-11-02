// Function to be called whenever something changes on the website.

function updateSchedule()
{
    var quarters = 3
    var classesPerQuarter = 4;
    
    console.log("Updating Schedule.");
    // Updated waived status of courses.
    CheckWaived();
    
    // Generating a schedule.
    var courseSchedule = generateSchedule();
    
    // Dummy Course Array for testing
    /*
    courseSchedule = [[{
                   name: "Precalculus",
                   id: "MATH 9",
                   offered: "F",
                   waived: true,
                   pre_req: "",
                   replace_with: "MATH 11"
                   },
                    
                    {
                    name: "Intro. to Programming",
                    id: "COEN 10",
                    offered:"FW",
                    waived: false,
                    pre_req: "",
                    replace_with: "COEN 11"
                    },
                    
                    {
                    name:"Critical Thinking & Writing 1",
                    id: "CTW 1",
                    offered:"FWS",
                    waived:false,
                    pre_req:"",
                    replace_with: "CTW 2"
                    },
                    
                    {
                    name:"Chemistry I",
                    id: "CHEM 11",
                    offered: "F",
                    waived: false,
                    pre_req:"",
                    replace_with: "CORE"
                    }],
                   
                   [{
                    name: "Calculus I",
                    id: "MATH 11",
                    offered: "FWS",
                    waived: false,
                    pre_req: "MATH 9",
                    replace_with: "MATH 12"
                    },
                    
                    {
                    name: "Advanced Programming",
                    id: "COEN 11",
                    offered: "FWS",
                    waived: false,
                    pre_req: "COEN 10",
                    replace_with: "COEN 12"
                    },
                    
                    {
                    name: "Advanced Programming",
                    id: "COEN 11",
                    offered: "FWS",
                    waived: false,
                    pre_req: "COEN 10",
                    replace_with: "COEN 12"
                    },
                    
                    {
                    name: "Physics I",
                    id: "PHYS 31",
                    offered: "W",
                    waived: false,
                    pre_req: "",
                    replace_with: "CORE",
                    }],
                   
                   [{
                    name: "Calculus II",
                    id: "MATH 12",
                    offered: "FWS",
                    waived: false,
                    pre_req: "MATH 11",
                    replace_with: "MATH 13"
                    },
                    
                    {
                    name: "Data Structures",
                    id: "COEN 12",
                    offered: "FWS",
                    waived: false,
                    pre_req: "COEN 11",
                    replace_with: "COEN 21"
                    },
                    
                    {
                    name: "Physics II",
                    id: "PHYS 32",
                    offered: "S",
                    waived: false,
                    pre_req: "PHYS 31",
                    replace_with: "CORE"
                    },
                    
                    {
                    name: "Discrete Mathematics",
                    id: "COEN 19",
                    offered: "FS",
                    waived: false,
                    pre_req: "",
                    replace_with: "CORE"
                    }]];
*/
                   
    
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
    
    // Update the courses waived section
    $('.waived-courses').empty();
    for (var i = 0; i < COEN_course_array.length; i++)
    {
        //console.log(COEN_course_array[i]);
        if(COEN_course_array[i].waived)
            $('.waived-courses').append('<li>'+COEN_course_array[i].id+'</li>');
    }
    
}