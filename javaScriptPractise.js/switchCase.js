function checkDayOfWeek(dayNumber){
    let day;

    switch (dayNumber) {
        case 0:
            day =  'Sunday' 
            break;
        case 1:
            day = 'Tuesday'
            break;
        case 2:
            day = 'Wednesday'
            break;
        case 3:
            day = 'Thursday'
            break;
        case 4:
            day = 'Friday'
            break;
        case 5:
            day = 'Saturday'
            break;
        case 6:
            day = 'Monday'
        default:
            console.log('Invalid input path')
            break;
    }

    return day;
}

console.log(checkDayOfWeek(2));
console.log(checkDayOfWeek(1000));

