/* ----- Helper Functions To Be used Elsewhere ----- */

/* --- Security Functions --- */

// Function: checks that the parameter has the desired type and throws an exception if it doesn't.
function throwIfTypeDoesNotMatch(parameter, typeString, callLocationString)
{
    if (typeof(parameter) != typeString)
    {
        console.log("Problem Parameter: " + parameter);
        throw "Invalid parameter type in " + callLocationString + ".";
    }
}

/* --- String Processing Functions --- */

// Function: checks if one string stars with another.
// Parameters: full string and string to check start of first string for.
// Return value: Boolean.
function startsWith(fullString, startString)
{
    throwIfTypeDoesNotMatch(fullString, "string", "startsWith");
    throwIfTypeDoesNotMatch(startString, "string", "startsWith");
    
    if (startString.length > fullString.length)
        return false;
    
    return (fullString.substring(0, startString.length) == startString);
}

/* --- Array Processing Functions --- */

// Function: checks if the given array contains the given element.
// Parameters: and array and an element to be searched for.
// Return Value: Boolean.
function arrayContains(myArray, element)
{
    throwIfTypeDoesNotMatch(myArray, "object", "arrayContains");
    
    for (var i = 0; i < myArray.length; i++)
    {
        if (element == myArray[i]) return true;
    }
    
    return false;
}