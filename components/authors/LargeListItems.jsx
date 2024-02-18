export const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;

  return (
    <>
      <h1>Name: {name}</h1>
      <h4>Age: {age}</h4>
      <p>Country: {country}</p>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};
