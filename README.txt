===================================
        Installation Guide 
===================================

1) If you wish to host this on a web server, copy the folder containing this README into the desired webserver location.

2) To run the system, double click the index.html file to open the webpage. Alternatively, you may navigate to webserver_location/First-Year-Course-Planner/index.html, where webserver_location is the file path for wherever you copy this folder.





===================================
          Enclosed Files
===================================

index.html - The html file for the website. Click this to open the website.


User Manual.pdf - The user manual for the website to provide more in depth explanations on how to use the website.


scripts/ - This folder contains the javascript files for the website.

	CheckBoxes.js - Contains the code for the behind the scenes data processing for the logic about whether checkboxes should be checked, unchecked, enabled, or disabled.

	CheckScores.js - Contains the logic for waiving courses.

	course.js - Contains all of the information on courses as well as which courses are available to which major and the functions used to manipulate this information. This is the file that needs to be edited to add or remove a course to the schedules or to change when a course would be offered.

	EventHandlers.js - Contains all of the functions called by the html page. These functions are called when a user inputs information or otherwise interacts with the page.

	GenerateSchedule.js - Contains all of the logic for creating a schedule based on the current state of the courses.

	GlobalReferences.js - Contains global variables referenced throughout the code to allow for easy variable value changing. (e.g. The number of quarters in a schedule.)

	HelperFunctions.js - Contains functions useful to coders for code security and debugging purposes.

	Qtesting.js - Contains some automated tests for the website. It currently only hosts tests for the math logic but can be expanded to encompass more functionality.

	ScheduleSorting.js - Contains logic for improving ordering of the courses in the schedule based on aesthetics.


styles/ - This folder contains the custom CSS files for the website

	Styles_for_Course_Plan_Generator.css - Contains the custom styles used by the website. Change the CSS here in order to change the website’s appearance.








===================================
             Credits 
===================================

Created By: Group 6

	Jesse Harder
	Kirby Linvill
	Jasper Tan
