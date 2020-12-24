import React, { Fragment } from 'react';

const CalendarGeneratingComponent = () => {
    var a="2020-10-01";
    var date = new Date(a);
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

    function monthStarts() {
        var date2 = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${1}`)
        spaces = date2.getDay();
        console.log(spaces);
        return spaces;
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
                                <td>{currentValue}</td>
                                ))}
                                {datesArray.map((currentValue) => (
                                <td>{currentValue}</td>
                                ))}
                            </tr>
                            {lastFiveColumnArray.map(() => (
                                <tr>{week.map(() => (
                                        <td>{dateIncreament >=(noOfDaysInMonth) ? " " : (dateIncreament+=1) }</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </section>
        </Fragment>
    )
}

export default CalendarGeneratingComponent;
