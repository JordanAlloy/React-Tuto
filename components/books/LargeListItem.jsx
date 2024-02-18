export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;

  return (
    <>
      <h1>Name: {name}</h1>
      <h4>Price: {price}</h4>
      <p>Title: {title}</p>
      <p>Pages: {pages}</p>
    </>
  );
};
