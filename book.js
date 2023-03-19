let productButton = document.querySelectorAll(".productButton");
//const payment = document.querySelector(".payment");
//const close = document.querySelector(".close");

document.getElementById("profile").innerHTML = localStorage.getItem("email");
for (let i = 0; i < productButton.length; i++) {
productButton[i].addEventListener("click", () => {
window.location.href='booknow.html';
let j = i;
if(j == 0)
{
    localStorage.setItem("type", "Street Racer");
    localStorage.setItem("ht", " 5'4 to 5'10 ft ");
    localStorage.setItem("amt", " 50 ");
    localStorage.setItem("it", "0");
    localStorage.setItem("iduser", '0IqMsfZAokDws2kmA9Dm');

}

if(j == 1)
{
    localStorage.setItem("type", "Atlas Mettle");
    localStorage.setItem("ht", " 4'8 to 5'2 ft ");
    localStorage.setItem("amt", " 70 ");
    localStorage.setItem("it", "1");
    localStorage.setItem("iduser", '9HZ3fQi5aqoZT0cX6wLH');
}

if(j == 2)
{
    localStorage.setItem("type", "Kross Eco");
    localStorage.setItem("ht", " 5'3 to 5'8 ft ");
    localStorage.setItem("amt", " 70 ");
    localStorage.setItem("it", "2");
    localStorage.setItem("iduser", 'Nz6DWzEjg5PCFotEKATl');
}

if(j == 3)
{
    localStorage.setItem("type", "Hercules Brut");
    localStorage.setItem("ht", " 4'10 to 5'2 ft ");
    localStorage.setItem("amt", " 70 ");
    localStorage.setItem("it", "3");
    localStorage.setItem("iduser", 'OSTatB62PNqYrARavoR1');
}

if(j == 4)
{
    localStorage.setItem("type", "Hercules Roadeo Hank");
    localStorage.setItem("ht", " 4'10 to 5'4 ft ");
    localStorage.setItem("amt", " 70 ");
    localStorage.setItem("it", "4");
    localStorage.setItem("iduser", 'P2FRLLo3bOVCt9P1XUTf');
}

if(j == 5)
{
    localStorage.setItem("type", "Hero Sprint Tomboy");
    localStorage.setItem("ht", " 5'3 to 5'6 ft ");
    localStorage.setItem("amt", " 70 ");
    localStorage.setItem("it", "5");
    localStorage.setItem("iduser", 'TmDydf5KWEfAzLkhqRvM');
}

if(j == 6)
{
    localStorage.setItem("type", "Xtal Muse");
    localStorage.setItem("ht", " 5'2 to 5'6 ft ");
    localStorage.setItem("amt", " 70 ");
    localStorage.setItem("it", "6");
    localStorage.setItem("iduser", 'TvuVdO22Sn9txQaXPi4d');
}

if(j == 7)
{
    localStorage.setItem("type", "Hercules FX 100");
    localStorage.setItem("ht", "  5'3 to 5'8 ft ");
    localStorage.setItem("amt", " 70 ");
    localStorage.setItem("it", "7");
    localStorage.setItem("iduser", 'VamYz94bjkWMMF4OS9qB');
}

if(j == 8)
{
    localStorage.setItem("type", "Hercules Rocky");
    localStorage.setItem("ht", "  4'10 to 5'3 ft ");
    localStorage.setItem("amt", " 70 ");
    localStorage.setItem("it", "8");
    localStorage.setItem("iduser", 'WtFqwW2kAvjF13Y4UoGN');
}

if(j == 9)
{
    localStorage.setItem("type", "Btwin My Bike");
    localStorage.setItem("ht", "  5'3 to 5'9 ft ");
    localStorage.setItem("amt", " 90 ");
    localStorage.setItem("it", "9");
    localStorage.setItem("iduser", 'cOlFiCUMqFJ5DMWwkoMR');
}

if(j == 10)
{
    localStorage.setItem("type", "Hero Ranger");
    localStorage.setItem("ht", " 5'3 to 5'9 ft ");
    localStorage.setItem("amt", " 90 ");
    localStorage.setItem("it", "10");
    localStorage.setItem("iduser", 'eSKD0efpUCXdMiMoSqiv');
}

if(j == 11)
{
    localStorage.setItem("type", "Btwin Riverside 50");
    localStorage.setItem("ht", " 5'4 to 6' ft ");
    localStorage.setItem("amt", " 90 ");
    localStorage.setItem("it", "11");
    localStorage.setItem("iduser", 'rYcscfqF8VP58JmZkPAw');
}



});
}

//close.addEventListener("click", () => {
//payment.style.display = "none";
//});

//payButton.addEventListener("click", () => {
//payment.style.display = "none";
//});



