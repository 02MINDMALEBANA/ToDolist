import Results from './displayResults';
import List from './addlist';
import Calendar from 'react-calendar';
import moment from 'moment'


function Home(props){
    return(

         //calender
        // const [dateState, setDateState] = useState(new Date())
        // const changeDate = (e) => {
        //     setDateState(e)
        // }
        <div className="container">
            <div className='App'>
                <List add={props.add} />

            </div>
            <div>

            </div>
             
             {/* <Calendar  value={dateState} onChange={changeDate}/> */}
            
             <Results list={props.list} />
             

             {/* <div className='dates'> */}
                 {/* <Calendar/> */}
                 {/* {moment(dateState).format('MMMM Do YYYY')} */}
             {/* </div> */}
           

        </div>
        
    )
}
export default Home;