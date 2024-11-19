import css from "./Sidebar.module.scss";
import { Button } from "@mui/material";
import Profile from "../Avatar/Avatar";
import { Banknote, HeartPulse, House, LayoutList, Settings, UserRound, Wallet } from "lucide-react";

const sidebarLinks = [
  {
    title: "Home",
    path: "/dashboard/home",
    icon: House,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
  {
    title: "Tasks",
    path: "/dashboard/tasks",
    icon: LayoutList,
  },
  {
    title: "Expenses",
    path: "/dashboard/expenses",
    icon: Banknote,
  },
  {
    title: "Budget",
    path: "/dashboard/budget",
    icon: Wallet,
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
