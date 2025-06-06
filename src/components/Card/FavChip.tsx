import { useState } from "react";
import styles from "../../styles/atoms/favChip.module.scss";
import StarIcon from "../../components/ui/icons/Star";

type Position = "right" | "left";

interface Props {
  isFavCharacter: boolean;
  position: Position;
  onClickHandler: () => void;
}

export const FavChip = ({ isFavCharacter, position, onClickHandler }: Props) => {
  const [isFav, setIsFav] = useState<boolean>(isFavCharacter);
  const chipPosition = {
    right: styles.right,
    left: styles.left,
  }[position];

  const handleOnClick = () => {
    setIsFav(!isFav);
    onClickHandler();
  };

  return (
    <button
      className={`${styles.favChip} ${chipPosition} ${isFav ? styles.fav : styles.notFav}`}
      onClick={handleOnClick}
    >
      <StarIcon status={isFav ? "fav" : "notFav"} />
    </button>
  );
};
