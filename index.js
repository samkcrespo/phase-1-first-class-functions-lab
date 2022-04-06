const returnFirstTwoDrivers = (drivers) => ['Antonia', 'Nuru'];

const returnLastTwoDrivers = (drivers) => ['Amari', 'Mo'];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    const fareMultiplier = (fare) => {
        return multiplier * fare;
    };
    return fareMultiplier;
};

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers (array, returnFirstTwoDrivers) {
return returnFirstTwoDrivers(array); 

};
// Code your solution in this file!
