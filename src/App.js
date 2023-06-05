import './App.css';
import Sports from './components/Sports/Sports';

let sports = [
  {
    id: 0,
    age: 15-18,
    name: 'Olympic Runner',
    img: 'https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/runing-simple-img-2.jpg',
    description: 'The fastest Olympic sprint was Usain Bolt’s 100 meters at the London Games, averaging more than 23 miles per hour for 9.63 seconds. Marathoners, who run for two hours, top out around half of Bolt’s speed',
    time: 30
  },
  {
    id: 1,
    age: 12,
    name: 'Training Cricket',
    img: '2wCEAAoHCBUVFBcVFRUYGBcZGiEcHBkaGh0gHRogIyMjIiMdIR0gICwjIiQpISchJTYkKS0vNjMzICM4PjgyPSwyMy8BCwsLDw4PHhISHTUpIyoyMjIyMjIyNDI6OjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv',
    description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. ',
    time: 30
  },
  {
    id: 2,
    name: 'Football Academy',
    age: 10,
    img: 'https://media.istockphoto.com/id/1248741443/photo/soccer-training-warm-up-and-slalom-drills-boys-practicing-european-soccer-on-the-grass-school.jpg?s=612x612&w=0&k=20&c=sk4u_FhfjOL_iDKl3AXf56K1Us2Rdu21vD-zPKhg9fM=',
    time: 30,
    description: 'football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins.'
  },
  {
    id: 3,
    name: 'South Asian Kabadi',
    age: 18-20,
    img: 'https://im.rediff.com/sports/2014/oct/02kabaddi1.jpg',
    description: '',
    time: 30
  },
  {
    id: 4,
    name: 'Hocky Sporting Club',
    age: 19-22,
    img: 'https://thecoachessite.com/wp-content/uploads/2019/10/canada-hockey-kids.jpg',
    description: '',
    time: 30
  },
  {
    id: 5,
    name: 'Women Football Practice',
    age: 11-13,
    img: 'https://prod-media-eng.dhakatribune.com/uploads/2018/08/practice-session-at-bhutan-football-academy-turf-4-1534086145858.jpg',
    description: "In the 1970s, international women's football tournaments were extremely popular,[7][8] and the oldest surviving continental championship was founded, the AFC Women's Asian Cup. However, FIFA did not allow a woman even to speak at the FIFA Congress until 1986 (Ellen Wille).[9] The FIFA Women's World Cup was first held in China in 1991 and has since become a major television event in many countries",
    time: 30
  },
];


function App() {
  return (
    <div >
      <Sports></Sports>
    </div>
  );
}

export default App;
