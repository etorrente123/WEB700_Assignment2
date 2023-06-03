/********************************************************************************* 
*  WEB700 – Assignment 2 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Eleonor Rose Torrente    Student ID: 118492222        Date: 2023-06-03 
* 
********************************************************************************/ 


const collegeData = require('./modules/collegeData.js');

collegeData.initialize()
.then( dataCollection => {

  collegeData.getAllStudents(dataCollection)
  .then( students => console.log(`Successfully retrieved ${students.length} students`))
  .catch( error => console.log(error));

  collegeData.getCourses(dataCollection)
  .then( courses => console.log(`Successfully retrieved ${courses.length} courses`))
  .catch( error => console.log(error));

  collegeData.getTAs(dataCollection)
  .then( TAs => console.log(`Successfully retrieved ${TAs.length} TAs`) )
  .catch( error => console.log(error));

})
.catch( error => console.log(error));