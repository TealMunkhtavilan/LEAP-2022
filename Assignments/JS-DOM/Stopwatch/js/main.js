let count = 1;
let second = 1;
let minute = 1;
function stopWatch()
{
    if(count < 10)
    {
        document.getElementById("millsecond").innerHTML = count = "0" + count;
    }
    else if (count == 10)
    {
        count = 0;
        document.getElementById("millsecond").innerHTML = count = "0" + count;
        if(second < 10)
        {
            document.getElementById("second").innerHTML = second = "0" + second;
        }
        else if (second < 60)
        {
            document.getElementById("second").innerHTML = second;
        }
        else if (second == 60)
        {
            second = 0;
            document.getElementById("second").innerHTML = "0" + second;
            if(minute < 10)
            {
                document.getElementById("minute").innerHTML = "0" + minute;
            }
            else if(minute < 60)
            {
                document.getElementById("minute").innerHTML = minute;
            }
            else if (minute == 60)
            {
                count = 0;
                second = 0;
                minute = 0;
            }
            minute++;
        }
        second++;
    }
    count++;
    console.log(count);
}

setInterval(stopWatch, 100);



