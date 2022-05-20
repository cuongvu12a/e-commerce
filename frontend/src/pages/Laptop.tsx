import { withLayout } from '@containers/layout';
import { Laptop as LaptopContainer } from '@containers/Laptop';

const Laptop = () => {
  return (
    <>
      <LaptopContainer />
    </>
  );
};

export default withLayout(Laptop);
