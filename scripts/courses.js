
// Course Data File

// An object prototype function for courses.
function course(name, id, offered, waived, pre_req, replace_with, previous, hasLab, shouldHaveCheckBox)
{
    this.name = name;
    this.id = id;
    this.offered = offered;
    this.waived = waived;
    this.pre_req = pre_req;
    this.replace_with = replace_with;
    this.previous = previous;
    this.hasLab = hasLab;
    this.shouldHaveCheckBox = shouldHaveCheckBox;
}

// The default course to replace all others. Currently, University Core.
var finalCourseOption =
new course("University Core",
           "CORE",
           "FWS",
           false,
           "",
           "",
           "",
           false,
           false);

// Courses for CNI 1 and 2.
var CNI1Course =
new course("Cultures & Ideas 1",
           "C&I 1",
           "FW",
           false,
           "",
           "C&I 2",
           "",
           false,
           false);

var CNI2Course =
new course("Cultures & Ideas 2",
           "C&I 2",
           "WS",
           false,
           "C&I 1",
           "",
           "C&I 1",
           false,
           false);

/* --- Array of all courses and related functions --- */

// Array of all courses for all majors known by our system.
var allCourses =
[
 CNI1Course,
 CNI2Course,
 
 
 /* --- Intro Math Series --- */
 {
 name: "Precalculus",
 id: "MATH 9",
 offered: "F",
 waived: true,
 pre_req: "",
 replace_with: "MATH 11",
 previous: "",
 hasLab: false,
 shouldHaveCheckBox: false
 },
 {
 name: "Calculus I",
 id: "MATH 11",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 9",
 replace_with: "MATH 12",
 previous: "MATH 9",
 hasLab: false,
 shouldHaveCheckBox: true
 },
 {
 name: "Calculus II",
 id: "MATH 12",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 11",
 replace_with: "MATH 13",
 previous: "MATH 11",
 hasLab: false,
 shouldHaveCheckBox: true
 },
 {
 name: "Calculus III",
 id: "MATH 13",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 12",
 replace_with: "MATH 14",
 previous: "MATH 12",
 hasLab: false,
 shouldHaveCheckBox: true
 },
 {
 name: "Calculus IV",
 id: "MATH 14",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 13",
 replace_with: "AMTH 106",
 previous: "MATH 13",
 hasLab: false,
 shouldHaveCheckBox: true
 },
 {
 name: "Differential Equations",
 id: "AMTH 106",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 14",
 replace_with: "AMTH 108",
 previous: "MATH 14",
 hasLab: false,
 shouldHaveCheckBox: false
 },
 {
 name: "Probability and Statistics",
 id: "AMTH 108",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 14",
 replace_with: "MATH 53",
 previous: "AMTH 106",
 hasLab: false,
 shouldHaveCheckBox: false
 },
 {
 name: "Linear Algebra",
 id: "MATH 53",
 offered: "WS",
 waived: false,
 pre_req: "MATH 13",
 replace_with: finalCourseOption.id,
 previous: "AMTH 108",
 hasLab: false,
 shouldHaveCheckBox: false
 },
 
 
 
/* COEN intro Series */
 {
 name: "Intro. to Programming",
 id: "COEN 10",
 offered:"FW",
 waived: false,
 pre_req: "",
 replace_with: "COEN 11",
 previous: "",
 hasLab: true,
 shouldHaveCheckBox: true
 },
 {
 name: "Advanced Programming",
 id: "COEN 11",
 offered: "FWS",
 waived: false,
 pre_req: "COEN 10",
 replace_with: "COEN 12",
 previous: "COEN 10",
 hasLab: true,
 shouldHaveCheckBox: true
 },
 {
 name: "Data Structures",
 id: "COEN 12",
 offered: "S",
 waived: false,
 pre_req: "COEN 11",
 replace_with: "COEN 21",
 previous: "COEN 11",
 hasLab: true,
 shouldHaveCheckBox: true
 },
 
 {
 name: "Logic Design",
 id: "COEN 21",
 // Actually offered FWS, F is removed in order to prevent it from showing up fall quarter for a freshman
 offered: "WS",
 waived: false,
 pre_req: "",
 replace_with: "COEN 20",
 previous: "COEN 12",
 hasLab: true,
 shouldHaveCheckBox: false
 },
 {
 name: "Embedded Systems",
 id: "COEN 20",
 // Actually offered FS, F is removed in order to prevent it from showing up fall quarter for a freshman
 offered: "S",
 waived: false,
 pre_req: "COEN 11",
 replace_with: finalCourseOption.id,
 previous: "COEN 21",
 hasLab: true,
 shouldHaveCheckBox: false
 },
 
/* CTW Series */
 {
 name:"Critical Thinking & Writing 1",
 id: "CTW 1",
 offered:"FWS",
 waived:false,
 pre_req:"",
 replace_with: "CTW 2",
 previous: "",
 hasLab: false,
 shouldHaveCheckBox: false
 },
 {
 name:"Critical Thinking & Writing 2",
 id: "CTW 2",
 offered:"WS",
 waived:false,
 pre_req:"CTW 1",
 replace_with: finalCourseOption.id,
 previous: "CTW 1",
 hasLab: false,
 shouldHaveCheckBox: false
 },
 
 
 
/* Others */
 {
 name:"Chemistry I",
 id: "CHEM 11",
 offered: "F",
 waived: false,
 pre_req:"",
 replace_with: finalCourseOption.id,
 previous: "",
 hasLab: true,
 shouldHaveCheckBox: true
 },
 {
 name:"Chemistry II",
 id: "CHEM 12",
 offered: "W",
 waived: false,
 pre_req:"CHEM 11",
 replace_with: finalCourseOption.id,
 previous: "CHEM 11",
 hasLab: true,
 shouldHaveCheckBox: true
 },
 {
 name: "Physics I",
 id: "PHYS 31",
 offered: "W",
 waived: false,
 pre_req: "",
 replace_with: "PHYS 32",
 previous: "",
 hasLab: true,
 shouldHaveCheckBox: true
 },
 {
 name: "Physics II",
 id: "PHYS 32",
 offered: "S",
 waived: false,
 pre_req: "PHYS 31",
 replace_with: "PHYS 33",
 previous: "PHYS 31",
 hasLab: true,
 shouldHaveCheckBox: true
 },
 {
 name: "Physics III",
 id: "PHYS 33",
 offered: "F",
 waived: false,
 // Also needs pre-req of MATH 12
 pre_req: "PHYS 32",
 replace_with: finalCourseOption.id,
 previous: ["PHYS 32", "MATH 11", "MATH 12"],
 hasLab: true,
 shouldHaveCheckBox: false
 },
 {
 name: "Physics IV",
 id: "PHYS 34",
 offered: "W",
 waived: false,
 // Also needs pre-req of MATH 12
 pre_req: "PHYS 33",
 replace_with: finalCourseOption.id,
 previous: ["PHYS 33", "MATH 11", "MATH 12"],
 hasLab: true,
 shouldHaveCheckBox: false
 },
 {
 name: "Discrete Mathematics",
 id: "COEN 19",
 offered: "S",
 waived: false,
 pre_req: "",
 replace_with: finalCourseOption.id,
 previous: "",
 hasLab: false,
 shouldHaveCheckBox: false
 },
 {
 name: "Applied Programming in C",
 id: "COEN 44",
 offered: "FW",
 waived: false,
 pre_req: "MATH 13",
 replace_with: "ELEN 33",
 previous: "MATH 13",
 hasLab: true,
 shouldHaveCheckBox: false
 },
 {
 name: "Intro to Environmental Science",
 id: "ENVS 21",
 offered: "",
 waived: false,
 pre_req: "",
 replace_with: "CORE",
 previous: "",
 hasLab: true,
 shouldHaveCheckBox: true
 },
 
 
 
 /* --- ELEN Additions --- */
 {
 name: "Applied Programming in C",
 id: "COEN 44",
 offered: "FW",
 waived: false,
 pre_req: "MATH 13",
 replace_with: "ELEN 33",
 previous: "MATH 13",
 hasLab: true,
 shouldHaveCheckBox: false
 },
 {
 name: "Circuits I",
 id: "ELEN 50",
 offered: "FWS",
 waived: false,
 pre_req: "",
 replace_with: "ELEN 100",
 previous: ["PHYS 32", "MATH 11", "MATH 12"],
 hasLab: true,
 shouldHaveCheckBox: true
 },
 {
 name: "Circuits II",
 id: "ELEN 100",
 offered: "W",
 waived: false,
 pre_req: "",
 replace_with: finalCourseOption.id,
 previous: ["ELEN 50", "PHYS 33", "MATH 11", "MATH 12"],
 hasLab: true,
 shouldHaveCheckBox: false
 },
 {
 name: "Digital Systems Architecture",
 id: "ELEN 33",
 offered: "W",
 pre_req: "",
 replace_with: finalCourseOption.id,
 previous: ["ELEN 21", "COEN 44"],
 hasLab: true,
 shouldHaveCheckBox: false
 },
 {
 name: "Logic Design",
 id: "ELEN 21",
 offered: "W", // Actually offered FWS. Changed for aesthetic purposes.
 waived: false,
 pre_req: "",
 replace_with: "COEN 20",
 previous: "",
 hasLab: true,
 shouldHaveCheckBox: false
 },
 {
 name:"Energy and Nanotechnology",
 id: "ELEN 20",
 offered: "S",
 waived: false,
 pre_req:"",
 replace_with: finalCourseOption.id,
 previous: "",
 hasLab: false,
 shouldHaveCheckBox: false
 },
]



/* --- Data Retreival Functions --- */

// This function takes a string that represents the ID for a course.
// It returns the course in the allCourses array with the given ID.
// If the ID does not match a course in the array the function returns undefined.
function courseForID(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "courseForID");
    
    // Searching through array of courses.
    for (var i = 0; i < allCourses.length; i++)
    {
        tempCourse = allCourses[i];
        if (courseID == tempCourse.id)
        {
            return tempCourse;
        }
    }
    
    // Course not found. Returning undefined.
    return undefined;
}

// Function: called to see if the prerequisites for a course have been fulfilled.
// Return value: a boolean value. True if the prerequisites have been fulfilled. False otherwise.
function prereqsFulfilled(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "prereqsFulfilled");
    
    var tempCourse = courseForID(courseID);
    var preReq = courseForID(tempCourse.previous);
    
    // Still Using Strings
    if (typeof(tempCourse.previous) == "string")
    {
        // Course has no PreReqs.
        if (preReq == undefined) return true;
        // Course has PreReqs.
        else return (preReq.waived && prereqsFulfilled(preReq));
    }
    // Using Arrays
    {
        var fulfilled = true;
        
        for (var i = 0; i < tempCourse.previous.length; i++)
        {
            // Course has no PreReqs.
            if (preReq == undefined) fulfilled = fulfilled && true;
            // Course has PreReqs.
            else fulfilled = fulfilled && (preReq.waived && prereqsFulfilled(preReq));
        }
        
        return fulfilled;
    }
}

//Function: returns an array of strings of all preReqs and their preReqs for the course.
// Paramter: a string for the course ID.
// Return Value: an array of preReq strings.
//               If not preReqs, returns empty array.
function preReqsChain(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "preReqsChain");
    
    var tempCourse = courseForID(courseID);
    if (tempCourse == undefined)
        throw "No course for given ID in preReqsChain.";
    
    if (tempCourse.pre_req == "")
        return [];
    else
    {
        return [tempCourse.pre_req].concat(preReqsChain(tempCourse.pre_req));
    }
}

// Funcion: checks if course is of a certain type.
// Parameter: a course and the four letter code in the ID of a course.
// Boolean: true if course ID contains code provided, false otherwise.
function courseIsType(tempCourse, type)
{
    throwIfTypeDoesNotMatch(tempCourse, "object", "courseIsType");
    throwIfTypeDoesNotMatch(type, "string", "courseIsType");
    
    return startsWith(tempCourse.id, type);
}


/* --- Major Specific Course Arrays --- */

// Array of courses in the COEN major, ordered in terms of priority placement with the highest priority being at the front
// Each course is structured as: course = {name:”Calculus 3”, id:”MATH 13”, offered:[”F”, “W”, “S”], waived:false, pre_req:”MATH 12”, replace_with: "MATH 14"}
var COEN_course_array =
[
 /* -- Pre-C&I -- */
 
 /* Math Series */
 courseForID("MATH 9"),
 courseForID("MATH 11"),
 courseForID("MATH 12"),
 courseForID("MATH 13"),
 courseForID("MATH 14"),
 courseForID("AMTH 106"),
 courseForID("AMTH 108"),
 courseForID("MATH 53"),
 
 /* COEN intro Series */
 courseForID("COEN 10"),
 courseForID("COEN 11"),
 courseForID("COEN 12"),
 
 /* CTW Series */
 courseForID("CTW 1"),
 courseForID("CTW 2"),
 
 /* Others */
 courseForID("CHEM 11"),
 courseForID("PHYS 31"),
 courseForID("PHYS 32"),
 courseForID("COEN 19"),
 
 /* -- C&I Courses -- */
 
 courseForID("C&I 1"),
 courseForID("C&I 2"),
 
 /* -- Post-C&I -- */
 
 /* COEN Series */
 courseForID("COEN 21"),
 courseForID("COEN 20"),
 
 /* Others */
 courseForID("PHYS 33"),
 /* ENVS 21 is only here for the checkbox */
 courseForID("ENVS 21")
];

var ELEN_course_array =
[
 /* -- Pre-C&I -- */
 
 /* Math Series */
 courseForID("MATH 9"),
 courseForID("MATH 11"),
 courseForID("MATH 12"),
 courseForID("MATH 13"),
 courseForID("MATH 14"),
 courseForID("AMTH 106"),
 
 /* Others */
 courseForID("CHEM 11"),
 courseForID("PHYS 31"),
 courseForID("PHYS 32"),
 
 /* -- C&I Courses -- */
 
 courseForID("C&I 1"),
 courseForID("C&I 2"),
 
 /* -- Post-C&I -- */
 
 /* CTW Series */
 // Note: CTW id's might be worng.
 courseForID("CTW 1"),
 courseForID("ELEN 21"),
 courseForID("CTW 2"),
 
 
 /* Others */
 courseForID("ELEN 20"),
 courseForID("PHYS 33"),
 courseForID("PHYS 34"),
 
 /* COEN Course */
 courseForID("COEN 44"),
 
 /* Later ELEN Series */
 courseForID("ELEN 50"),
 courseForID("ELEN 100"),
 courseForID("ELEN 33")
 ];



/* --- Data altering functions --- */

// Functions which look through the course array and waive or unwaive courses.
function waiveCourse(courseID)
{
    courseForID(courseID).waived = true;
}

function waiveCourseAndPreReqs(courseID)
{
    var tempCourse = courseForID(courseID);
    tempCourse.waived = true;
    if(tempCourse.pre_req)
        waiveCourseAndPreReqs(tempCourse.pre_req);
}

function unwaiveCourse(courseID)
{
    courseForID(courseID).waived = false;
}

function unwaiveCourseAndPreReqs(courseID)
{
    var tempCourse = courseForID(courseID);
    tempCourse.waived = false;
    if(tempCourse.pre_req)
        unwaiveCourseAndPreReqs(tempCourse.pre_req);
}

// Function: called to reset the waived status of all courses to default.
function resetWaivedStatuses()
{
    for (var j = 0; j < allCourses.length; j++)
    {
        var tempCourse = allCourses[j];
        
        if (tempCourse.id == "MATH 9")
        {
            tempCourse.waived = true;
        } else {
            tempCourse.waived = false;
        }
        
    }
}



/* --- Data and functions involving selection of course arrays --- */

// Function: called to select the course array for a given major.
// Parameters: a string corresponding to the major.
// Return Value: course array correspnding to the provided major.
function courseArrayForMajor(major)
{
    if (major === "COEN")
    {
        return COEN_course_array;
    }
    else if (major == "ELEN")
    {
        return ELEN_course_array;
    }
    else if (major === null)
    {
        return COEN_course_array;
    }
    else throw "Invalid Major provided to courseArrayForMajor function.";
}

// An array containing each of the above course arrays.
var courseArrays = [COEN_course_array, ELEN_course_array];
                         