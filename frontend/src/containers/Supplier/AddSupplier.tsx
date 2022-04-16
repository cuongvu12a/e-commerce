import { useTranslation } from 'react-i18next';

import { Drawer } from '@ui';

interface AddSupplierProps {
  visible: boolean;
  onClose: () => void;
  data: any;
}

export const AddSupplier = ({ data, visible, onClose }: AddSupplierProps) => {
  const { t } = useTranslation();
  return (
    <Drawer
      title={data ? t`title.editSupplier` : t`title.addSupplier`}
      visible={visible}
      closable={false}
      onClose={onClose}
    >
      <div>hello {data || ''}</div>
    </Drawer>
  );
};
