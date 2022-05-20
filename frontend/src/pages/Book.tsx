import { withLayout } from '@containers/layout';
import { Book as BookContainer } from '@containers/Book';

const Book = () => {
  return (
    <>
      <BookContainer />
    </>
  );
};

export default withLayout(Book);
