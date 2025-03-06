import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
export default FriendList;

function FriendList({ friend }) {
  return (
    <ul className={css.friendList}>
      {friend.map((friend) => (
        <li className={css.friendList_item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
