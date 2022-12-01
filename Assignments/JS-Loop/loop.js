// let count = 1;
// while (count <= 50)
// {
//     console.log(count);
//     count = count + 1;
// }

// for(let count = 0; count <= 25; count++)
// {
//     console.log(count);
// }

// let secret;
// do
// {
//     secret = prompt("Enter secret word", "");
//     console.log(secret);
// }while(secret != "sesame");

// Zandalshuulsan shariluud aguulsan pyramid hiih
// Ehleh utguud
let row = 10;
let countRows = 0;
let spaceEachRow = 9;
let countSpace = 0;
let countStars = 0;
let numberOfStarsEachRow = 1;
let star = "*";
let space = " ";
while(countRows < row)
{
    // Tuhain murund zainuud avna
    while(countSpace < spaceEachRow)
    {
        space += " ";
        countSpace++;
    }
    // Tuhain murund odnuudiig avna
    countStars = 1;
    while(countStars < numberOfStarsEachRow)
    {
        star += "*";
        countStars++;
    }
    numberOfStarsEachRow = numberOfStarsEachRow + 2;
    spaceEachRow--;
    console.log(space + star); //Zai bolon odnuudiig hevlene
    countSpace = 0;
    star = "*";
    space = " ";
    countRows = countRows + 1; //Muriig nemegduulne
}

// //5 udaa pass oruulah erhtei, zov oruulbal amjilttai, buruu bolvol alert.
// let attempts = 5;
// while(attempts > 0)
// {
//     let password = prompt("Enter passowrd: ", "");
//     if(password != "secret")
//     {
//         attempts = attempts - 1;
//         console.log("Wrong password!");
//         if(attempts == 0)
//         {
//             alert("Your attempt is over!");
//             break;
//         }
//     }
//     else
//     {
//         console.log("Logged in successful");
//         break;
//     }
// }
