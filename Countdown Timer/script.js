const endDate = new Date("24 Jul, 2025 12:00:00").getTime();
const startDate = new Date().getTime();


let x = setInterval(function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //cacl days, min, hrs, secs
    //1 day = 24 * 60 * 60 * 100 ms

    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinInMillis = (60 * 1000);
    const oneSecondInMillis = (1000)

    const days = Math.floor(distancePending / (oneDayInMillis));
    const hrs = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));
    const min = Math.floor((distancePending%(oneHourInMillis)/(oneMinInMillis)));
    const secs = Math.floor((distancePending%(oneMinInMillis))/(oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("second").innerHTML = secs;

    //calacilate width percentage for prograss bar
    const totalDistance = endDate - startDate;

    const percentageDistance = (distanceCovered / totalDistance)*100;

    //set width for progras bar
    document.getElementById("progres-bar").style.width = percentageDistance + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("Countdown").innerHTML = "EXPIRED";
        document.getElementById("progres-bar").style.width = "100%";
    }


}, 1000);