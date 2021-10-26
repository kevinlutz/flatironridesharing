import React from 'react';
import RideCard from './RideCard';
import Filter from './Filter';

function RideContainer() {
    return (
       <div>
           <h2>Your Rides</h2>
           <Filter/>
           {/* map here ->  */}
           <RideCard/>
       </div>
    );
}

export default RideContainer;


// function GameList() {
//     const [games, setGames] = useState([]);
  
//     useEffect(() => {
//       fetch("http://localhost:9292/games")
//         .then((r) => r.json())
//         .then((games) => setGames(games));
//     }, []);
  
//     return (
//       <section>
//         {games.map((game) => (
//           <GameItem key={game.id} game={game} />
//         ))}
//       </section>
//     );
//   }