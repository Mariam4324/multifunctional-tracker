import Sidebar from "@/components/Sidebar/Sidebar";
import css from "../dashboard/dashboard.module.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className={css.dashboard}>
      <div className={css.dashboard__sidebar}>
        <Sidebar />
      </div>

      <div className={css.dashboard__content}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
