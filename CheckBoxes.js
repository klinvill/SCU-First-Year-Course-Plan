/* The Data Structure for Check Boxes */


/* --- Object Prototype --- */
function checkBox(ID, numTimesChecked, numTimesDisabled)
{
    this.courseID = ID;
    this.numTimesChecked = numTimesChecked;
    this.numTimesDisabled = numTimesDisabled;
    this.sources = []; // Array of string of source ID's.
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
    for (var i = 0; i < checkBoxArray.length; i++)
    {
        var tempCheckBox = checkBoxArray[i];
        
        if (tempCheckBox.ID == courseID) return tempCheckBox;
    }
    
    return undefinded;
}

// Function: returns whether the check box for the given ID should be checked.
// Parameters: a course ID.
// Return value: Boolean.
function shouldBeChecked()
{
    
}

// Function: returns whether the check box for the given ID should be disabled.
// Parameters: a course ID.
// Return value: Boolean.
function shouldBeDisabled()
{
    
}

// Function: Creates a new check box and adds it to the array of check boxes.
function addCheckBox(courseID, numTimesChecked, numTimesDisabled)
{
    var newCheckBox = new checkBox(courseID, numTimesChecked, numTimesDisabled);
    checkBoxArray.push(newCheckBox);
}

// Function: Removes a checkbox from the array.
// Parameters: courseID corresponding to the check box.
// Return value: Boolean = whether check box was was found in array.
function removeCheckBox(courseID)
{
    
}

// Function: increments the number of times the checkBox for the given ID has been checked.
// Parameters: a course ID and name of source checking.
// Return value: true if a checkBox for the courseID was found. False if not.
function incrementChecks(courseID, sourceName)
{
    
}

// Function: decrements the number of times the checkBox for the given ID has been checked.
// Parameters: a course ID and name of source checking.
// Return value: true if a checkBox for the courseID was found. False if not.
function decrementChecks(courseID, sourceName)
{
    
}

// Function: increments the number of times the checkBox for the given ID has been disabled.
// Parameters: a course ID and name of source checking.
// Return value: true if a checkBox for the courseID was found. False if not.
function incrementDisabled(courseID, sourceName)
{
    
}

// Function: decrements the number of times the checkBox for the given ID has been disabled.
// Parameters: a course ID and name of source checking.
// Return value: true if a checkBox for the courseID was found. False if not.
function decrementDisabled(courseID, sourceName)
{
    
}