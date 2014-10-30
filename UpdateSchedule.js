// Function to be called whenever something changes on the website.

function updateSchedule()
{
    console.log("Updating Schedule.");
    // Updated waived status of courses.
    CheckWaived();
    
    // Generating a schedule.
    generateSchedule();
    
    // Update schedule display.
}