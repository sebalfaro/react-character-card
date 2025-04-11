import { ReactNode } from "react";
import styles from "../../styles/molecules/cardTop.module.scss";
import { Size } from "../../types";

interface Props {
  children: ReactNode;
  size: Size;
}
export const CardTop = ({ children, size }: Props) => {
  const topSize = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  return <div className={`${styles.cardTop} ${topSize}`}>{children}</div>;
};
