
// Course Data File

// Warnings for reminding us what we need to do.
console.warn("Check final math class options logic.");
console.warn("Is the ID for CTW courses actually 'CTW'?");

// An object prototype function for courses.
function course(name, id, offered, waived, pre_req, replace_with, previous)
{
    this.name = name;
    this.id = id;
    this.offered = offered;
    this.waived = waived;
    this.pre_req = pre_req;
    this.replace_with = replace_with;
    this.previous = previous;
}

// The default course to replace all others. Currently, University Core.
var finalCourseOption =
    new course("University Core",
               "CORE",
               "FWS",
               false,
               "",
               "",
               "");

/* --- Array of all courses and related functions --- */

// Array of all courses for all majors known by our system.
var allCourses =
[
 {
 name: "Precalculus",
 id: "MATH 9",
 offered: "F",
 waived: true,
 pre_req: "",
 replace_with: "MATH 11",
 previous: ""
 },
 
 {
 name: "Calculus I",
 id: "MATH 11",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 9",
 replace_with: "MATH 12",
 previous: "MATH 9"
 },
 
 {
 name: "Calculus II",
 id: "MATH 12",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 11",
 replace_with: "MATH 13",
 previous: "MATH 11"
 },
 
 {
 name: "Calculus III",
 id: "MATH 13",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 12",
 replace_with: "MATH 14",
 previous: "MATH 12"
 },
 
 {
 name: "Calculus IV",
 id: "MATH 14",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 13",
 replace_with: "AMTH 106",
 previous: "MATH 13"
 },
 
 {
 name: "Differential Equations",
 id: "AMTH 106",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 14",
 replace_with: "AMTH 108",
 previous: "MATH 14"
 },
 
 {
 name: "Probability and Statistics",
 id: "AMTH 108",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 14",
 replace_with: "MATH 53",
 previous: "AMTH 106"
 },
 
 // Use replace_with instead of pre_req for ordering
 {
 name: "Linear Algebra",
 id: "MATH 53",
 offered: "WS",
 waived: false,
 pre_req: "MATH 13",
 replace_with: finalCourseOption.id,
 previous: "AMTH 108"
 },
 
 
 
 /* COEN intro Series */
 {
 name: "Intro. to Programming",
 id: "COEN 10",
 offered:"FW",
 waived: false,
 pre_req: "",
 replace_with: "COEN 11",
 previous: ""
 },
 
 {
 name: "Advanced Programming",
 id: "COEN 11",
 offered: "FWS",
 waived: false,
 pre_req: "COEN 10",
 replace_with: "COEN 12",
 previous: "COEN 10"
 },
 
 {
 name: "Data Structures",
 id: "COEN 12",
 offered: "FWS",
 waived: false,
 pre_req: "COEN 11",
 replace_with: "COEN 21",
 previous: "COEN 11"
 },
 
 {
 name: "Logic Design",
 id: "COEN 21",
 offered: "FWS",
 waived: false,
 pre_req: "",
 replace_with: "COEN 20",
 previous: "COEN 12"
 },
 
 {
 name: "Embedded Systems",
 id: "COEN 20",
 offered: "FS",
 waived: false,
 pre_req: "COEN 11",
 replace_with: finalCourseOption.id,
 previous: "COEN 21"
 },
 
 
 
 /* CTW Series */
 {
 name:"Critical Thinking & Writing 1",
 id: "CTW 1",
 offered:"FWS",
 waived:false,
 pre_req:"",
 replace_with: "CTW 2",
 previous: ""
 },
 
 {
 name:"Critical Thinking & Writing 2",
 id: "CTW 2",
 offered:"FWS",
 waived:false,
 pre_req:"CTW 1",
 replace_with: finalCourseOption.id,
 previous: "CTW 1"
 },
 
 
 /* Others */
 {
 name:"Chemistry I",
 id: "CHEM 11",
 offered: "F",
 waived: false,
 pre_req:"",
 replace_with: finalCourseOption.id,
 previous: ""
 },
 
 {
 name: "Physics I",
 id: "PHYS 31",
 offered: "W",
 waived: false,
 pre_req: "",
 replace_with: "PHYS 32",
 previous: ""
 },
 
 {
 name: "Physics II",
 id: "PHYS 32",
 offered: "S",
 waived: false,
 pre_req: "PHYS 31",
 replace_with: "PHYS 33",
 previous: "PHYS 31"
 },
 
 {
 name: "Physics III",
 id: "PHYS 33",
 offered: "F",
 waived: false,
 pre_req: "PHYS 32",
 replace_with: finalCourseOption.id,
 previous: "PHYS 32"
 },
 
 {
 name: "Discrete Mathematics",
 id: "COEN 19",
 offered: "FS",
 waived: false,
 pre_req: "",
 replace_with: finalCourseOption.id,
 previous: ""
 }
]

// Function: called to reset the waived status of all courses to default.
function resetWaivedStatuses()
{
    for (var tempCourse in allCourses)
    {
        if (tempCourse.id == "MATH 9")
        {
            tempCourse.waived = true;
        } else {
            tempCourse.waived = false;
        }
    }
}

// This function takes a string that represents the ID for a course.
// It returns the course in the allCourses array with the given ID.
// If the ID does not match a course in the array the function returns undefined.
function courseForID(courseID)
{
    // Searching through array of courses.
    for (var tempCourse in allCourses)
    {
        if (courseID == tempCourse.id)
        {
            return tempCourse;
        }
    }
    
    // Course not found. Returning undefined.
    return undefined;
}

/* --- Major Specific Course Arrays --- */

// Array of courses in the COEN major, ordered in terms of priority placement with the highest priority being at the front
// Each course is structured as: course = {name:”Calculus 3”, id:”MATH 13”, offered:[”F”, “W”, “S”], waived:false, pre_req:”MATH 12”, replace_with: "MATH 14"}
var COEN_course_array =
[
 /* Math Series */
 courseForID("MATH 9"),
 courseForID("MATH 11"),
 courseForID("MATH 12"),
 courseForID("MATH 13"),
 courseForID("MATH 14"),
 courseForID("AMATH 106"),
 courseForID("AMATH 108"),
 courseForID("MATH 53"),
 
 /* COEN intro Series */
 courseForID("COEN 10"),
 courseForID("COEN 11"),
 courseForID("COEN 12"),
 courseForID("COEN 21"),
 courseForID("COEN 20"),
 
 /* CTW Series */
 // Note: CTW id's might be worng.
 courseForID("CTW 1");
 courseForID("CTW 2");
 
 /* Others */
 courseForID("CHEM 11"),
 courseForID("PHYS 31"),
 courseForID("PHYS 32"),
 courseForID("PHYS 33"),
 courseForID("COEN 19")
];

// An array containing each of the above course arrays.
var courseArrays = [COEN_course_array];

/* --- Functions for waiving and unwaiving courses --- */

// Functions which look through the course array and waive or unwaive courses.
function waiveCourse(courseID)
{
    courseForID(courseID).waived = true;
}

function unwaiveCourse(courseID)
{
    courseForID(courseID).waived = false;
}

                         