import Icon from '@ant-design/icons';

export const IconGrid = (props: any) => {
  return <Icon component={IconGridSvg} {...props} />;
};

const IconGridSvg = () => (
  <svg
    className='max-w-full'
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2ZM4 9H9V4H4V9ZM21 2H14C13.4 2 13 2.4 13 3V10C13 10.6 13.4 11 14 11H21C21.6 11 22 10.6 22 10V3C22 2.4 21.6 2 21 2ZM15 9H20V4H15V9ZM21 13H14C13.4 13 13 13.4 13 14V21C13 21.6 13.4 22 14 22H21C21.6 22 22 21.6 22 21V14C22 13.4 21.6 13 21 13ZM15 20H20V15H15V20ZM10 13H3C2.4 13 2 13.4 2 14V21C2 21.6 2.4 22 3 22H10C10.6 22 11 21.6 11 21V14C11 13.4 10.6 13 10 13ZM4 20H9V15H4V20Z'
      fill='black'
    />
    <mask
      id='mask0_1_113941'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2ZM4 9H9V4H4V9ZM21 2H14C13.4 2 13 2.4 13 3V10C13 10.6 13.4 11 14 11H21C21.6 11 22 10.6 22 10V3C22 2.4 21.6 2 21 2ZM15 9H20V4H15V9ZM21 13H14C13.4 13 13 13.4 13 14V21C13 21.6 13.4 22 14 22H21C21.6 22 22 21.6 22 21V14C22 13.4 21.6 13 21 13ZM15 20H20V15H15V20ZM10 13H3C2.4 13 2 13.4 2 14V21C2 21.6 2.4 22 3 22H10C10.6 22 11 21.6 11 21V14C11 13.4 10.6 13 10 13ZM4 20H9V15H4V20Z'
        fill='white'
      />
    </mask>
    <g mask='url(#mask0_1_113941)'>
      <rect width={24} height={24} />
    </g>
  </svg>
);
