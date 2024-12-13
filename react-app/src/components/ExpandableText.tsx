import { useState } from "react";

// lorem100 输入测试字符
interface Props {
  children: string;
  maxNum?: number;
}

const ExpandableText = ({ children, maxNum = 10 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxNum) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxNum);
  return (
    <div>
      {text}
      {!isExpanded && "..."}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
