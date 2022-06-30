import React,{useState} from "react";
import moment from 'moment'
import '../css/addlist.css'
import Calendar from 'react-calendar'
import pic from './list.png'


function List(props){
    const [task, setTask]=useState('');
    const [priority, setPriority]=useState('');
    const [dateState] = useState(new Date());
    const [taskdate, setDate]=useState('');
    const [tasktime, setTime]=useState('');
  

    const add=(()=>{
        console.log(task);
        console.log(priority);
        // console.log(dateState);
        console.log(taskdate);
        console.log(tasktime);

        props.add(task, priority, taskdate, tasktime);
        
    })
  

    return(
        <div className="content">
            <h1 style={{marginBottom:'30px'}}>Todo List</h1>
            <h5>Today's date:  {moment(dateState).format('MMMM Do YYYY')}</h5><br></br><br></br>
            <h4 id="h4">Task Name :  <input id="name" placeholder="enter your task" onChange={(e)=>setTask(e.target.value)}></input></h4><br></br><br></br>
            <h5>Select task date: <input id="name" type="date" onChange={(e)=>setDate(e.target.value)}/></h5><br></br>
            <h5>Select task time: <input id="name" type="time" onChange={(e)=>setTime(e.target.value)}/></h5><br></br>
            <img src={pic}></img>
    
            <h4 id="h4">Task Priority :  <select id="priority" onChange={(e)=>setPriority(e.target.value)}>
                <option>Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select></h4><br></br>


            <button id="btn" onClick={add}>Add task</button><br></br>
            <div className="other">
                <h4>PRIORITY COLORS</h4>
                <h4 style={{paddingRight:'30px'}}>HIGH<button id="btn1"></button></h4><br></br>
                <h4>MEDIUM<button id="btn2"></button></h4><br></br>
                <h4>LOW<button id="btn3"></button></h4><br></br>
                    
          
            </div>

        </div>
    );
}
export default List;
