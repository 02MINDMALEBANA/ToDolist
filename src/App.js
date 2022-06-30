import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import List from './inputs/addlist';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Results from './inputs/displayResults';
import moment from 'moment'
import Home from './inputs/home';
import Login from './inputs/login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { render } from '@testing-library/react';

function App() {


  const [tasks, setTasks]=useState([]);


  useEffect(()=>{
    console.log(tasks);
   },[tasks])

  const addTasks=((_task, _priority, _taskdate, _tasktime)=>{

      setTasks((task)=>[...task, {
      id:task.length, 
      task:_task,
      priority:_priority,
      taskdate:_taskdate,
      tasktime:_tasktime

    }])
    console.log(tasks)
  })
  render (); {
    return (

      <Router>
      <Switch>
        <Route exact path="/ToDolist" component={Login}></Route>
        <Route path="/home">
        <Home list={tasks} add={addTasks}/>
  
        </Route>
      </Switch>
      
    </Router>
  
    );

  }
 

}

export default App;
