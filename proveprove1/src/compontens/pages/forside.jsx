import React, { useState, useEffect } from 'react';
import Billede from '../img/frankfurt-skyline-germany.jpg';


const Fetch = () =>{
const [apiData, setApiData]= useState (null);
useEffect(() => {
if (!apiData){


fetch('https://api.mediehuset.net/overlook/', {
method:'GET',
redirect: 'follow',
})
            
.then((res) => res.json())
.then((data) => setApiData(data))
.catch((err) => console.log(err));        
}
});

console.log(apiData && apiData);

let home =
apiData&&
    apiData.news.items.slice(0, 3).map((news) =>{
        console.log (news);
        return(
            <>
            <img src={news.image} alt="" />
            <span>{news.title}</span>
            <span>{news.teaser}</span>
            </>
         );
    });

    let værelser =
    apiData&&
       apiData && apiData.countries.items[0].cities.items[1].hotels.items[0].rooms.items.slice(0, 3).map((rooms) =>{
            console.log (rooms);
            return(
                <>
                <img src={rooms.images[0].image} alt="" />
                <span>{rooms.rooms_title}</span>
            <span>{rooms.description}</span>
                </>
             );
        });


return <div> <p>{home}</p> <p>{værelser}</p></div>;
};
export default function Home(){
    return(
        <section>
            <div className="forside">
                <p>VELKOMMEN TIL HOTEL OVERLOKKE ONLINE </p>
                <img src={Billede} alt=""/>

                <div>
                    <h1>NYDHEDER</h1>
                </div>
                </div> 

            <Fetch/>
        </section>
    );
}