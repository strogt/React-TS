import { useState } from "react";

// css 模块化：
// import styles from "./ListGroup.mudule.css";

// css in js/ts
// npm i styled-components/@types/styled-components

interface Props {
  items?: string[];
  heading?: string;
  onSelectItem?: (item: string) => void;
}

const ListGroup = ({
  items = [],
  heading = "请输入标题",
  onSelectItem = () => {},
}: Props) => {
  const [selectedIndex, setSelectIndex] = useState<number>(0);
  return (
    <div>
      <h1>{heading}</h1>
      {items.length == 0 && <p>无列表</p>}
      {/* css 模块化引用方式被弃用 */}
      {/* <ul className={styles.listGroup}> */}
      <ul>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
