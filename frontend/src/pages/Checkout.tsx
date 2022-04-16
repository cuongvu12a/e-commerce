import { withLayout } from '@containers/layout';
import { Checkout as CheckoutContainer } from '@containers/Checkout';

const Checkout = () => {
  return (
    <>
      <CheckoutContainer />
    </>
  );
};

export default withLayout(Checkout);
