import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import StudentForm from './components/StudentForm'
function App() {
  const [sid,setId] = useState(0)
  const [student,setStudent] = useState({Name : "",Email : "",Course:"",Age:""});
  const [error,setError]=useState({name:"",email:"",course:"",age:""})
  const [studentList,setStudentList] = useState(()=>{
    const saved = localStorage.getItem("studentList");
    return saved?JSON.parse(saved):[];
});

  useEffect(()=>{localStorage.setItem("studentList",JSON.stringify(studentList))},[studentList]);
  const saved = (e) => {
    e.preventDefault();
    
    let err = {}
    let flag = true
    if(student.Name.trim() === ""){
      err.name="Please Enter name"
      flag=false
    }else{
      err.name=""
    }
    if(student.Email.trim() === ""){
      err.email="Pleasse Enter e-mail"
      flag=false
    }else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.Email))){
      err.email="In-valid Email format"
      flag=false
    }else{
      err.email = ""
    }
    if(student.Course === ""){
      err.course = "Please Enter course name"
      flag=false
    }else{
      err.course=""
    }
    if(student.Age === ""){
      err.age = "Please Enter age"
      flag=false
    }else if(isNaN(student.Age)){
      err.age="Age must be a number"
      flag=false
    }else if(Number(student.Age) < 1 || Number(student.Age) > 105){
      err.age="In-valid Age"
      flag=false
    }else{
      err.age=""
    }
    setError(err)
  // setError(err);

if (!flag) {
  return;
}
const newid = sid +1;
    setId(newid)
    // console.log(studentList);
    setStudentList([...studentList,{...student,id:sid}])
    setStudent({Name:"",Email:"",Course:"",Age:""})
  }

  return (
    <>
    <Navbar/>
    <StudentForm s={student} setStudent={setStudent} saved={saved} err={error}/>
    {studentList.map((s)=>(<p key={s.id}>{s.Name}</p>))}
    </>
  )
}

export default App
