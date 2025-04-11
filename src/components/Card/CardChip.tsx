import { CheckIcon, CloseIcon } from "../../components/ui/icons";
import styles from "../../styles/organisms/chip.module.scss";

type Status = "active" | "inactive";

interface Props {
  text: string;
  status: Status;
}

export const CardChip = ({ text, status = "inactive" }: Props) => {
  const statusStyle = {
    active: styles.active,
    inactive: styles.inactive,
  }[status];
  return (
    <div className={`${styles.cardChip} ${statusStyle}`}>
      {status === "active" ? <CheckIcon /> : <CloseIcon />}
      {text}
    </div>
  );
};
