import React from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
const App = () => {
      const cardsData = [
  {
    id: 2,
     backgroundImages: [
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"
    ],
    profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
    username: "emma_watson",
    userEmailId: "emma.w@email.com",
    description: "Travel addict 📸 | Coffee lover ☕ | Living slow",
    media: "860",
    followers: "212.4k",
    following: 342
  },
  {
    id: 3,
    backgroundImages: [
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"
    ],
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "mike_dev",
    userEmailId: "mike.dev@email.com",
    description: "Frontend dev • UI nerd • React & Tailwind",
    media: "420",
    followers: "98.1k",
    following: 120
  },
  {
    id: 4,
    backgroundImages: [
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7"
    ],
    profileImage: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "sara_visuals",
    userEmailId: "sara.v@email.com",
    description: "Brand designer & digital artist 🎨",
    media: "2.4k",
    followers: "331.7k",
    following: 812
  },
  {
    id: 5,
    backgroundImages: [
      "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
    ],
    profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
    username: "alex_music",
    userEmailId: "alex.music@email.com",
    description: "Indie producer 🎧 | Beats & late nights",
    media: "690",
    followers: "76.9k",
    following: 204
  },
  {
    id: 6,
    backgroundImages: [
      "https://images.unsplash.com/photo-1500534314209-a26db0f5a3d1",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7"
    ],
    profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
    username: "nina_fitness",
    userEmailId: "nina.fit@email.com",
    description: "Fitness coach 💪 Helping you stay consistent",
    media: "1.8k",
    followers: "540.3k",
    following: 429
  },
  {
    id: 7,
    backgroundImages: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    ],
    profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
    username: "james_travel",
    userEmailId: "james.t@email.com",
    description: "Solo traveler 🌍 | Mountains & oceans",
    media: "980",
    followers: "180.5k",
    following: 377
  },
];
  return (
    <div className='overflow-hidden' >
      <Navbar/>
      <div className="cardContainer flex flex-wrap p-3 gap-2.5">
        {cardsData.map((card)=>{
          return <Card key={card.id} data ={card} ></Card>
        })}
      </div>
    </div>
  )
}

export default App
