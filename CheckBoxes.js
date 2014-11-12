/* The Data Structure for Check Boxes */

/* --- Array of All Check Box Instances --- */

var checkBoxArray = [];


/* --- CheckBox Object Prototype --- */

function checkBox(ID, numTimesChecked, numTimesDisabled)
{
    this.courseID = ID;
    this.numTimesChecked = numTimesChecked;
    this.numTimesDisabled = numTimesDisabled;
    this.sources = []; // Array of string of source ID's.
    
    /* -- CheckBox Methods -- */
    
    // Function: tells whether the object has the given source.
    // Parameters: string for a source name.
    // Return Value: Boolean.
    this.hasSource = function (sourceName){
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method hasSource");
        
        return (this.sources.indexOf(sourceName) > -1);
    }
    
    // Function: adds the given source to the checkBox's sources.
    // Parameters: string for a source name.
    this.addSouceToCheckBoxfunction = function (sourceName, tempCheckBox)
    {
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method addSouceToCheckBox");
        
        this.sources.push(sourceName);
    }
    
    // Function: removes the given source from the checkBox's list of sources.
    // Parameters: string for a source name.
    // Return Value: Boolean for whether the given source was found or not.
    this.removeSource = function (sourceName, tempCheckBox)
    {
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method removeSource");
        
        var index = this.sources.indexOf(sourceName);
        if (index > -1)
            this.sources.splice(index, 1);
            return true;
        else
            return false;
    }
}


/* --- Functions for analyzing checkBoxes array. --- */

// Function: returns the checkBox object for the given courseID.
// Parameter: a course ID.
// Return Value: the checkBox object for the courseID.
//               undefinded if check box for course not found.
function getCheckBoxForID(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "getCheckBoxForID");
    
    for (var i = 0; i < checkBoxArray.length; i++)
    {
        var tempCheckBox = checkBoxArray[i];
        
        if (tempCheckBox.ID == courseID) return tempCheckBox;
    }
    
    return undefinded;
}

// Function: tells whether there is a check box for the given ID.
// Parameter: string for course ID.
// Return value: Boolean.
function isCheckBoxForID(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "isCheckBoxForID");
    
    return (getCheckBoxForID(courseID) != undefinded);
}

// Function: returns whether the check box for the given ID should be checked.
// Parameters: a course ID.
// Return value: Boolean.
function shouldBeChecked(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "shouldBeChecked");
    
    
}

// Function: returns whether the check box for the given ID should be disabled.
// Parameters: a course ID.
// Return value: Boolean.
function shouldBeDisabled(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "shouldBeDisabled");
    
    
}



/* --- Functions for populating and manipulating the array ---*/

// Function: Creates a new check box and adds it to the array of check boxes.
function addCheckBox(courseID, numTimesChecked, numTimesDisabled)
{
    throwIfTypeDoesNotMatch(courseID, "string", "addCheckBox");
    throwIfTypeDoesNotMatch(numTimesChecked, "number", "addCheckBox");
    throwIfTypeDoesNotMatch(numTimesDisabled, "number", "addCheckBox");
    
    var newCheckBox = new checkBox(courseID, numTimesChecked, numTimesDisabled);
    checkBoxArray.push(newCheckBox);
}

// Function: Removes a checkbox from the array.
// Parameters: courseID corresponding to the check box.
// Return value: Boolean = whether check box was was found in array.
function removeCheckBox(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "removeCheckBox");
    
}


/* --- Functions for check count and disable count Manipulation --- */

// Function: increments the number of times the checkBox for the given ID has been checked.
// Parameters: a course ID and name of source checking.
// Return value: true if a checkBox for the courseID was found. False if not.
function incrementChecks(courseID, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "incrementChecks");
    throwIfTypeDoesNotMatch(sourceName, "string", "incrementChecks");
}

// Function: decrements the number of times the checkBox for the given ID has been checked.
// Parameters: a course ID and name of source checking.
// Return value: true if a checkBox for the courseID was found. False if not.
function decrementChecks(courseID, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "decrementChecks");
    throwIfTypeDoesNotMatch(sourceName, "string", "decrementChecks");
}

// Function: increments the number of times the checkBox for the given ID has been disabled.
// Parameters: a course ID and name of source checking.
// Return value: true if a checkBox for the courseID was found. False if not.
function incrementDisabled(courseID, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "incrementDisabled");
    throwIfTypeDoesNotMatch(sourceName, "string", "incrementDisabled");
}

// Function: decrements the number of times the checkBox for the given ID has been disabled.
// Parameters: a course ID and name of source checking.
// Return value: true if a checkBox for the courseID was found. False if not.
function decrementDisabled(courseID, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "decrementDisabled");
    throwIfTypeDoesNotMatch(sourceName, "string", "decrementDisabled");
}

/* --- Interfacing with the HTML code. --- */

// Function: gets the HTML element for the check box corresponding to the course ID.
// Parameters: a string for the course ID.
// Return Value: the HTML element for the given check box. Returns undefined if not such element.
function getHTMLCheckBoxElementForCourseID(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "getHTMLCheckBoxElementForCourseID");
    
    if (isCheckBoxForID(courseID))
        return document.getElementById("OC_" + courseID);
    else
        return undefinded;
}

// Function: gets the HTML element for the check box corresponding to the checkBox instance.
// Parameters: a checkBox.
// Return Value: the HTML element for the given check box. Returns undefined if not such element.
function getHTMLCheckBoxElementForCheckBox(tempCheckBox)
{
    getHTMLElementForCourseID(tempCheckBox.ID);
}