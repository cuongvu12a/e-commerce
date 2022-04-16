import { withLayout } from '@containers/layout';
import { Supplier as SupplierContainer } from '@containers/Supplier';

const Supplier = () => {
  return (
    <>
      <SupplierContainer />
    </>
  );
};

export default withLayout(Supplier);
