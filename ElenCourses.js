// Array of courses, ordered in terms of priority placement with the highest priority being at the front
// Each course is structured as: course = {name:”Calculus 3”, id:”MATH 13”, offered:[”F”, “W”, “S”], waived:false, pre_req:”MATH 12”, replace_with: "MATH 14"}
var ELEN_course_array =
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
 name: "Applied Programming in C",
 id: "COEN 44",
 offered: "FW",
 waived: false,
 pre_req: "MATH 13",
 replace_with: "ELEN 33",
 previous: "MATH 13",
 hasLab: true
 },
    
/* CandI Series */
 /*{
 name:"Cultures & Ideas 1",
 id: "C&I 1",
 offered:"F",
 waived:false,
 pre_req:"",
 replace_with: "C&I 2",
 previous: "",
 hasLab: false
 },
 {
 name:"Cultures & Ideas 1",
 id: "C&I 1",
 offered:"W",
 waived:false,
 pre_req:"C&I 2",
 replace_with: finalCourseOption.id,
 previous: "C&I 1",
 hasLab: false
 },*/
    
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
 name: "Logic Design",
 id: "ELEN 21",
 offered: "FWS",
 waived: false,
 pre_req: "",
 replace_with: "COEN 20",
 previous: "COEN 12",
 hasLab: true
 },
    
 {
 name:"Energy and Nanotechnology",
 id: "ELEN 20",
 offered: "S",
 waived: false,
 pre_req:"",
 replace_with: finalCourseOption.id,
 previous: "",
 hasLab: false
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
 name: "Physics IV",
 id: "PHYS 34",
 offered: "W",
 waived: false,
 // Also needs pre-req of MATH 12
 pre_req: "PHYS 33",
 replace_with: finalCourseOption.id,
 previous: ["PHYS 33", "MATH 11", "MATH 12"],
 hasLab: true
 },
    
 /* ELEN Series */
 {
 name: "Circuits I",
 id: "ELEN 50",
 offered: "FWS",
 waived: false,
 pre_req: "",
 replace_with: "ELEN 100",
 previous: ["PHYS 32", "MATH 11", "MATH 12"],
 hasLab: true
 },
 {
 name: "Circuits II",
 id: "ELEN 100",
 offered: "W",
 waived: false,
 pre_req: "",
 replace_with: finalCourseOption.id,
 previous: ["ELEN 50", "PHYS 33", "MATH 11", "MATH 12"],
 hasLab: true
 },
 {
 name: "Digital Systems Architecture",
 id: "ELEN 33",
 offered: "W",
 pre_req: "",
 replace_with: finalCourseOption.id,
 previous: ["ELEN 21", "COEN 44"],
 hasLab: true
 }
 ];