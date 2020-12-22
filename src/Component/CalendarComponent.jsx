import React, { Fragment,useState} from 'react';

const CalendarComponent = () => {
    var [date,setDate] = useState(new Date());
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var noOfDaysInMonth ;
    var monthStarts = ()=>{
        // for (let index = 0; index < month.length; index++) {
        //     switch(month[index]){
        //         case "Jan","Mar","May","Jul","Aug","Oct","Dec" : 
        //               noOfDaysInMonth = 31;
        //               break;
                
        //         case "Apr","May","Jun","Sep","Nov" : 
        //               noOfDaysInMonth = 30;
        //               break;
                      
        //         case "Feb" :
        //               noOfDaysInMonth = 28;
        //               break;
                      
        //         default: 
        //         console.log("Problem with Logic in month calculations");  
        //         break;    
        //     }
        // }
        var date2 = new Date(`${date.getFullYear()}-${date.getMonth()}-1`)
        console.log(date2.getDay());
    }
    return (
        <Fragment>
            <section>
                <article>
                    <header id="calendarHeader">
                        <div>
                           {month[date.getMonth()]}
                        </div>
                        <div>
                            {date.getFullYear()}
                        </div>
                    </header>
                    <body>
                        
                    </body>
                    {/* {date.toLocaleTimeString()}
                    {date.toLocaleString()}
                    {date.getMonth()+1} */}
                    <table>
                        <tr>
                            <th>{week[0]}</th>
                            <th>{week[1]}</th>
                            <th>{week[2]}</th>
                            <th>{week[3]}</th>
                            <th>{week[4]}</th>
                            <th>{week[5]}</th>
                            <th>{week[6]}</th>
                        </tr>
                        <tr>
                            <td>{}</td>
                        </tr>
                    </table>
                </article>
            </section>
        </Fragment>
    )
}

export default CalendarComponent;
