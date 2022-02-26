//import faker from '@faker-js/faker';
var faker = require('@faker-js/faker');

var database = { qualifications: []};
var fn = faker.name;
//for(var i =0; i<5; ++i ) {
//  if(fn != null) {
    database.qualifications.push(qualification={
      id: 0,
      jobTitle: "Consultant",
      name: "Bharati Enterprises dba Maya Dry Fruits and Masala",
      description: "● Architected, designed, developed E-store web application\n" +
        "● Setup infrastructure CI/CD, server, Git, environment etc\n" +
        "● Resolved queries regarding business requirements",
      address: {city:"Navi Mumbai", state: "Maharashtra"},
      startTime: {month: "August", year:"2021"},
      endTime: {month: "Present", year:"2021"}
    });

  database.qualifications.push(qualification={
    id: 1,
    jobTitle: "Software Developer 2",
    name: "CSpire",
    description: "● Lead daily scrum meetings for DevOps team and Load/Chaos tests for whole E-store online department\n" +
      "● Mentored other developers and enforced best practices\n" +
      "● Engineered, tested and maintained full-stack solutions for real time applications used by over 1 million users\n" +
      "● Implemented RESTful API endpoints\n" +
      "● Researched and deployed new technologies, including migration from legacy to latest technologies\n" +
      "● Optimized current systems, increasing performance and reducing time/space costs\n" +
      "● Created custom solutions for regression testing, patching\n" +
      "● Implemented DevOps/maintenance tasks including building pipelines, minimum down-time production deployments, patching etc\n" +
      "● Automated patching, reporting, testing, management and maintenance tasks\n" +
      "● Solved multiple high priority production issues and provided on call support",
    address: {city:"Ridgeland", state: "Mississippi"},
    startTime: {month: "August", year:"2018"},
    endTime: {month: "July", year:"2021"}

  });

database.qualifications.push(qualification={
  id: 2,
  jobTitle: "IoT Prop Developer",
  name: "Paradox Games and Escape Rooms",
  description: "● Created sensor-based devices, web servers and IoT devices\n" +
    "● Solved problems involving latency",
  address: {city:"Tupelo", state: "Mississippi"},
  startTime: {month: "June", year:"2017"},
  endTime: {month: "January", year:"2018"}

});

database.qualifications.push(qualification={
  id: 4,
  jobTitle: "Consultant;",
  name: "ADR Rocks LLC",
  description: "● Created IoT camera low-power device prototype based on ESP32\n" +
    "● Pioneered sending images remotely using RESTful services on ESP32\n" +
    "● Helped reduce prototype cost by 15$ per unit using alternative camera module",
  address: {city:"Boston", state: "Massachusetts"},
  startTime: {month: "May", year:"2017"},
  endTime: {month: "December", year:"2017"}

});
 // }
//}
  console.log(JSON.stringify(database));

