import { Typography } from "@mui/material";
import css from "./Avatar.module.scss";
import AvatarComp from "@mui/material/Avatar";

const Avatar = () => {
  return (
    <div className={css.avatar}>
      <AvatarComp sx={{ width: 40, height: 40 }} />

      <div className={css.avatar__info}>
        <Typography className={css.avatar__name}>Mariam</Typography>
        <Typography className={css.avatar__email}>ashkmariam01@gmail.com</Typography>
      </div>
    </div>
  );
};

export default Avatar;
