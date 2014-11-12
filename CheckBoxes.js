/* The Data Structure for Check Boxes */


/* --- Object Prototype --- */
function checkBox(courseID, numTimesChecked, numTimesDisabled)
{
    this.courseID = courseID;
    this.numTimesChecked = numTimesChecked;
    this.numTimesDisabled = numTimesDisabled;
}

/* --- Array of All Check Box Instances --- */

var checkBoxArray = [];

/* --- Functions for populating and manipulating the array ---*/

// Function: returns the checkBox object for the given courseID.
// Parameter: a course ID.
// Return Value: the checkBox object for the courseID.
//               undefinded if check box for course not found.
function getCheckBoxForID(courseID)
{
    
}

// Function: Creates a new check box and adds it to the array of check boxes.
function addCheckBox(courseID, numTimesChecked, numTimesDisabled)
{
    var newCheckBox = new checkBox(courseID, numTimesChecked, numTimesDisabled);
    
}

// Function: Removes a checkbox from the array.
// Parameters: courseID corresponding to the check box.
// Return value: Boolean = whether check box was was found in array.
function removeCheckBox(courseID)
{
    
}

// Function: increments the number of times the checkBox for the given ID has been checked.
// Parameters: a course ID.
// Return value: true if a checkBox for the courseID was found. False if not.
function incrementChecks(courseID)
{
    
}

// Function: decrements the number of times the checkBox for the given ID has been checked.
// Parameters: a course ID.
// Return value: true if a checkBox for the courseID was found. False if not.
function decrementChecks(courseID)
{
    
}

// Function: increments the number of times the checkBox for the given ID has been disabled.
// Parameters: a course ID.
// Return value: true if a checkBox for the courseID was found. False if not.
function incrementDisabled(courseID)
{
    
}

// Function: decrements the number of times the checkBox for the given ID has been disabled.
// Parameters: a course ID.
// Return value: true if a checkBox for the courseID was found. False if not.
function decrementDisabled(courseID)
{
    
}