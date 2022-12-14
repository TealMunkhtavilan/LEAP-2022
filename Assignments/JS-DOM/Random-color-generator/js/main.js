let bodyEl = document.getElementsByTagName("body")[0];
let buttonEl = document.getElementsByTagName("button")[0];
function getRandomColor()
{
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    if(randomNumber == 1)
    {
        bodyEl.style.background = "green";
        buttonEl.style.color = "red";
    }
    if(randomNumber == 2)
    {
        bodyEl.style.background = "orange";
        buttonEl.style.color = "green";
    }
    if(randomNumber == 3)
    {
        bodyEl.style.background = "red";
        buttonEl.style.color = "blue";
    }
    if(randomNumber == 4)
    {
        bodyEl.style.background = "purple";
        buttonEl.style.color = "yellow";
    }
    if(randomNumber == 5)
    {
        bodyEl.style.background = "cyan";
        buttonEl.style.color = "brown";
    }
    if(randomNumber == 6)
    {
        bodyEl.style.background = "black";
        buttonEl.style.color = "violet";
    }
    if(randomNumber == 7)
    {
        bodyEl.style.background = "yellow";
        buttonEl.style.color = "aqua";
    }
    if(randomNumber == 8)
    {
        bodyEl.style.background = "brown";
        buttonEl.style.color = "azure";
    }
    console.log(randomNumber);
}
getRandomColor();