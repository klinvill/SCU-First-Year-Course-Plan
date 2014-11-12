/* The Data Structure for Check Boxes */

/* --- Array of All Check Box Instances --- */

var checkBoxArray = [];


/* --- CheckBox Object Prototype --- */

function checkBox(ID, numTimesChecked, numTimesDisabled)
{
    this.ID = ID;
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
    this.addSouce = function (sourceName, tempCheckBox)
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
function checkBoxForIDExists(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "checkBoxForIDExists");
    
    return (getCheckBoxForID(courseID) != undefinded);
}

// Function: returns whether the check box for the given ID should be checked.
// Parameters: a course ID.
// Return value: Boolean.
function shouldBeChecked(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "shouldBeChecked");
    
    return (getCheckBoxForID(courseID).numTimesChecked >= 1);
}

// Function: returns whether the check box for the given ID should be disabled.
// Parameters: a course ID.
// Return value: Boolean.
function shouldBeDisabled(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "shouldBeDisabled");
    
    return (getCheckBoxForID(courseID).numTimesDisabled >= 1);
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
    
    for (var i = 0; i < checkBoxArray.length; i++)
    {
        if (checkBoxArray[i].ID == courseID)
        {
            checkBoxArray.splice(i, 1);
            return true;
        }
    }
    
    return false;
}


/* --- Functions for check count and disable count manipulation --- */

// Function: increments the number of times the checkBox for the given ID has been checked.
// Parameters: a course ID and name of source checking.
// Return value: true if number of checks was incremented. False if not.
function incrementChecks(courseID, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "incrementChecks");
    throwIfTypeDoesNotMatch(sourceName, "string", "incrementChecks");
    
    var tempCheckBox = getCheckBoxForID(courseID);
    if (tempCheckBox == undefined)
        throw "No checkBox for ID " + courseID + " in incrementChecks.";
    
    //Check box has not yet been checked by the given source.
    if (!(tempCheckBox.hasSource(sourceName)))
    {
        tempCheckBox.numTimesChecked++;
        tempCheckBox.addSouce(sourceName);
        return true;
    } else {
        return false;
    }
}

// Function Notes: Same as incrementChecks, but works on an array of courseIDs.
function incrementChecksGroup(courseIDArray, sourceName)
{
    throwIfTypeDoesNotMatch(courseIDArray, "object", "incrementChecksGroup");
    throwIfTypeDoesNotMatch(sourceName, "string", "incrementChecksGroup");
    
    for (var i = 0; i < courseIDArray.length; i++)
    {
        var courseID = courseIDArray[i]
        if (typeof(courseID) != "string")
            throwIfTypeDoesNotMatch(courseID, "string", "incrementChecksGroup");
        
        var tempCheckBox = getCheckBoxForID(courseID);
        if (tempCheckBox == undefined)
            throw "No checkBox for ID " + courseID + " in incrementChecksGroup.";
        
        //Check box has not yet been checked by the given source.
        if (!(tempCheckBox.hasSource(sourceName)))
        {
            tempCheckBox.numTimesChecked++;
            tempCheckBox.addSouce(sourceName);
            return true;
        } else {
            return false;
        }
    }
}

// Function: decrements the number of times the checkBox for the given ID has been checked.
// Parameters: a course ID and name of source checking.
// Return value: true if number of checks was decremented. False if not.
function decrementChecks(courseID, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "decrementChecks");
    throwIfTypeDoesNotMatch(sourceName, "string", "decrementChecks");
    
    var tempCheckBox = getCheckBoxForID(courseID);
    if (tempCheckBox == undefined)
        throw "No checkBox for ID " + courseID + " in incrementChecks.";
    
    //Check box has not yet been checked by the given source.
    if (tempCheckBox.hasSource(sourceName))
    {
        tempCheckBox.numTimesChecked--;
        tempCheckBox.removeSource(sourceName);
        return true;
    } else {
        return false;
    }
}

// Function Notes: Same as decrementChecks, but works on an array of courseIDs.
function decrementChecksGroup(courseIDArray, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "decrementChecksGroup");
    throwIfTypeDoesNotMatch(sourceName, "string", "decrementChecksGroup");
    
    for (var i = 0; i < courseIDArray.length; i++)
    {
        var courseID = courseIDArray[i]
        if (typeof(courseID) != "string")
            throwIfTypeDoesNotMatch(courseID, "string", "decrementChecksGroup");
        
        var tempCheckBox = getCheckBoxForID(courseID);
        if (tempCheckBox == undefined)
            throw "No checkBox for ID " + courseID + " in decrementChecksGroup.";
        
        //Check box has not yet been checked by the given source.
        if (tempCheckBox.hasSource(sourceName))
        {
            tempCheckBox.numTimesChecked--;
            tempCheckBox.removeSource(sourceName);
            return true;
        } else {
            return false;
        }
    }
}

// Function: increments the number of times the checkBox for the given ID has been disabled.
// Parameters: a course ID and name of source checking.
// Return value: true if number of disablings was incremented. False if not.
function incrementDisabled(courseID, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "incrementDisabled");
    throwIfTypeDoesNotMatch(sourceName, "string", "incrementDisabled");
    
    var tempCheckBox = getCheckBoxForID(courseID);
    if (tempCheckBox == undefined)
        throw "No checkBox for ID " + courseID + " in incrementChecks.";
    
    //Check box has not yet been checked by the given source.
    if (!(tempCheckBox.hasSource(sourceName)))
    {
        tempCheckBox.numTimesDisabled++;
        tempCheckBox.addSouce(sourceName);
        return true;
    } else {
        return false;
    }
}

// Function Notes: Same as incrementDisabled, but works on an array of courseIDs.
function incrementDisabledGroup(courseIDArray, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "incrementDisabledGroup");
    throwIfTypeDoesNotMatch(sourceName, "string", "incrementDisabledGroup");
    
    for (var i = 0; i < courseIDArray.length; i++)
    {
        var courseID = courseIDArray[i]
        if (typeof(courseID) != "string")
            throwIfTypeDoesNotMatch(courseID, "string", "incrementDisabledGroup");
        
        var tempCheckBox = getCheckBoxForID(courseID);
        if (tempCheckBox == undefined)
            throw "No checkBox for ID " + courseID + " in incrementDisabledGroup";
        
        //Check box has not yet been checked by the given source.
        if (!(tempCheckBox.hasSource(sourceName)))
        {
            tempCheckBox.numTimesDisabled++;
            tempCheckBox.addSouce(sourceName);
            return true;
        } else {
            return false;
        }
    }
}

// Function: decrements the number of times the checkBox for the given ID has been disabled.
// Parameters: a course ID and name of source checking.
// Return value: true if number of disablings was decremented. False if not.
function decrementDisabled(courseID, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "decrementDisabled");
    throwIfTypeDoesNotMatch(sourceName, "string", "decrementDisabled");
    
    var tempCheckBox = getCheckBoxForID(courseID);
    if (tempCheckBox == undefined)
        throw "No checkBox for ID " + courseID + " in incrementChecks.";
    
    //Check box has not yet been checked by the given source.
    if (tempCheckBox.hasSource(sourceName))
    {
        tempCheckBox.numTimesDisabled--;
        tempCheckBox.removeSource(sourceName);
        return true;
    } else {
        return false;
    }
}

// Function Notes: Same as decrementDisabled, but works on an array of courseIDs.
function decrementDisabledGroup(courseIDArray, sourceName)
{
    throwIfTypeDoesNotMatch(courseID, "string", "decrementDisabledGroup");
    throwIfTypeDoesNotMatch(sourceName, "string", "decrementDisabledGroup");
    
    for (var i = 0; i < courseIDArray.length; i++)
    {
        var courseID = courseIDArray[i]
        if (typeof(courseID) != "string")
            throwIfTypeDoesNotMatch(courseID, "string", "decrementDisabledGroup");
        
        var tempCheckBox = getCheckBoxForID(courseID);
        if (tempCheckBox == undefined)
            throw "No checkBox for ID " + courseID + " in incrementChecks.";
        
        //Check box has not yet been checked by the given source.
        if (tempCheckBox.hasSource(sourceName))
        {
            tempCheckBox.numTimesDisabled--;
            tempCheckBox.removeSource(sourceName);
            return true;
        } else {
            return false;
        }
    }
}

// Function: calls incrementChecks and incrementDisabled on the given parameters.
function incrementChecksAndDisabled(courseID, sourceName)
{
    incrementChecks(courseID, sourceName);
    incrementDisabled(courseID, sourceName);
}

// Function: calls decrementChecks and decrementDisabled on the given parameters.
function decrementChecksAndDisabled(courseID, sourceName)
{
    decrementChecks(courseID, sourceName);
    decrementDisabled(courseID, sourceName);
}

// Function: calls incrementChecksGroup and incrementDisabledGroup on the given parameters.
function incrementChecksAndDisabledGroup(courseIDArray, sourceName)
{
    incrementChecksGroup(courseIDArray, sourceName);
    incrementDisabledGroup(courseIDArray, sourceName);
}

// Function: calls decrementChecksGroup and decrementDisabledGroup on the given parameters.
function decrementChecksAndDisabledGroup(courseIDArray, sourceName)
{
    decrementChecksGroup(courseIDArray, sourceName);
    decrementDisabledGroup(courseIDArray, sourceName);
}


/* --- Interfacing with the HTML code. --- */

// Function: gets the HTML element for the check box corresponding to the course ID.
// Parameters: a string for the course ID.
// Return Value: the HTML element for the given check box. Returns undefined if not such element.
function getHTMLCheckBoxElementForCourseID(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "getHTMLCheckBoxElementForCourseID");
    
    if (checkBoxForIDExists(courseID))
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