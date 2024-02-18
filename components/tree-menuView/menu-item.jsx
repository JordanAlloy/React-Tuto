import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
import './styles.css'

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getCurrentLabel]: !displayChildren[getCurrentLabel],
    });
  }

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            onClick={() => handleToggleChildren(item.label)}
            style={{ marginTop: "16px" }}
          >
            {displayChildren[item.label] ? (
              <FaMinus color="white" size={25} />
            ) : (
              <FaPlus color="white" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
