import Icon from '@ant-design/icons';

export const IconStarEmpty = (props: any) => {
  return <Icon component={IconStarEmptySvg} {...props} />;
};

const IconStarEmptySvg = () => (
  <svg
    className='max-w-full'
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M21.4688 9.86292L14.6594 9.27811L12 3L9.34017 9.27816L2.53125 9.86292L7.6965 14.3406L6.14817 21L12 17.4697L17.8514 21L16.3035 14.3407L21.4688 9.86292ZM12.7749 16.1853L12 15.7178L11.2252 16.1852L8.41322 17.8817L9.15755 14.6803L9.36234 13.7995L8.67905 13.2072L6.19495 11.0538L9.46852 10.7726L10.3688 10.6953L10.7213 9.86325L11.9999 6.84539L13.2782 9.86316L13.6307 10.6952L14.5311 10.7726L17.8051 11.0537L15.321 13.2071L14.6378 13.7994L14.8425 14.6801L15.5866 17.8816L12.7749 16.1853Z' />
  </svg>
);

export const IconStar = (props: any) => {
  return <Icon component={IconStarSvg} {...props} />;
};

const IconStarSvg = () => (
  <svg
    className='max-w-full'
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 17.4697L17.8514 21L16.3035 14.3407L21.4688 9.86292L14.6594 9.27816L12 3L9.34017 9.27816L2.53125 9.86292L7.6965 14.3407L6.14817 21L12 17.4697Z' />
  </svg>
);

export const IconStarHalf = (props: any) => {
  return <Icon component={IconStarHalfSvg} {...props} />;
};

const IconStarHalfSvg = () => (
  <svg
    className='max-w-full'
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M21.4688 9.86292L14.6594 9.27811L12 3L9.34017 9.27816L2.53125 9.86292L7.6965 14.3406L6.14817 21L12 17.4697L17.8514 21L16.3035 14.3407L21.4688 9.86292ZM12.7749 16.1853L12 15.7178L11.9999 6.84544L13.2782 9.8632L13.6307 10.6953L14.5311 10.7726L17.8051 11.0538L15.321 13.2072L14.6378 13.7995L14.8425 14.6802L15.5866 17.8817L12.7749 16.1853Z' />
  </svg>
);
