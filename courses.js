// Course Data File
// Warnings for reminding us what we need to do.
console.warn("Check final math class options logic.");
// An object prototype function for courses.
function course(name, id, offered, waived, pre_req, replace_with, previous, hasLab)
{
    this.name = name;
    this.id = id;
    this.offered = offered;
    this.waived = waived;
    this.pre_req = pre_req;
    this.replace_with = replace_with;
    this.previous = previous;
    this.hasLab = hasLab;
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
           false);

var CNI2Course =
new course("Cultures & Ideas 2",
           "C&I 2",
           "WS",
           false,
           "",
           "",
           "",
           false);

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