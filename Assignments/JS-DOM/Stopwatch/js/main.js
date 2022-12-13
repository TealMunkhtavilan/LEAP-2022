let tens = 0, seconds = 0, minutes = 0;

let getEl = document.querySelector('h1');
setInterval(stopWatch, 100);
function stopWatch()
{
    let stopwatch = '';
    if(tens < 10)
    {
        stopwatch += "0"+ tens;
        tens++;
    }
    if(tens > 10)
    {
        stopwatch = seconds + 1;
        stopwatch += ":";
        tens = 0;
    }
    stopwatch += tens;
    if(seconds < 10)
    {
        stopwatch += "0"+ seconds;
        
    }
    else if(seconds < 60)
    {
        stopwatch = seconds + 1;
        stopwatch += ":";
    }
    else
    {
        stopwatch = ":" + minutes + 1;
        seconds = 0;
    }
    stopwatch += minutes;
    getEl.innerHTML = stopwatch;
}

