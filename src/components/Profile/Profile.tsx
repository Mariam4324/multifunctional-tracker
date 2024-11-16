"use client";
import { Settings } from "lucide-react";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import css from "./Profile.module.scss";

const Profile = () => {
  return (
    <Card backgroundColor="secondary">
      <div className={css.profile}>
        <Avatar />
        <Settings onClick={() => (window.location.href = "/dashboard/settings")} className={css.profile__settings} />
      </div>
    </Card>
  );
};

export default Profile;
