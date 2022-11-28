// Code your solution in this file!
const drivers=["Antonia", "Nuru","Amari","Mo"]
function returnFirstTwoDrivers(){
return drivers.slice(0,2)
}
function returnLastTwoDrivers(){
    return drivers.slice(2)
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return (function totalFare(fare) {
        return fare * multiplier
    })
}
createFareMultiplier(4)


function fareDoubler(createFareMultiplier){
    return createFareMultiplier*2
}
function fareTripler(createFareMultiplier){
    return createFareMultiplier*3
}
const selectDifferentDrivers = (array,fun)=>fun(array)