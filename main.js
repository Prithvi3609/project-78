var Missingnames=["",
"RajeshTandon",
"UshaTandon",
"MayankTandon",
"KavitaTandon",
"AnupamTandon",
"KanchanTandon",
"TanishkaTandon",
"JaiRajTandon"];
var  images=["familybook.jpg",
    "grandfather.jpg",
"grandmother.jpg",
"father.jpg",
"mom.jpg",
"uncle2.jpg",
"aunt1.jpg",
"sister.jpg",
"brother.jpg"];
var i=1;
function nextslide(){
    document.getElementById("album").src=images[i];
    document.getElementById("names").innerHTML=Missingnames[i];
    i++;
    } 
    