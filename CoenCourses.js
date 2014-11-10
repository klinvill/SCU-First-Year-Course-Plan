/* --- Coen Course Array --- */
// Array of courses, ordered in terms of priority placement with the highest priority being at the front
// Each course is structured as: course = {name:”Calculus 3”, id:”MATH 13”, offered:[”F”, “W”, “S”], waived:false, pre_req:”MATH 12”, replace_with: "MATH 14"}
var COEN_course_array =
[
/* Math Series */
 {
 name: "Precalculus",
 id: "MATH 9",
 offered: "F",
 waived: true,
 pre_req: "",
 replace_with: "MATH 11",
 previous: "",
 hasLab: false
 },
 {
 name: "Calculus I",
 id: "MATH 11",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 9",
 replace_with: "MATH 12",
 previous: "MATH 9",
 hasLab: false
 },
 {
 name: "Calculus II",
 id: "MATH 12",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 11",
 replace_with: "MATH 13",
 previous: "MATH 11",
 hasLab: false
 },
 {
 name: "Calculus III",
 id: "MATH 13",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 12",
 replace_with: "MATH 14",
 previous: "MATH 12",
 hasLab: false
 },
 {
 name: "Calculus IV",
 id: "MATH 14",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 13",
 replace_with: "AMTH 106",
 previous: "MATH 13",
 hasLab: false
 },
 {
 name: "Differential Equations",
 id: "AMTH 106",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 14",
 replace_with: "AMTH 108",
 previous: "MATH 14",
 hasLab: false
 },
 {
 name: "Probability and Statistics",
 id: "AMTH 108",
 offered: "FWS",
 waived: false,
 pre_req: "MATH 14",
 replace_with: "MATH 53",
 previous: "AMTH 106",
 hasLab: false
 },
 {
 name: "Linear Algebra",
 id: "MATH 53",
 offered: "WS",
 waived: false,
 pre_req: "MATH 13",
 replace_with: finalCourseOption.id,
 previous: "AMTH 108",
 hasLab: false
 },
/* COEN intro Series */
 {
 name: "Intro. to Programming",
 id: "COEN 10",
 offered:"FW",
 waived: false,
 pre_req: "",
 replace_with: "COEN 11",
 previous: "",
 hasLab: true
 },
 {
 name: "Advanced Programming",
 id: "COEN 11",
 offered: "FWS",
 waived: false,
 pre_req: "COEN 10",
 replace_with: "COEN 12",
 previous: "COEN 10",
 hasLab: true
 },
 {
 name: "Data Structures",
 id: "COEN 12",
 offered: "S",
 waived: false,
 pre_req: "COEN 11",
 replace_with: "COEN 21",
 previous: "COEN 11",
 hasLab: true
 },
 /*
 {
 name: "Logic Design",
 id: "COEN 21",
 offered: "FWS",
 waived: false,
 pre_req: "",
 replace_with: "COEN 20",
 previous: "COEN 12",
 hasLab: true
 },
 {
 name: "Embedded Systems",
 id: "COEN 20",
 offered: "FS",
 waived: false,
 pre_req: "COEN 11",
 replace_with: finalCourseOption.id,
 previous: "COEN 21",
 hasLab: true
 },
  */
/* CTW Series */
 {
 name:"Critical Thinking & Writing 1",
 id: "CTW 1",
 offered:"FWS",
 waived:false,
 pre_req:"",
 replace_with: "CTW 2",
 previous: "",
 hasLab: false
 },
 {
 name:"Critical Thinking & Writing 2",
 id: "CTW 2",
 offered:"WS",
 waived:false,
 pre_req:"CTW 1",
 replace_with: finalCourseOption.id,
 previous: "CTW 1",
 hasLab: false
 },
/* Others */
 {
 name:"Chemistry I",
 id: "CHEM 11",
 offered: "F",
 waived: false,
 pre_req:"",
 replace_with: finalCourseOption.id,
 previous: "",
 hasLab: true
 },
 {
 name: "Physics I",
 id: "PHYS 31",
 offered: "W",
 waived: false,
 pre_req: "",
 replace_with: "PHYS 32",
 previous: "",
 hasLab: true
 },
 {
 name: "Physics II",
 id: "PHYS 32",
 offered: "S",
 waived: false,
 pre_req: "PHYS 31",
 replace_with: "PHYS 33",
 previous: "PHYS 31",
 hasLab: true
 },
 {
 name: "Physics III",
 id: "PHYS 33",
 offered: "F",
 waived: false,
 // Also needs pre-req of MATH 12
 pre_req: "PHYS 32",
 replace_with: finalCourseOption.id,
 previous: ["PHYS 32", "MATH 11", "MATH 12"],
 hasLab: true
 },
 {
 name: "Discrete Mathematics",
 id: "COEN 19",
 offered: "S",
 waived: false,
 pre_req: "",
 replace_with: finalCourseOption.id,
 previous: "",
 hasLab: false
 }
 ];