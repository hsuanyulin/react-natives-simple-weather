
function getMonthName(time){
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date(time);
    return monthNames[d.getMonth()];
}

function getDate(time){
    var d = new Date(time);
    return d.getDate();
}

function getHour(time){
    var d = new Date(time);
    return d.getHours();
}

export { getMonthName, getDate, getHour };
