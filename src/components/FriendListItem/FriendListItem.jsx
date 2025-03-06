import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default FriendListItem;

function FriendListItem({ avatar, name, isOnline }) {
  const statusClsx = clsx({
    [css.online]: isOnline,
    [css.offline]: !isOnline,
  });
  return (
    <div className={css.friend_container_info}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={statusClsx}>{isOnline ? "true" : "false"}</p>
    </div>
  );
}
