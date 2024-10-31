import { Typography } from "@mui/material";
import css from "./Avatar.module.scss";
import AvatarComp from "@mui/material/Avatar";

const Avatar = () => {
  return (
    <div className={css.avatar}>
      <AvatarComp sx={{ width: 56, height: 56 }} />

      <div className={css.avatar__info}>
        <Typography variant="h6">Username</Typography>
        <Typography variant="h7">User email</Typography>
      </div>
    </div>
  );
};

export default Avatar;
