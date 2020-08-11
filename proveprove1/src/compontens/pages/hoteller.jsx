import React, { useState, useEffect } from 'react';
import Billede from '../img/seljalandvoss-iceland.jpg';

const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/overlook/hotels/by_city/2', {
method:'GET',
redirect: 'follow',
})
            
.then((res) => res.json())
.then((data) => setApiData(data))
.catch((err) => console.log(err));        
}
});

console.log(apiData && apiData);

let hoteller =
apiData&&
    apiData.items.slice(0, 3).map((track) =>{
        console.log (track);
        return(
            <>
            
            </>
         );
    });

return <> {hoteller}</>;
};

export default function Home(){
    return(
        <section>
            <div className="hotelle">
            <p> HOTELLER OG DESTINATIONER</p>
                <img src={Billede} alt=""/>
                   
                <div></div>
            <Fetch/>
            </div>
        </section>
    );
}