import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import css from "./Profile.module.scss";

const Profile = () => {
  return (
    <Card backgroundColor="secondary">
      <div className={css.profile}>
        <Avatar />
      </div>
    </Card>
  );
};

export default Profile;
