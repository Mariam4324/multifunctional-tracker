import Link from "next/link";
import Card from "../Card/Card";
import css from "./Home.module.scss";

const Home = () => {
  return (
    <Card backgroundColor={"primary"}>
      <h3 className={css.home__title}>Welcome back!</h3>
      <p className={css.home__}>Nice to see you, USERNAME</p>

      <div className={css.home__line}>
        <Link className={css.home__link} href="/dashboard/tasks">
          Go to tasks
        </Link>
      </div>
    </Card>
  );
};

export default Home;
