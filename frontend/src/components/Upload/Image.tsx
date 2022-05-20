import React, { useState, useRef } from 'react';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop';

import { Image as ImageComponent, AspectRatio } from '@components/Image';
import { uploadImage } from '@api';
import { Button, Modal } from '@ui';
import { aspectImageUpload } from '@constants';

interface ImageProps {
  handleResult?: (res: string) => void;
  currentImage?: string;
}

export const Image = ({ handleResult, currentImage }: ImageProps) => {
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [file, setFile] = useState<File | null>();
  const imgRef = useRef<HTMLImageElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const showModal = () => {
    setImgSrc('');
    setFile(null);
    setVisible(true);
    if (!inputRef.current) return;
    inputRef.current.value = '';
  };

  const handleOk = async () => {
    const image = imgRef.current;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (
      !ctx ||
      !image?.naturalWidth ||
      !image.naturalHeight ||
      !completedCrop?.width ||
      !completedCrop.height
    )
      return;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = Math.floor(completedCrop.width * scaleX);
    canvas.height = Math.floor(completedCrop.height * scaleY);
    const cropX = completedCrop.x * scaleX;
    const cropY = completedCrop.y * scaleY;
    ctx.drawImage(
      image,
      cropX,
      cropY,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight
    );

    const blob = await toBlob(canvas);

    if (!blob || !file?.name) return;
    const currentFile = new File([blob], file?.name, { type: 'image/png' });
    const formData = new FormData();
    if (!file) return;
    formData.append('image', currentFile, file?.name);
    const res = await uploadImage(formData);
    handleResult && handleResult(res);
    handleCancel();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => !!reader?.result && setImgSrc(reader.result.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  function handleImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspectImageUpload) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspectImageUpload));
    }
  }

  return (
    <>
      <button onClick={showModal} className='w-full'>
        <AspectRatio ratio={[16, 9]}>
          <ImageComponent
            src={
              currentImage
                ? currentImage
                : 'https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg'
            }
          />
        </AspectRatio>
      </button>
      <Modal
        title='Upload image'
        visible={visible}
        onCancel={handleCancel}
        width={1200}
        footer={
          <Button
            palette='primary'
            type='primary'
            onClick={handleOk}
            disabled={!imgSrc || !file}
          >
            Ok
          </Button>
        }
      >
        <input
          ref={inputRef}
          type='file'
          accept='image/*'
          onChange={handleFileChange}
        />
        {!!imgSrc && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspectImageUpload}
          >
            <img
              ref={imgRef}
              alt='Crop me'
              src={imgSrc}
              // style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={handleImageLoad}
            />
          </ReactCrop>
        )}
      </Modal>
    </>
  );
};

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

function toBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return;
      resolve(blob);
    });
  });
}
