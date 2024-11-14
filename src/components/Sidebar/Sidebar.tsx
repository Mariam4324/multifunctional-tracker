import css from "./Sidebar.module.scss";
import CottageIcon from "@mui/icons-material/Cottage";
import TaskIcon from "@mui/icons-material/Task";
import { Button } from "@mui/material";
import Profile from "../Avatar/Avatar";

const sidebarLinks = [
  {
    title: "Home",
    path: "/",
    icon: CottageIcon,
  },
  {
    title: "Tasks",
    path: "/dashboard/tasks",
    icon: TaskIcon,
  },
];

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <Profile />

      <nav className={css.sidebar__menu}>
        <ul className={css.sidebar__list}>
          {sidebarLinks.map((el) => (
            <Button
              href={el.path}
              style={{
                display: "flex",
                justifyContent: "start",
                textTransform: "none",
                width: "100%",
              }}
              key={el.title}
              variant="text"
              startIcon={<el.icon />}
            >
              {el.title}
            </Button>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
