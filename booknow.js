document.getElementById("cycle_type").innerHTML = localStorage.getItem("type");
document.getElementById("height").innerHTML = localStorage.getItem("ht");
document.getElementById("price").innerHTML = localStorage.getItem("amt");
let j = localStorage.getItem("it");

if(j == 0)
    {document.getElementById("pic").src="pic1.png";}
if(j == 1)
    {document.getElementById("pic").src="pic2.png";}
if(j == 2)
    {document.getElementById("pic").src="pic3.png";}
if(j == 3)
    {document.getElementById("pic").src="pic4.png";}
if(j == 4)
    {document.getElementById("pic").src="pic5.png";}
if(j == 5)
    {document.getElementById("pic").src="pic6.png";}
if(j == 6)
    {document.getElementById("pic").src="pic7.png";}
if(j == 7)
    {document.getElementById("pic").src="pic8.png";}
if(j == 8)
    {document.getElementById("pic").src="pic9.png";}
if(j == 9)
    {document.getElementById("pic").src="pic10.png";}
if(j == 10)
    {document.getElementById("pic").src="pic11.png";}
if(j == 11)
    {document.getElementById("pic").src="pic12.png";}