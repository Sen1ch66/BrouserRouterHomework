import { useParams, Link } from "react-router-dom";
import { friends } from "./friendsData";

function FriendDetail() {
    const { id } = useParams();
    const friend = friends.find(f => f.id === parseInt(id));
  
    if (!friend) {
      return <p>Друг не знайдений</p>;
    }
  
    return (
      <div>
        <h2>Деталі про {friend.name}</h2>
        <p>Вік: {friend.age}</p>
        <p>Хобі: {friend.hobby}</p>
        <p>Фах: {friend.job}</p>
        <Link to="/">Повернутись до списку</Link>
      </div>
    );
  }
  
  export default FriendDetail;