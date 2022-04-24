import styled from 'styled-components';

interface DividerProps {
  containerClass?: string;
  content?: string;
}

export const Divider = ({ containerClass, content }: DividerProps) => {
  if (!content)
    return (
      <div
        className={`${
          containerClass || ''
        } w-full bg-gray-200 dark:bg-neutral-200`}
        style={{ height: 1 }}
      ></div>
    );
  return (
    <DividerWrapper
      className={`${
        containerClass || ''
      } relative text-center text-gray-700 dark:text-neutral-700`}
    >
      or
    </DividerWrapper>
  );
};

const DividerWrapper = styled.div(
  ({ theme }) => `
  &:after,&:before{
    content: '';
    height: 1px;
    width: calc(50% - 20px);
    background: ${theme.colors.divider};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &:after{
    left: 0;
  }
  &:before{
    right: 0;
  }
`
);
