import { ReactNode } from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';

interface ModalProps extends AntModalProps {
  children: ReactNode;
}

export const Modal = ({ className, ...rest }: ModalProps) => {
  return <AntModal {...rest} className={`${className || ''}`} />;
};
