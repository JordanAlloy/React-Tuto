import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list">
      {list && list.length ? (
        list.map((listItem) => <MenuItem item={listItem} />)
      ) : (
        <p>no data found</p>
      )}
    </ul>
  );
}
