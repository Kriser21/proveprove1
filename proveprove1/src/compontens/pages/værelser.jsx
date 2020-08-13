import React, { useState, useEffect } from 'react';
import Billede from '../img/overlook-aalborg-oest.jpg';

const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/overlook/rooms/by_hotel/1', {
method:'GET',
redirect: 'follow',
})
            
.then((res) => res.json())
.then((data) => setApiData(data))
.catch((err) => console.log(err));        
}
});

console.log(apiData && apiData);

let værelser =
apiData&&
    apiData.items.slice(0, 7).map((rooms) =>{
    
        return(
          <>
            <img className="Valget" src={rooms.images[0].image} alt=""/>
            <p>{rooms.room_title}</p>
           
          
          </>
           
         );
    });

return ( 
<div className="Valg">
    <h4>Værelsestyper</h4> {værelser} </div>
);
};

export default function Home(){
    return(
        <section>

            <img className="Billeder" src={Billede} alt=""/>
            
                 <div className="Værelse">

                <span className="ValgText"> 
                <h5>Hotel Overlokke > Se vores udvalgt af værelser</h5> <br/> <br/>
                <h2> Se vores værelser</h2> <br/><br/>
                Hos Overlook handler den gode hoteloplevelse helt enkelt om at give dig en bedre service, <br/>
                en bedre søvn og en bedre start på dagen, så du tager videre med en god fornemmelse og får lyst til at komme tilbage. <br/> <br/>
                Når du træder indenfor på Overlooks hoteller, oplever du det med det samme. <br/>
                Det er her, store øjeblikke deles med venner og familie, og nye relationer opstår. <br/>
                Hvor fremtiden formes, vigtige møder finder sted, og en god middag måske fører til kærlighed. <br/> <br/>
                Her sker altid noget. <br/>
                Med 31 hoteller på 29 destinationer i syv lande har alle vores hoteller deres egen unikke personlighed og atmosfære. <br/>
                Men nogle ting er en selvfølge, når du vælger at bo hos os. <br/>
                Du vil opleve værelser af god komfort og høj kvalitet når du bor på et af vores hoteller. <br/> <br/>
                Vi har nemlig hentet hjælp fra de bedste eksperter på området. <br/>
                Overlook har et tæt samarbejde med den legendariske hotelkonge, <br/> <br/>
                Bjarne Rother, som anses for at være en af verdens mest erfarne indenfor værelsesudlejning omkring Østersøen. <br/>
                Og han har flere gange givet Overlook’s hoteller mere end fem stjerner. <br/>
                Du kan se de forskellige værelsestyper ved at klikke dig rundt i menuen til højre.</span>
            
            <Fetch/>
            
            </div>
         

        </section>
    );
}