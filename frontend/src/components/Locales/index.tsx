import { useTranslation } from 'react-i18next';

import { Select } from '@ui';
import { EnumLocales } from '@constants';
import { STORAGE_KEYS, StorageSetItem } from '@api';

const options: { value: EnumLocales; label: string; flag: string }[] = [
  {
    value: EnumLocales.EN,
    label: 'English',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/us.svg',
  },
  {
    value: EnumLocales.VI,
    label: 'Vietnamese',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/vn.svg',
  },
];

export const Locales = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (value: EnumLocales) => {
    StorageSetItem(STORAGE_KEYS.LOCALES, value);
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <Select
        palette='primary'
        type='locales'
        defaultValue={i18n.language}
        onChange={handleChange}
        className='w-36'
        customOptions={options}
      />
    </div>
  );
};
