import { withLayout } from '@containers/layout';
import { Shop as ShopContainer } from '@containers/Shop';

const Wishlist = () => {
  return (
    <>
      <ShopContainer />
    </>
  );
};

export default withLayout(Wishlist);
