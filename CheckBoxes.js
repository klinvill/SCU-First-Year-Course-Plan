/* The Data Structure for Check Boxes */

/* --- Array of All Check Box Instances --- */

var checkBoxArray = [];


/* --- CheckBox Object Prototype --- */

function checkBox(ID, numTimesChecked, numTimesDisabled)
{
    this.ID = ID;
    this.numTimesChecked = numTimesChecked;
    this.numTimesDisabled = numTimesDisabled;
    this.userChecked = false;
    this.checkSources = []; // Array of string of check source ID's.
    this.disabledSources = []; // Array of string of disabled source ID's.
    
    /* -- CheckBox Methods -- */
    
    // Function: tells whether the object has the given check source.
    // Parameters: string for a source name.
    // Return Value: Boolean.
    this.hasCheckSource = function (sourceName){
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method hasCheckSource");
        
        return (this.checkSources.indexOf(sourceName) > -1);
    }
    
    // Function: tells whether the object has the given disabled source.
    // Parameters: string for a source name.
    // Return Value: Boolean.
    this.hasDisabledSource = function (sourceName){
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method hasDisabledSource");
        
        return (this.disabledSources.indexOf(sourceName) > -1);
    }
    
    // Function: adds the given check source to the checkBox's sources.
    // Parameters: string for a source name.
    this.addCheckSource = function (sourceName, tempCheckBox)
    {
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method addCheckSource");
        
        this.checkSources.push(sourceName);
    }
    
    // Function: adds the given disabed source to the checkBox's sources.
    // Parameters: string for a source name.
    this.addDisabledSource = function (sourceName, tempCheckBox)
    {
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method addDisabledSource");
        
        this.disabledSources.push(sourceName);
    }
    
    // Function: removes the given check source from the checkBox's list of sources.
    // Parameters: string for a source name.
    // Return Value: Boolean for whether the given source was found or not.
    this.removeCheckSource = function (sourceName, tempCheckBox)
    {
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method removeCheckSource");
        
        var index = this.checkSources.indexOf(sourceName);
        if (index > -1)
        {
            this.checkSources.splice(index, 1);
            return true;
        }
        else
            return false;
    }
    
    // Function: removes the given check source from the checkBox's list of sources.
    // Parameters: string for a source name.
    // Return Value: Boolean for whether the given source was found or not.
    this.removeDisabledSource = function (sourceName, tempCheckBox)
    {
        throwIfTypeDoesNotMatch(sourceName, "string", "checkBox method removeDisabledSource");
        
        var index = this.disabledSources.indexOf(sourceName);
        if (index > -1)
        {
            this.disabledSources.splice(index, 1);
            return true;
        }
        else
            return false;
    }
}


/* --- Functions for analyzing checkBoxes array. --- */

// Function: returns the checkBox object for the given courseID.
// Parameter: a course ID.
// Return Value: the checkBox object for the courseID.
//               undefined if check box for course not found.
function getCheckBoxForID(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "getCheckBoxForID");
    
    for (var i = 0; i < checkBoxArray.length; i++)
    {
        var tempCheckBox = checkBoxArray[i];
        
        if (tempCheckBox.ID == courseID) return tempCheckBox;
    }
    
    return undefined;
}

// Function: tells whether there is a check box for the given ID.
// Parameter: string for course ID.
// Return value: Boolean.
function checkBoxForIDExists(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "checkBoxForIDExists");
    
    return (getCheckBoxForID(courseID) != undefined);
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

// Function: get all the IDs for courses that have been user waived.
// Return value: An array of course ID strings.
function userWaivedCourseIDs()
{
    var courseIDs = [];
    
    for (var i = 0; i < checkBoxArray.length; i++)
    {
        var tempCheckBox = checkBoxArray[i];
        if (tempCheckBox.userChecked)
            courseIDs.push(tempCheckBox.ID);
    }
    
    return courseIDs;
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
    if (!(tempCheckBox.hasCheckSource(sourceName)))
    {
        tempCheckBox.numTimesChecked++;
        tempCheckBox.addCheckSource(sourceName);
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
        if (!(tempCheckBox.hasCheckSource(sourceName)))
        {
            tempCheckBox.numTimesChecked++;
            tempCheckBox.addCheckSource(sourceName);
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
        throw "No checkBox for ID " + courseID + " in decrementChecks.";
    
    //Check box has not yet been checked by the given source.
    if (tempCheckBox.hasCheckSource(sourceName))
    {
        if(tempCheckBox.numTimesChecked > 0)
            tempCheckBox.numTimesChecked--;
        tempCheckBox.removeCheckSource(sourceName);
        return true;
    } else {
        return false;
    }
}

// Function Notes: Same as decrementChecks, but works on an array of courseIDs.
function decrementChecksGroup(courseIDArray, sourceName)
{
    throwIfTypeDoesNotMatch(courseIDArray, "object", "decrementChecksGroup");
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
        if (tempCheckBox.hasCheckSource(sourceName))
        {
            if(tempCheckBox.numTimesChecked > 0)
                tempCheckBox.numTimesChecked--;
            tempCheckBox.removeCheckSource(sourceName);
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
        throw "No checkBox for ID " + courseID + " in incrementDisabled.";
    
    //Check box has not yet been checked by the given source.
    if (!(tempCheckBox.hasDisabledSource(sourceName)))
    {
        tempCheckBox.numTimesDisabled++;
        tempCheckBox.addDisabledSource(sourceName);
        return true;
    } else {
        return false;
    }
}

// Function Notes: Same as incrementDisabled, but works on an array of courseIDs.
function incrementDisabledGroup(courseIDArray, sourceName)
{
    throwIfTypeDoesNotMatch(courseIDArray, "object", "incrementDisabledGroup");
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
        if (!(tempCheckBox.hasDisabledSource(sourceName)))
        {
            tempCheckBox.numTimesDisabled++;
            tempCheckBox.addDisabledSource(sourceName);
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
        throw "No checkBox for ID " + courseID + " in decrementDisabled.";
    
    //Check box has not yet been checked by the given source.
    if (tempCheckBox.hasDisabledSource(sourceName))
    {
        if(tempCheckBox.numTimesChecked > 0)
            tempCheckBox.numTimesDisabled--;
        tempCheckBox.removeDisabledSource(sourceName);
        return true;
    } else {
        return false;
    }
}

// Function Notes: Same as decrementDisabled, but works on an array of courseIDs.
function decrementDisabledGroup(courseIDArray, sourceName)
{
    throwIfTypeDoesNotMatch(courseIDArray, "object", "decrementDisabledGroup");
    throwIfTypeDoesNotMatch(sourceName, "string", "decrementDisabledGroup");
    
    for (var i = 0; i < courseIDArray.length; i++)
    {
        var courseID = courseIDArray[i]
        if (typeof(courseID) != "string")
            throwIfTypeDoesNotMatch(courseID, "string", "decrementDisabledGroup");
        
        var tempCheckBox = getCheckBoxForID(courseID);
        if (tempCheckBox == undefined)
            throw "No checkBox for ID " + courseID + " in decrementDisabledGroup.";
        
        //Check box has not yet been checked by the given source.
        if (tempCheckBox.hasDisabledSource(sourceName))
        {
            if(tempCheckBox.numTimesChecked > 0)
                tempCheckBox.numTimesDisabled--;
            tempCheckBox.removeDisabledSource(sourceName);
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

/* --- Setters to change whether the checkbox has been checked by the user. --- */

//Function: sets the userChecked field of a checkBox to true.
function setCheckedByUser(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "setCheckedByUser");
    
    getCheckBoxForID(courseID).userChecked = true;
}

//Function: sets the userChecked field of a checkBox to false.
function setUncheckedByUser(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "setCheckedByUser");
    
    getCheckBoxForID(courseID).userChecked = true;
    
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
        return undefined;
}

// Function: gets the HTML element for the check box corresponding to the checkBox instance.
// Parameters: a checkBox.
// Return Value: the HTML element for the given check box. Returns undefined if not such element.
function getHTMLCheckBoxElementForCheckBox(tempCheckBox)
{
    throwIfTypeDoesNotMatch(tempCheckBox, "object", "getHTMLCheckBoxElementForCheckBox");
    getHTMLElementForCourseID(tempCheckBox.ID);
}

// Function: gets the wrapper HTML element for the check box corresponding to the course ID.
// Parameters: a string for the course ID.
// Return Value: the HTML element for the wrapper of the given check box. Returns undefined if not such element.
function getHTMLCheckBoxElementWrapperForCourseID(courseID)
{
    throwIfTypeDoesNotMatch(courseID, "string", "getHTMLCheckBoxElementForCourseID");
    
    if (checkBoxForIDExists(courseID))
        return document.getElementById("Label_" + courseID);
    else
        return undefined;
}

// Function: gets the wrapper HTML element for the check box corresponding to the course ID.
// Parameters: a checkBox.
// Return Value: the HTML element for the wrapper of the given check box. Returns undefined if not such element.
function getHTMLCheckBoxElementWrapperForCheckBox(tempCheckBox)
{
    throwIfTypeDoesNotMatch(tempCheckBox, "object", "getHTMLCheckBoxElementWrapperForCheckBox");
    getHTMLElementForCourseID(tempCheckBox.ID);
}

// Function: Called to update the checkboxes on the web page to check and/or lock them.
function updateCheckBoxDisplay()
{
    for (var i = 0; i < checkBoxArray.length; i++)
    {
        var tempCheckBox = checkBoxArray[i];
        var htmlCheckBox = getHTMLCheckBoxElementForCheckBox(tempCheckBox);
        var htmlCheckBoxWrapper = getHTMLCheckBoxElementWrapperForCheckBox(tempCheckBox);
        
        if (tempCheckBox.numTimesChecked > 0)
        {
            // Check the checkbox.
            htmlCheckBox.checked = true;
        } else {
            // Uncheck the check box.
            htmlCheckBox.checked = false;
        }
        
        if (tempCheckBox.numTimesDisabled > 0)
        {
            // Disable and grey out the checkbox.
            htmlCheckBox.disabled = true;
            htmlCheckBoxWrapper.className = "Uneditable";
        } else {
            // Un-Disable and un-grey the check box.
            htmlCheckBox.disabled = false;
            htmlCheckBoxWrapper.className = "";
        }
    }
    
    //The stupid logic for making CRE score affect these.
    var checkBoxesEffectedByCRE = ["MATH 14", "MATH 13", "MATH 12", "MATH 11"];
    var CRE_Score = document.getElementById("CRE_Score").selectedIndex;
    
    for (var i = 0; i < checkBoxesEffectedByCRE.length; i++)
    {
        var courseID = checkBoxesEffectedByCRE[i];
        var htmlCheckBox = getHTMLCheckBoxElementForCourseID(courseID);
        var htmlCheckBoxWrapper = getHTMLCheckBoxElementWrapperForCourseID(courseID);
        
        // Uncheck the check box.
        htmlCheckBox.checked = false;
        // Disable and grey out the checkbox.
        htmlCheckBox.disabled = true;
        htmlCheckBoxWrapper.className = "Uneditable";
    }
    
    
}

/* --- Debugging --- */
function logCheckBoxArray()
{
    for (var i = 0; i < checkBoxArray.length; i++)
    {
        var tempCheckBox = checkBoxArray[i];
        console.log(tempCheckBox.ID + "\n"+ JSON.stringify(tempCheckBox) +"\n");
    }
}