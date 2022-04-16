import React from 'react';
import styled from 'styled-components';

interface ellipsisProps {
  line: number;
  children: React.ReactChildren | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Ellipsis = ({
  line,
  children,
  className,
  style,
}: ellipsisProps) => {
  return (
    <EllipsisWrap className={`${className || ''}`} style={style} line={line}>
      {children}
    </EllipsisWrap>
  );
};

const EllipsisWrap = styled.span<ellipsisProps>(
  ({ line }) => `
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;  
  -webkit-line-clamp: ${line};
  overflow: hidden;
`
);
