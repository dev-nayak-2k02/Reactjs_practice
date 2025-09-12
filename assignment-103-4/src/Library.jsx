import Book from "./Book";
export default function Library({ BookName, Author }) {
  return (
    <>
      <Book BookName={BookName} Author={Author} />
    </>
  );
}
