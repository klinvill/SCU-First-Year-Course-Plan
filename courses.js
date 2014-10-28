// Course Data File

// Note: need to implement a get_default() function which returns the default replacement ID

// Array of courses, ordered in terms of priority placement with the highest priority being at the front
// Each course is structured as: course = {name:”Calculus 3”, id:”MATH 13”, offered:[”F”, “W”, “S”], waived:false, pre_req:”MATH 12”, replace_with: "MATH 14"}
var COEN_course_array =
[
 /* Math Series */
 {
 name: "Precalculus",
 id: "MATH 9",
 offered: ["F"],
 waived: true,
 pre_req: "",
 replace_with: "MATH 11"
 },
 
 {
 name: "Calculus I",
 id: "MATH 11",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "MATH 9",
 replace_with: "MATH 12"
 },
 
 {
 name: "Calculus II",
 id: "MATH 12",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "MATH 11",
 replace_with: "MATH 13"
 },
 
 {
 name: "Calculus III",
 id: "MATH 13",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "MATH 12",
 replace_with: "MATH 14"
 },
 
 {
 name: "Calculus IV",
 id: "MATH 14",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "MATH 13",
 replace_with: "MATH 106"
 },
 
 {
 name: "Differential Equations",
 id: "MATH 106",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "MATH 14",
 replace_with: "MATH 53"
 },
 
 // Use replace_with instead of pre_req for ordering
 {
 name: "Linear Algebra",
 id: "MATH 53",
 offered: ["W", "S"],
 waived: false,
 pre_req: "MATH 13",
 replace_with: get_default()
 }
 
 
 
 /* COEN intro Series */
 {
 name: "Intro. to Programming",
 id: "COEN 10",
 offered:["F", "W"],
 waived: false,
 pre_req: "",
 replace_with: "COEN 11"
 },
 
 {
 name: "Advanced Programming",
 id: "COEN 11",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "COEN 10",
 replace_with: "COEN 12"
 },
 
 {
 name: "Data Structures",
 id: "COEN 12",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "COEN 11",
 replace_with: "COEN 21"
 },
 
 {
 name: "Logic Design",
 id: "COEN 21",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "",
 replace_with: "COEN 20"
 },
 
 {
 name: "Embedded Systems",
 id: "COEN 20",
 offered: ["F", "S"],
 waived: false,
 pre_req: "COEN 11",
 replace_with: get_default()
 },
 
 
 
 /* CTW Series */
 {
 name:"Critical Thinking & Writing 1",
 id: "CTW 1",
 offered:["F", "W", "S"],
 waived:false,
 pre_req:"",
 replace_with: "CTW 2"
 },
 
 {
 name: "Critical Thinking & Writing 2",
 id: "CTW 2",
 offered: ["F", "W", "S"],
 waived: false,
 pre_req: "CTW 1",
 replace_with: get_default()
 },
 
 
 /* Others */
 {
 name:"Chemistry I",
 id: "CHEM 11",
 offered: ["F"],
 waived: false,
 pre_req:"",
 replace_with: get_default()
 },
 
 
 {
 name: "Physics I",
 id: "PHYS 31",
 offered: ["W"],
 waived: false,
 pre_req: "",
 replace_with: get_default(),
 },
 
 {
 name: "Physics II",
 id: "PHYS 32",
 offered: ["S"],
 waived: false,
 pre_req: "PHYS 31",
 replace_with: get_default()
 },
 
 {
 name: "Discrete Mathematics",
 id: "COEN 19",
 offered: ["F", "S"],
 waived: false,
 pre_req: "",
 replace_with: get_default()
 }
 
 
 
                         