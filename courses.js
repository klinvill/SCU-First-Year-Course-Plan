// Course Data File

/* --- Warnings for reminding us what we need to do. --- */

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
           "",
           "",
           false,
           false);

var CNI2Course =
new course("Cultures & Ideas 2",
           "C&I 2",
           "WS",
           false,
           "",
           "",
           "",
           false,
           false);

/* --- Coen Course Array --- */
// Array of courses, ordered in terms of priority placement with the highest priority being at the front
// Each course is structured as: course = {name:”Calculus 3”, id:”MATH 13”, offered:[”F”, “W”, “S”], waived:false, pre_req:”MATH 12”, replace_with: "MATH 14"}
var COEN_course_array =
[
/* Math Series */
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
 /*
  {
  name: "Logic Design",
  id: "COEN 21",
  offered: "FWS",
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
  offered: "FS",
  waived: false,
  pre_req: "COEN 11",
  replace_with: finalCourseOption.id,
  previous: "COEN 21",
  hasLab: true,
  shouldHaveCheckBox: false
  },
  */
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
 shouldHaveCheckBox: true
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
 }
 ];

/* --- ELEN Course Array --- */
// Array of courses, ordered in terms of priority placement with the highest priority being at the front
// Each course is structured as: course = {name:”Calculus 3”, id:”MATH 13”, offered:[”F”, “W”, “S”], waived:false, pre_req:”MATH 12”, replace_with: "MATH 14"}
var ELEN_course_array =
[
/* Math Series */
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
 
/* CandI Series */
 /*{
  name:"Cultures & Ideas 1",
  id: "C&I 1",
  offered:"F",
  waived:false,
  pre_req:"",
  replace_with: "C&I 2",
  previous: "",
  hasLab: false,
  shouldHaveCheckBox: false
  },
  {
  name:"Cultures & Ideas 1",
  id: "C&I 1",
  offered:"W",
  waived:false,
  pre_req:"C&I 2",
  replace_with: finalCourseOption.id,
  previous: "C&I 1",
  hasLab: false,
  shouldHaveCheckBox: false
  },*/
 
/* CTW Series */
 {
 name:"Critical Thinking & Writing 1",
 id: "CTW 1",
 offered:"F",
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
 offered:"S",
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
 name: "Logic Design",
 id: "ELEN 21",
 offered: "FWS",
 waived: false,
 pre_req: "",
 replace_with: "COEN 20",
 previous: "COEN 12",
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
 shouldHaveCheckBox: true
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
 
 /* ELEN Series */
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
 ];

// Functions which look through the course array and waive or unwaive courses.
function waiveCourse(courseID)
{
    for (var i = 0; i < courseArrays.length; i++)
    {
        var courseArray = courseArrays[i];
        for (var j = 0; j < courseArray.length; j++)
        {
            var tempCourse = courseArray[j];
            if (tempCourse.id === courseID)
            {
                tempCourse.waived = true;
                if(tempCourse.pre_req)
                    waiveCourse(tempCourse.pre_req);
                break;
            }
        }
    }
}
function unwaiveCourse(courseID)
{
    for (var i = 0; i < courseArrays.length; i++)
    {
        var courseArray = courseArrays[i];
        for (var j = 0; j < courseArray.length; j++)
        {
            var tempCourse = courseArray[j];
            if (tempCourse.id === courseID)
            {
                tempCourse.waived = false;
                break;
            }
        }
    }
}

// This function takes a string that represents the ID for a course.
// It returns the course in the COEN_course_array with the given ID.
// If the ID does not match a course in the array the function returns undefined.
function courseForID(courseID)
{
    if (typeof(courseID) == "string")
        throw "Invalid parameter type in courseForID.";
    
    // Searching through array of courses.
    for (var i = 0; i < COEN_course_array.length; i++)
    {
        var tempCourse = COEN_course_array[i];
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
    if (typeof(courseID) == "string")
        throw "Invalid parameter type in courseForID.";
    
    var tempCourse = courseForID(courseID);
    var preReq;
    
    // Previous is a string.
    if (typeof(tempCourse.previous) == "string")
    {
        preReq = courseForID(tempCourse.previous);
        // Course has no PreReqs.
        if (preReq == undefined) return true;
        // Course has PreReqs.
        else return (preReq.waived && prereqsFulfilled(preReq));
    }
    // Previous is an array of strings.
    else if (typeof(tempCourse.previous) == "object")
    {
        var fulfilled = true;
        
        for (var i = 0; i < tempCourse.previous.length; i++)
        {
            preReq = courseForID(tempCourse.previous[i]);
            debugger;
            // Course has no PreReqs.
            if (preReq == undefined) fulfilled = fulfilled && true;
            // Course has PreReqs.
            else fulfilled = fulfilled && (preReq.waived && prereqsFulfilled(preReq));
        }
        
        return fulfilled;
    }
}

// Function: called to reset the waived status of all courses to default.
function resetWaivedStatuses()
{
    for (var i = 0; i < courseArrays.length; i++)
    {
        var cArray = courseArrays[i];
        
        if (cArray === COEN_course_array)
            console.log("Reseting COEN course array.");
        else if (cArray === ELEN_course_array)
            console.log("Reseting COEN course array.");
        
        for (var j = 0; j < cArray.length; j++)
        {
            var tempCourse = cArray[j];
            
            if (tempCourse.id == "MATH 9")
            {
                tempCourse.waived = true;
            } else {
                tempCourse.waived = false;
            }
            
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
    else throw "Invalid Major provided to courseArrayForMajor function.";
}

// An array containing each of the above course arrays.
var courseArrays = [courseArrayForMajor("COEN"), courseArrayForMajor("ELEN")];