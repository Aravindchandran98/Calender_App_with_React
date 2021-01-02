import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CalendarGeneratingComponent = (props) => {
    // var a="2020-10-01";
    var [datesUniqueId,setdatesUniqueId] = useState("");
    var calendarGeneratingDate = props.calendarGeneratingDate;
    console.log(uuidv4());
    console.log(uuidv4());
    console.log(uuidv4());
    var date = new Date(calendarGeneratingDate);
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var lastDateInTheFirstWeek = week.length-monthStarts();
    var firstDateOfMonth = 1;
    var noOfDaysInMonth = CalculatingNoOfDaysInMonth(date.getMonth()); 
    console.log(noOfDaysInMonth);
    var spaces;
    var dateIncreament = lastDateInTheFirstWeek;
    var emptyArray = new Array(monthStarts());
    for (let index = 0; index < emptyArray.length; index++) {
        emptyArray[index] = " ";
    }
    var datesArray = new Array(lastDateInTheFirstWeek);
    for (let index = 0; index < datesArray.length; index++) {
        datesArray[index] = index + 1;
    }
    var lastFiveColumnArray = new Array(5);
    for (let index = 0; index < lastFiveColumnArray.length; index++) {
        lastFiveColumnArray[index] = " ";
    }
    

    function CalculatingNoOfDaysInMonth(index = index+1) {
            switch(month[index]){
                case "Jan": case "Mar": case "May": case "Jul":
                case "Aug": case "Oct": case "Dec":  return 31;
                
                case "Apr": case "Jun": case "Sep":
                case "Nov": return 30;
                      
                case "Feb" : return 28;
                      
                default: 
                console.log("Problem with Logic in month calculations",`${month[index]}`);  
                break;    
            }
    }

    // var [datesUniqueId,setdatesUniqueId] = useState(1);

    function monthStarts() {
        var date2 = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${1}`)
        spaces = date2.getDay();
        console.log(spaces);
        return spaces;
    }

    var handleButtonClick=(e) => {
        console.log(typeof e.target.id);
        console.log(e.target.innerHTML,"hi i am working");
        var tempVar = e.target.id;
        setdatesUniqueId(tempVar);
        console.log("i am updated",datesUniqueId);
        console.log(datesUniqueId);
    }

    function handleSelection(e){
        e.preventDefault();
        console.log("empty");
        console.log("i am form after submission",datesUniqueId);
        
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
                    <table>
                        <thead>
                            <tr>
                            {week.map((currentValue) => (
                                <th>{currentValue}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {emptyArray.map((currentValue) => (
                                <td id={uuidv4()}>{currentValue}</td>
                                ))}
                                {datesArray.map((currentValue) => (
                                <td><button id={uuidv4()} onClick={handleButtonClick}>{currentValue}</button></td>
                                ))}
                            </tr>
                            {lastFiveColumnArray.map(() => (
                                <tr>{week.map(() => (
                                        <td>{dateIncreament >=(noOfDaysInMonth) ? " "  :
                                        <button id={uuidv4()} onClick={handleButtonClick}>{(dateIncreament+=1)}</button>}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </section>
            <section>
                <article>
                    <div>
                        {datesUniqueId+"check"}
                        <form onSubmit={handleSelection}>
                        <select name="attendance" id="attendance">
                            <option value="selectAttendance">--SELECT ATTENDANCE--</option>
                            <option value="present">Present</option>
                            <option value="leave">Leave</option>
                            <option value="weekoff">W/O</option>
                            <option value="holiday">Holiday</option>
                        </select>
                        <input type="submit"/>
                        </form>
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default CalendarGeneratingComponent;
