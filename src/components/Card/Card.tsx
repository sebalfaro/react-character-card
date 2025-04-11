import { ReactNode } from "react";
import { Size } from "../../types";
import styles from "../../styles/organisms/card.module.scss";

interface Props {
  children: ReactNode;
  size: Size;
}

export const Card = ({ children, size }: Props) => {
  const sizeClass = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  return <div className={`${styles.card} ${sizeClass}`}>{children}</div>;
};
