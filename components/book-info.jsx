export const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};
  return book ? (
    <>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Title: {title}</p>
      <p>no of pages: {pages}</p>
      
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
