var studenti=[
{ime: "Pero", prezime:"Perovski", prosek: 6.2},
{ime: "Janko", prezime:"Jankovski", prosek: 7.1},
{ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
{ime: "Petko", prezime:"Petkovski", prosek: 9.81},
{ime: "Ivana", prezime:"Ivanovska", prosek: 6},
{ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
{ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
];
function func(niza){
    var zbir=0;
    var najmal=10;
    var najgolem=0;
    for(var i=0;i<niza.length;i++){
        if(niza[i].prosek>najgolem){
            najgolem=niza[i].prosek; 
        }
        else if(niza[i].prosek<najmal){
            najmal=niza[i].prosek;
        }
        zbir+=niza[i].prosek;
    }

    var prosek=Math.round(zbir/niza.length*100)/100;
    console.log("Prosekot e: "+prosek);

    for(var j=0;j<niza.length;j++){
        if(niza[j].prosek==najgolem){
            console.log("Najgolem prosek ima: "+niza[j].ime+ " "+ niza[j].prezime);
        }
        else if(niza[j].prosek==najmal){
            console.log("Najmal prosek ima: "+ niza[j].ime+" "+ niza[j].prezime);
        }
        

    }
}
func(studenti);
