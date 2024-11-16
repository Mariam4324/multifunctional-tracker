import { ReactNode } from "react";
import css from "./Card.module.scss";

interface CardProps {
  children: ReactNode;
  backgroundColor: string;
}

const Card = ({ children, backgroundColor }: CardProps) => {
  return <div className={`${css[`card__${backgroundColor}`]} ${css.card}`}>{children}</div>;
};

export default Card;
