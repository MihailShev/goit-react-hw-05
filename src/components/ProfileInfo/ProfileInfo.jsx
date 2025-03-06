import css from "./ProfileInfo.module.css";
export default ProfileInfo;

function ProfileInfo({ infoName, infoNumb }) {
  return (
    <li className={css.profile_item_info}>
      <span>{infoName}</span>
      <span className={css.font_weight}>{infoNumb}</span>
    </li>
  );
}
