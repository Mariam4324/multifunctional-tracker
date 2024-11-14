import Sidebar from "@/components/Sidebar/Sidebar";
import css from "../dashboard/dashboard.module.scss";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
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
