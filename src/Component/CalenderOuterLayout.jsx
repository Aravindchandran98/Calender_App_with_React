import React, {useState} from 'react';
import CalendarGeneratingComponent from './CalendarGeneratingComponent';

const CalenderOuterLayout = () => {
    // var [previousNoOfToMonthDisplay,setpreviousNoOfToMonthDisplay] =useState(0);
    var valueOfPreviousMonthDisplay = 0;
    var limitOfPreviousMonthDisplay = 1;
    // var previousNoOfMonthDisplay = 0;
    var [previousNoOfMonthDisplay,setPreviousNoOfToMonthDisplay] =useState(0);
    var limitOfNextMonthDisplay = 1;
    var [nextNoOfMonthDisplay,setNextNoOfMonthDisplay] = useState(0);
    var initialDateObject = new Date();
    // var currentDateObjectValue = `${initialDateObject.getFullYear()}-${initialDateObject.getMonth()+1}-${1}`;
    var [currentDateObjectValue,setCurrentDateObjectValue] = useState(`${initialDateObject.getFullYear()}-${initialDateObject.getMonth()+1}-${1}`);
    var currentDateObject = new Date(currentDateObjectValue);
    var variableDateObjectValue ;
    // var variableDateObject = new Date(variableDateObjectValue);
    console.log(previousNoOfMonthDisplay);
    var nextNoOfToMonthDisplay = 2;    
    var dateObjectValue;
    var handlingLeftArrow=()=> {
        // console.log(previousNoOfToMonthDisplay);
        console.log("i am left arrow");
        // var decreasingLimitedYearVariableInleftArrow = initialDateObject.getFullYear();
        var decreasingLimitedMonthVariableInleftArrow = initialDateObject.getMonth()+1;
        if (decreasingLimitedMonthVariableInleftArrow === 1) {
            decreasingLimitedMonthVariableInleftArrow = 12; 
        }
        if ((
            // (initialDateObject.getMonth()+1)-limitOfPreviousMonthDisplay
            decreasingLimitedMonthVariableInleftArrow-limitOfPreviousMonthDisplay
            )===(currentDateObject.getMonth()+1)) {
            console.log("you are not have access to view the previous month");
        }
        // if (previousNoOfMonthDisplay < limitOfPreviousMonthDisplay) {
            else{
            console.log("BEFORE",previousNoOfMonthDisplay);
            console.log("currentDateObjectValue",currentDateObjectValue);
            setPreviousNoOfToMonthDisplay(previousNoOfMonthDisplay += 1);
            // previousNoOfMonthDisplay +=1;
            var decreasingYearVariableInleftArrow = currentDateObject.getFullYear();
            var decreasingMonthVariableInleftArrow = currentDateObject.getMonth()+1;
            if (decreasingMonthVariableInleftArrow === 1) {
                decreasingMonthVariableInleftArrow = 12; 
                decreasingYearVariableInleftArrow -= 1;
                dateObjectValue = `${decreasingYearVariableInleftArrow}-${(decreasingMonthVariableInleftArrow)}-${1}`;
            }else{
                dateObjectValue = `${decreasingYearVariableInleftArrow}-${(decreasingMonthVariableInleftArrow)-1}-${1}`;
            }
            // currentDateObjectValue = dateObjectValue;
            // var temp  = currentDateObject.getFullYear();
            // console.log(typeof temp);
            setCurrentDateObjectValue(dateObjectValue);
            console.log("dateobjectvalue",dateObjectValue);
            console.log("currentDateObjectValue",currentDateObjectValue);
            console.log("AFTER",previousNoOfMonthDisplay);
        }
        // console.log("currentDateObjectValue",currentDateObjectValue);
    }
    
    // console.log(variableDateObject.getFullYear());
    var handlingRightArrow=()=> {
        console.log("i am right arrow");
        // console.log("variablesateobject",variableDateObject);
        var increasingLimitedMonthVariableInleftArrow = initialDateObject.getMonth()+1;
        if (increasingLimitedMonthVariableInleftArrow === 12) {
            increasingLimitedMonthVariableInleftArrow = 1; 
        }
        if (((
            // (initialDateObject.getMonth()+1)+limitOfNextMonthDisplay
            (increasingLimitedMonthVariableInleftArrow+limitOfNextMonthDisplay)
                 )===(currentDateObject.getMonth()+1))) {
            console.log("you are not have access to view the previous month");
        }
        // if (nextNoOfMonthDisplay < limitOfNextMonthDisplay) {
            else{
            console.log("BEFORE",nextNoOfMonthDisplay);
            console.log("currentDateObjectValue",currentDateObjectValue);
            setNextNoOfMonthDisplay(nextNoOfMonthDisplay += 1);
            // nextNoOfMonthDisplay +=1;            
            var increasingYearVariableInRightArrow = currentDateObject.getFullYear();
            var increasingMonthVariableInRightArrow = currentDateObject.getMonth()+1;
            if (increasingMonthVariableInRightArrow === 12) {  
                increasingMonthVariableInRightArrow = 1;
                increasingYearVariableInRightArrow += 1;               
                variableDateObjectValue = `${increasingYearVariableInRightArrow}-${(increasingMonthVariableInRightArrow)}-${1}`;    
            } else {
                variableDateObjectValue = `${increasingYearVariableInRightArrow}-${(increasingMonthVariableInRightArrow)+1}-${1}`;
            }
            // currentDateObjectValue = variableDateObjectValue;
            setCurrentDateObjectValue(variableDateObjectValue);
            console.log("variableDateObjectValue",variableDateObjectValue);
            console.log("currentDateObjectValue",currentDateObjectValue);
            console.log("AFTER",nextNoOfMonthDisplay);
        }
        // console.log("currentDateObjectValue",currentDateObjectValue);
    }
    
    return (
        <>
            <section>
                <article>                    
                    <div className="doubleArrowsButton">
                        <button className="leftArrow" onClick={handlingLeftArrow}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <div className="calendarDisplay">
                         <CalendarGeneratingComponent calendarGeneratingDate={currentDateObjectValue}/> 
                        </div>
                        <button className="rightArrow" onClick={handlingRightArrow}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default CalenderOuterLayout;
