import { withLayout } from '@containers/layout';
import { Clothes as ClothesContainer } from '@containers/Clothes';

const Clothes = () => {
  return (
    <>
      <ClothesContainer />
    </>
  );
};

export default withLayout(Clothes);
