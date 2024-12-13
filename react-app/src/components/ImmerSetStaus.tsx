import { useState } from "react";
import produce from "immer";

const ImmerSetStaus = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: "false" },
    { id: 2, title: "Bug 2", fixed: "false" },
  ]);

  const handleClick = () => {
    // 原数据更新
    setBugs(bugs.map((bug) => (bug.id == 1 ? { ...bug, fixed: "true" } : bug)));

    // immer更新
    // setBugs(
    //   produce((draft) => {
    //     const bug = draft.find((bug) => bug.id == 1);
    //     if (bug) bug.fixed = "true";
    //   })
    // );
  };
  return (
    <>
      {bugs.map((item) => (
        <p key={item.id}>
          {item.title} {item.fixed}
        </p>
      ))}
      <button onClick={handleClick}>click me</button>
    </>
  );
};

export default ImmerSetStaus;
