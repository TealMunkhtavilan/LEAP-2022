//input -iig huvisagchid avsan
let inputEl = document.getElementsByClassName("guess")[0];
let message = document.getElementsByClassName("message")[0];
let scoreEl = document.getElementsByClassName("score")[0];
//buttonii onclick uzegdel deer hiigdeh uildliin function
function buttonOnClick()
{
    let inputValue = Number(inputEl.value);
    let scoreValue = Number(scoreEl.innerHTML);
    if(isNaN(inputValue))//Too mon esehiig shalgana
    {
        message.innerHTML = "Тоо оруулна уу...";
    }
    else
    {
        if(inputValue < 10)// !!! random too daraa ni oruulana
        {
            message.innerHTML = "Бага байна...";
            scoreEl.innerHTML = scoreValue - 1;
        }
        else if(inputValue > 10)
        {
            message.innerHTML = "Их байна...";
            scoreEl.innerHTML = scoreValue - 1;
        }
        else
        {
            document.body.style.backgroundColor = "#60b347";
            message.innerHTML = "Зөв таалаа...";
        }
    }
    console.log(inputValue);
}