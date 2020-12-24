import React, { Fragment,useState} from 'react';
import CalendarGeneratingComponent from './CalendarGeneratingComponent';

const CalenderOuterLayout = () => {
    const [previousNoOfToMonthDisplay,setpreviousNoOfToMonthDisplay] =useState(valueOfPreviousMonthDisplay);
    var valueOfPreviousMonthDisplay = 0;
    var limitOfPreviousMonthDisplay = 2;
    var currentDateObject = new Date();
    var variableDateObject = new Date(dateObjectValue)
    var dateObjectValue ;
    // var previousNoOfToMonthDisplay = 5;
    var nextNoOfToMonthDisplay = 2;
    var handlingLeftArrow=()=> {
        console.log("i am left arrow");
        if (previousNoOfToMonthDisplay <= limitOfPreviousMonthDisplay) {
            dateObjectValue = `${currentDateObject.getFullYear()}-${(currentDateObject.getMonth()+1)-previousNoOfToMonthDisplay}-${1}`;
            console.log("BEFORE",previousNoOfToMonthDisplay);
            setpreviousNoOfToMonthDisplay(previousNoOfToMonthDisplay += 1);
            console.log(dateObjectValue);
            console.log("AFTER",previousNoOfToMonthDisplay);
        }
    }

    var handlingRightArrow=()=> {
        console.log("i am right arrow");
    }

    return (
        <>
            <section>
                <article>
                    <div className="calendarDisplay">
                        {/* <CalendarGeneratingComponent/> */}
                    </div>
                    <div className="doubleArrowsButton">
                        <button className="leftArrow" onClick={handlingLeftArrow}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button className="righttArrow" onClick={handlingRightArrow}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default CalenderOuterLayout
