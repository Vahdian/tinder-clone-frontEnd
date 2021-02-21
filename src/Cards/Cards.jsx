import { SwipeableDrawer } from '@material-ui/core'
import React, {useState}from 'react'
import TinderCard from 'react-tinder-card'
import './Cards.scss'

export function Cards() {
    const[people, setPeople] = useState([
        {name: "RiRi",
    url: "https://static2.elcorreo.com/www/multimedia/201912/03/media/cortadas/rihanna-buena-k31H-U90864082173AVD-1248x770@RC.jpg" },
    {name:"Whitney",
url: "https://lh3.googleusercontent.com/proxy/OWAUKhS-L8LYA7X64fVQalXVvECtVdc6ejAFCZD_F4moMdL2JKoVBsKcecGxPw-AwPfRb0Y5ERB-6bJ1YP7beDa4U9D35xrLKWqxuenNoCGTDDuT6XwLykhID3XiFRqDn4B3m1Zi543oM67Z4EYt"}
    ])

    const swiped = (direction, nameToDelete)=> {
        console.log("removing:" + nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame = (name) =>{
        console.log(name + "left the screen!")
    }
    
    return (
        <div className="cards">
        <div className="cards__cardContainer">
        {people.map((person)=>(
               <TinderCard
                   className="swipe"
                   key={person.name}
                   preventSwipe={["up","down"]}
                   onSwipe={(dir) => swiped(dir, person.name)}
                   onCardLeftScreen={()=> outOfFrame(person.name)}
                   >
                   <div
                       style={{ backgroundImage: `url(${person.url})`}}
                       className="card"
                       >
                        <h3>{person.name}</h3>
                   </div>
               </TinderCard>
            )
            )}
        </div>

            
        </div>
    )
}
