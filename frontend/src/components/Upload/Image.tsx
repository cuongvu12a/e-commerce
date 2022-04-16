import React, { useState, useRef } from 'react';
import ReactCrop, { Crop, centerCrop, makeAspectCrop } from 'react-image-crop';

import { uploadImage, login } from '@api';
import { Button, Modal } from '@ui';
import { aspectImageUpload } from '@constants';

export const Image = () => {
  const [visible, setVisible] = useState(false);
  const [file, setFile] = useState<string>('');
  const [crop, setCrop] = useState<Crop>();
  const [result, setResult] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);
  // const [scale, setScale] = useState(1);
  // const [rotate, setRotate] = useState(0);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    handleCancel();
  };

  const handleCancel = () => {
    setVisible(false);
    setFile('');
    setCrop(undefined);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { width, height } = e.currentTarget;

    const crop = centerCrop(
      makeAspectCrop(
        {
          width: 90,
          unit: '%',
        },
        aspectImageUpload,
        width,
        height
      ),
      width,
      height
    );

    setCrop(crop);
  };

  const getCroppedImage = () => {
    const canvas = document.createElement('canvas');
    const image = imgRef.current;
    const ctx = canvas.getContext('2d');
    if (!image || !crop?.width || !crop?.height) return;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    ctx?.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const base64Image = canvas.toDataURL('image/jpeg');
    setResult(base64Image);
    return;
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const formData = new FormData();
      formData.append('image', new File([blob], 'myfile.png'));
      const res = await uploadImage(formData);
      // const res = await login({});
      console.log(res);
    });
  };

  return (
    <>
      <Button palette='primary' type='primary' onClick={showModal}>
        Click me!
      </Button>
      <Modal
        title='Upload image'
        visible={visible}
        onCancel={handleCancel}
        width={1200}
        footer={
          <Button palette='primary' type='primary' onClick={handleOk}>
            Ok
          </Button>
        }
      >
        <input type='file' accept='image/*' onChange={handleFileChange} />

        {file && (
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            aspect={aspectImageUpload}
          >
            {/* <img src={file} /> */}
            <img
              ref={imgRef}
              src={file}
              onLoad={onImageLoad}
              // style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
            />
          </ReactCrop>
        )}
        {result && <img src={result} />}
      </Modal>
    </>
  );
};
