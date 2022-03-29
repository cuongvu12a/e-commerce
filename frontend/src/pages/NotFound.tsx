import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTE } from '@constants';
import { BannerNotFound } from '@components/Icons';
import { Button } from '@ui';

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='flex flex-col min-h-full justify-center items-center pt-10 bg-gray-100 dark:bg-neutral-100'>
      <div className='mb-6 md:mb-20 lg:mb-6 text-center'>
        <div className='pb-3 text-2xl font-medium text-gray-800 dark:text-neutral-800'>
          {t`title.pageNotFound`}
        </div>
        <div className='text-sm text-gray-700 dark:text-neutral-700'>{t`content.pageNotFound`}</div>
      </div>
      <Button
        containerClass='mb-6 md:mb-20 lg:mb-6'
        type='primary'
        palette='primary'
        onClick={() => navigate(ROUTE.HOME)}
      >{t`button.backToHome`}</Button>
      <BannerNotFound />
    </div>
  );
};

export default NotFound;
