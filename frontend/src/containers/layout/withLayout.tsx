import React from 'react';
import { TopBar } from '@containers/TopBar';

export const withLayout = (Component: React.FC) => () => {
  return (
    <div className='w-full h-full bg-gray-100 dark:bg-neutral-100'>
      <TopBar />
      <div className='pt-20'>
        <Component />
      </div>
    </div>
  );
};
