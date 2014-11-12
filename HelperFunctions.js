/* --- Helper Functions To Be used Elsewhere --- */

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



/* --- Security Functions --- */

// Function: checks that the parameter has the desired type and throws an exception if it doesn't.
function throwIfTypeDoesNotMatch(parameter, typeString, callLocationString)
{
    if (typeof(parameter) != typeString)
        throw "Invalid parameter type in" + callLocationString + ".";
}