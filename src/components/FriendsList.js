import { Link } from "react-router-dom";
import { friends } from "./friendsData";

function FriendsList() {
    return (
      <div>
        <h2>Список друзів</h2>
        <ul>
          {friends.map(friend => (
            <li key={friend.id}>
              <Link to={`/friend/${friend.id}`}>{friend.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default FriendsList;