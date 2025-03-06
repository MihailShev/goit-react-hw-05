import ProfileInfo from "../ProfileInfo/ProfileInfo";
import css from "./Profile.module.css";

export default Profile;

function Profile({
  name,
  tag,
  location,
  avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) {
  return (
    <div className={css.profile_container}>
      <div className={css.profile_avatar_container}>
        <img className={css.images_avatar} src={avatar} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profile_list_info}>
        <ProfileInfo infoName="Followers" infoNumb={stats.followers} />

        <ProfileInfo infoName="Views" infoNumb={stats.views} />

        <ProfileInfo infoName="Likes" infoNumb={stats.likes} />
      </ul>
    </div>
  );
}
