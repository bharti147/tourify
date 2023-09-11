import React from 'react';
import '../styles/Home.scss';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
function Home() {
  return (
    <div className='home'>
   <main>
   <div>   
    <h1>Your Personal Travel Companion</h1>
    <p>"Welcome to Your Ultimate Travel Companion! 🌍✈️ Plan, explore, and embark on unforgettable adventures with ease. Discover new destinations, create personalized itineraries, and turn your travel dreams into reality. Start your journey today!"</p>
</div>
    <img src={pic1}/>

   </main>
   <div >
   <img src={pic2}/>
   <button>Explore destinations</button>

   </div>
    </div>
  )
}

export default Home
