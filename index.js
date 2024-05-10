//PORT
//Entry point for our server
//Gateway through which external services can enter your server
//Database connection
//Authentication
//Security Services


//HEADERS - additional coded interval
//A ------> // B



//HTTPS STATUS coded
//Success - 200
//failure - 404 - Not avaiable
//401 - not authorised
//403 - auth but forbidden to access
//Server error - 500

//JSON  its a shortened format to exchage inf between two servers

//REST API

//RE -> REpresentational
//S -> State
//T -> Transfer

//Representing data by sharing after processing

const express = require("express")

//INITIALISE

const noddy = express();

noddy.use(express.json());

//HTTPS METHODS -> GET POST PUT DELETE
//GET -> To retrive any data
//POST -> To send a data to the server
//PUT -> To update an existing data
//DELETE -> To delete an existing data

noddy.get("/",(request,response) => {
  return response.json({data: "Hello Guys!!"});
});

noddy.get("/b/:id",(req,res) => {
  const students =[
    {
    id: 1,
    name: "student1"
  },
  {
  id: 2,
  name: "student2"
},
{
id: 3,
name: "student3"
},
{
id: 4,
name: "student4"
},
{
id: 5,
name: "student5"
},
]

const studentID = req.params.id;
console.log(studentID);
const getStudent = students.filter((student) => student.id === parseInt(studentID));
return res.json({data: getStudent});
})

noddy.listen(3000, () => {
  console.log("server on port 3000 is up and running");
});
