let hours = document.querySelector('.hr')
let minutes = document.querySelector('.min')
let seconds = document.querySelector('.sec')
let date = document.querySelector('.date')

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

setInterval(() => {
    let day = new Date()
    let h = day.getHours()
    let m = day.getMinutes()
    let s = day.getSeconds()
    let d = day.getDate()
    let mo = day.getMonth()
    let y = day.getFullYear()

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    date.innerHTML = `${d} ${months[mo]} ${y}`
})