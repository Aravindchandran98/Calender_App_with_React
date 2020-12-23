import React, { Fragment,useState} from 'react';

const CalendarComponent = () => {
    const [date,setDate] = useState(new Date());
    // const [emptySpace,setEmptySpace] = useState(" ");
    // var [dateIncreament,setDateIncreament] = useState(firstDateOfMonth);
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var lastDateInTheFirstWeek = week.length-monthStarts(); 
    var emptyArray = new Array(monthStarts());
    for (let index = 0; index < emptyArray.length; index++) {
        emptyArray[index] = "hi";
    }
    var datesArray = new Array(lastDateInTheFirstWeek);
    for (let index = 0; index < datesArray.length; index++) {
        datesArray[index] = index + 1;
    }
    var lastFiveColumnArray = new Array(5);
    for (let index = 0; index < lastFiveColumnArray.length; index++) {
        lastFiveColumnArray[index] = " ";
    }
    var noOfDaysInMonth ; var spaces; 
    var firstDateOfMonth = 1;
    var dateIncreament = lastDateInTheFirstWeek;
    function monthStarts() {
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

        var date2 = new Date(`${date.getFullYear()}-${date.getMonth()+1}-1`)
        spaces = date2.getDay();
        console.log(spaces);
        return spaces;
    }
    // var a = monthStarts();
    // function simplefunction() {
    //     // a = a-1; return " "
    //     console.log("hi");
    //     setEmptySpace(5);
    //     console.log(emptySpace);
    // }

    function fillingSpace(){
        // console.log(emptySpace-1);
        // let a = emptySpace-1;
        // setEmptySpace(a);
        // return "N"; 
        // () => setEmptySpace(emptySpace-1);
        
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
                    
                    {/* {date.toLocaleTimeString()}
                    {date.toLocaleString()}
                    {date.getMonth()+1} */}
                    <table>
                        <thead>
                            <tr>
                            {week.map((currentValue,index,arr) => (
                                <th>{currentValue}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* {/* <td>{fillingSpaces()}</td> */}
                                {/* <td>{simplefunction()}</td>  
                                <td>{simplefunction()}</td>
                                <td>{simplefunction()}</td> */}
                                {/* <td>{emptySpace}</td>
                                <td>1</td>
                                <td></td> */}
                                {emptyArray.map((currentValue,index,arr) => (
                                <td>{currentValue}</td>
                                ))}
                                {datesArray.map((currentValue,index,arr) => (
                                <td>{currentValue}</td>
                                ))}
                            </tr>
                            {lastFiveColumnArray
                            .map((currentValue,index,arr) => (
                                <tr>{week
                                    // .filter((currentValue,index,arr) => (
                                    // dateIncreament <= 31 
                                    // && dateIncreament >=6  
                                    // ))
                                    .map((currentValue,index,arr) => (
                                        <td>{dateIncreament += 1 && dateIncreament <=31 }</td>
                                        ))
                                        // .filter((currentValue,index,arr) => (
                                        //     dateIncreament <= 35 && dateIncreament >=6  
                                        //     ))
                                            }</tr>
                                ))
                                // .filter((currentValue,index,arr) => (
                                //     dateIncreament <= 31 
                                //     // && dateIncreament >=6  
                                //     ))
                            }
                        </tbody>
                    </table>
                </article>
            </section>
        </Fragment>
    )
}

export default CalendarComponent;
