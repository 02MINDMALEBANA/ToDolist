
import React from "react";

import '../css/displayResults.css'
import moment from 'moment'
import Calendar from 'react-calendar'


function Results(props){



    return(

        <div>
          
            {props.list.map((task)=>(
                  <div key={task.id}>
                    <div  className="main-div">
                    <h1 style={{paddingLeft:'150px',paddingBottom:'40px'}}>Task</h1>
                    <h1 className="time">Time</h1>
                    <h1 className="date">Date</h1>
                    <div className="task-div">
                        <div><h4>{task.task}</h4></div>
                        <div><h4>{task.tasktime}</h4></div>
                        <div><h4>{task.taskdate}</h4></div>
                        <div className={task.priority}></div>
                    </div>


                    </div>
                  </div>


            ))}
            {/* <div className="main-div">
                <h1>tasks</h1>
               <div className="task-div">
                 <div>sfdsikfskj</div>
                 <div>sfdsikfskj</div>
                 <div></div>
               </div>
               
            </div>  */}
        </div>


        
    );
}
export default Results;