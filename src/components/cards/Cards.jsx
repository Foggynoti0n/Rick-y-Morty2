import Card from '../card/Card';
import './Cards.css'

export default function Cards(props) {
   const {characters, onClose}= props;
   return < div className='cards'>
     {characters.map(character=> 
<Card character= {character} key= {character.id} onClose={onClose}  /> )}
   </div>;
}
