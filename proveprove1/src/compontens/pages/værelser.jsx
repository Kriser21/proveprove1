import React, { useState, useEffect } from 'react';
import Billede from '../img/overlook-aalborg-oest.jpg';

const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/overlook/rooms/by_hotel/', {
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
    apiData.items.slice(0, 3).map((track) =>{
        console.log (track);
        return(
            <>
            hey
            </>
         );
    });

return <> {værelser}</>;
};

export default function Home(){
    return(
        <section>
            <div className="Værelse">
            <p> Værelse</p>
                <img src={Billede} alt=""/>
                   
                <div> Se vores værelser</div>
            <Fetch/>
            </div>
        </section>
    );
}