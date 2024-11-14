import css from "./Sidebar.module.scss";
import { Button } from "@mui/material";
import Profile from "../Avatar/Avatar";
import { House, LayoutList } from "lucide";

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
                <Button
                  href={el.path}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    textTransform: "none",
                    width: "100%",
                    color: "#fff",
                  }}
                  key={el.title}
                  variant="text"
                >
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
