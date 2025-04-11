type Status = "fav" | "notFav" | "disable";

interface Props {
  status: Status;
}

const StarIcon = ({ status = "notFav" }: Props) => {
  const color = {
    fav: "#588028",
    notFav: "#808C73",
    disable: "#808C73",
  }[status];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
      <path
        fill={color}
        d="M9.106 3.05 7.072 7.146l-4.552.658c-.816.118-1.143 1.117-.551 1.689l3.293 3.184-.78 4.5c-.14.813.724 1.422 1.446 1.041L10 16.093l4.072 2.124c.722.378 1.585-.229 1.445-1.042l-.779-4.499 3.293-3.184c.592-.572.265-1.571-.551-1.689l-4.552-.658-2.034-4.094c-.364-.73-1.42-.74-1.788 0Z"
      />
    </svg>
  );
};
export default StarIcon;
