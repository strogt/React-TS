import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [tabHeart, setTabHeart] = useState(true);
  if (tabHeart)
    return (
      <FaHeart
        color="FF6B81"
        onClick={() => {
          setTabHeart(!tabHeart);
          onClick();
        }}
      />
    );
  return (
    <FaRegHeart
      onClick={() => {
        setTabHeart(!tabHeart);
        onClick();
      }}
    />
  );
};

export default Like;
