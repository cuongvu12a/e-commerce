import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Image = ({
  src = 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png',
  alt,
  className,
}: ImageProps) => {
  return (
    <img
      className={`max-w-full object-cover object-center ${className || ''}`}
      src={src}
      alt={alt}
    />
  );
};

interface AspectRatioProps {
  ratio: number[];
  children: React.ReactNode;
}

export const AspectRatio = ({ children, ratio = [1, 1] }: AspectRatioProps) => {
  return <AspectRatioWrap ratio={ratio}>{children}</AspectRatioWrap>;
};

const AspectRatioWrap = styled.div<AspectRatioProps>(
  ({ ratio }) => `
  position: relative;
  height: 0;
  width: 100%;
  padding-top: ${(ratio[1] / ratio[0]) * 100}%;
  overflow: hidden;
  & > *{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
);
