export const SmallBookListItem = ({ book }) => {
  const { name, price } = book;

  return (
    <>
      <h1>
        Name: {name}/ Price: {price}
      </h1>
    </>
  );
};
