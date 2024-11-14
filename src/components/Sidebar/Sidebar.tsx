import css from "./Sidebar.module.scss";
import { Button } from "@mui/material";
import Profile from "../Avatar/Avatar";
import { HeartPulse, House, LayoutList, Settings, UserRound } from "lucide-react";

const sidebarLinks = [
  {
    title: "Home",
    path: "/dashboard/home",
    icon: House,
  },
  {
    title: "Tasks",
    path: "/dashboard/tasks",
    icon: LayoutList,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
  {
    title: "Health tracking",
    path: "/dashboard/health",
    icon: HeartPulse,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <Profile />
      
      <nav className={css.sidebar__menu}>
        <ul className={css.sidebar__list}>
          {sidebarLinks.map((el) => {
            return (
              <>
                <Button className={css.sidebar__link} href={el.path} key={el.title} startIcon={<el.icon color="#0045AB" strokeWidth={2} />}>
                  {el.title}
                </Button>
              </>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
