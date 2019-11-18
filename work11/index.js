setCalendar(new Date().getFullYear())

function setCalendar(year){
    year = parseInt(year)
    let curyear = document.getElementById("curyear")
    curyear.innerHTML = year
    let preyear = document.getElementById("preyear")
    preyear.innerHTML = "<<"+(year-1)
    preyear.dataset.year = year - 1
    let nextyear = document.getElementById("nextyear")
    nextyear.innerHTML = (year+1)+">>"
    nextyear.dataset.year = year + 1
    document.getElementById("cal").innerHTML = calendar(year)
}
