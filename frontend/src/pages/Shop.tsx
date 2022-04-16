import { withLayout } from '@containers/layout';
import { Shop as ShopContainer } from '@containers/Shop';

const Shop = () => {
  return (
    <>
      <ShopContainer />
    </>
  );
};

export default withLayout(Shop);
