var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended:true
}))

mongoose.connect('mongodb://localhost:27017/databases')
var db=mongoose.connection
db.on('err',()=>console.log("Error in connection to database"));
db.once('open',()=>console.log("connected to our database"));

app.post("/registration",(req,res)=>{
  var selectedhospitalname=req.body.selectedhospitalname
  var patientid=req.body.patientid
  var Name=req.body.Name
  var Adress=req.body.Adress
  var Phoneno=req.body.Phoneno
  var email=req.body.email
  var selectedformbloodgroup=req.body.selectedformbloodgroup
  var textinputarea=req.body.textinputarea
  var data={
    "selectedhospitalname":selectedhospitalname,
    "patientid":patientid,
    "Name":Name,
    "Adress":Adress,
    "Phoneno":Phoneno,
    "email":email,
    "selectedformbloodgroup":selectedformbloodgroup,
    " textinputarea":textinputarea
  }
  db.collection('users').insertOne(data,(err,collection)=>{
    if(err){
      throw err;
    }
    console.log("record inserted succesfully")
})

return res.redirect('registration_succes.html');
})

app.get("/",(req,res)=>{
  res.set({
    "Allo-acces-Allow-Origin":'*'
  })
  return res.redirect(index.html)
}).listen(5000);

console.log("listening on port 5000")