import { useState } from 'react';
import { PetTitle, BoxWrap } from './NoticeForm.styled';
import { NoticeFormStep1 } from './FirstNoticeForm';
import { NoticeFormStep2 } from './SecondNoticeForm';

export const NoticeForm = ({ onCancel, addNewNotice }) => {
  const [data, setData] = useState({
    category: '',
    title: '',
    name: '',
    birthdate: '',
    location: '',
    breed: '',
    theSex: '',
    price: 1,
    comments: '',
    avatarURL: null,
  });
  const [currentStep, setCurrentStep] = useState(0);
  // const makeReq = async formData => {
  //   const newNotice = new FormData();
  //   newNotice.append('category', formData.category);
  //   newNotice.append('title', formData.title);
  //   newNotice.append('name', formData.name);
  //   newNotice.append('birthdate', format(new Date(formData.birthdate), 'dd.MM.yyyy'));
  //   newNotice.append('breed', formData.breed);
  //   newNotice.append('theSex', formData.theSex);
  //   newNotice.append('price', formData.price);
  //   newNotice.append('comments', formData.comments);
  //   newNotice.append('imageURL', formData.imageURL);
  // };
  const handleNextStep = async (newData, final = false, category) => {
    setData(prev => ({ ...prev, ...newData, category }));
    if (final) {
      await addNewNotice(newData);
      // const makeReq = async formData => {
      //   const newNotice = new FormData();
      //   newNotice.append('category', formData.category);
      //   newNotice.append('title', formData.title);
      //   newNotice.append('name', formData.name);
      //   newNotice.append('birthdate', format(new Date(formData.birthdate), 'dd.MM.yyyy'));
      //   newNotice.append('breed', formData.breed);
      //   newNotice.append('theSex', formData.theSex);
      //   newNotice.append('price', formData.price);
      //   newNotice.append('comments', formData.comments);
      //   newNotice.append('imageURL', formData.imageURL);
      // };
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <NoticeFormStep1 next={handleNextStep} onCancel={onCancel} data={data} />,
    <NoticeFormStep2 next={handleNextStep} back={handlePrevStep} data={data} />,
  ];

  return (
    <BoxWrap>
      <PetTitle>Add pet</PetTitle>
      {steps[currentStep]}
    </BoxWrap>
  );
};
