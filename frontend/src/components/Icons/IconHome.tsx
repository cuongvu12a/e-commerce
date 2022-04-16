import Icon from '@ant-design/icons';

export const IconHome = (props: any) => {
  return <Icon component={IconHomeSvg} {...props} />;
};

const IconHomeSvg = () => (
  <svg
    className='w-full'
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.6 8.2168L12.6 1.22474C12.2 0.925085 11.7 0.925085 11.4 1.22474L2.4 8.2168C2.1 8.41657 2 8.71623 2 9.01589V20.0034C2 21.7015 3.3 23 5 23H19C20.7 23 22 21.7015 22 20.0034V9.01589C22 8.71623 21.9 8.41657 21.6 8.2168ZM14 13.0114V21.0023H10V13.0114H14ZM19 21.0023C19.6 21.0023 20 20.6027 20 20.0034V9.51532L12 3.32236L4 9.51532V20.0034C4 20.6027 4.4 21.0023 5 21.0023H8V12.0125C8 11.4132 8.4 11.0136 9 11.0136H15C15.6 11.0136 16 11.4132 16 12.0125V21.0023H19Z'
      fill='black'
    />
    <mask
      id='mask0_1_113875'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x={2}
      y={1}
      width={20}
      height={22}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.6 8.2168L12.6 1.22474C12.2 0.925085 11.7 0.925085 11.4 1.22474L2.4 8.2168C2.1 8.41657 2 8.71623 2 9.01589V20.0034C2 21.7015 3.3 23 5 23H19C20.7 23 22 21.7015 22 20.0034V9.01589C22 8.71623 21.9 8.41657 21.6 8.2168ZM14 13.0114V21.0023H10V13.0114H14ZM19 21.0023C19.6 21.0023 20 20.6027 20 20.0034V9.51532L12 3.32236L4 9.51532V20.0034C4 20.6027 4.4 21.0023 5 21.0023H8V12.0125C8 11.4132 8.4 11.0136 9 11.0136H15C15.6 11.0136 16 11.4132 16 12.0125V21.0023H19Z'
        fill='white'
      />
    </mask>
    <g mask='url(#mask0_1_113875)'>
      <rect width={24} height={24} />
    </g>
  </svg>
);
