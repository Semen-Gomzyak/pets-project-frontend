// import { format } from 'date-fns';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addPets } from '../../redux/pets/petsOperations';
import { PetTitle, BoxWrap } from './PetForm.styled';
import PetFormStep1 from './PetFormStep1';
import PetFormStep2 from './PetFormStep2';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const PetForm = ({ onCancel, addPet }) => {
  // const dispatch = useDispatch();

  const [data, setData] = useState({
    name: '',
    date: '',
    breed: '',
    comments: '',
    avatarURL: null,
  });
  const [currentStep, setCurrentStep] = useState(0);

  // const makeReq = async formData => {
  //   const newPet = new FormData();
  //   newPet.append('name', formData.name);
  //   newPet.append('date', format(new Date(formData.date), 'dd.MM.yyyy'));
  //   newPet.append('breed', formData.breed);
  //   newPet.append('comments', formData.comments);
  //   newPet.append('imageURL', formData.imageURL);
  // };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      addPet(newData);
      onCancel();
      // makeReq(newData);
      // try {
      //   dispatch(addPets(newData));
      //   Notify.success('You added new Pet successfully!');
      //   addPet(newData);
      //   onCancel();
      // } catch (error) {
      //   console.log(error.message);
      // }
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <PetFormStep1 next={handleNextStep} onCancel={onCancel} data={data} />,
    <PetFormStep2 next={handleNextStep} back={handlePrevStep} data={data} />,
  ];

  return (
    <BoxWrap>
      <PetTitle>Add pet</PetTitle>
      {steps[currentStep]}
    </BoxWrap>
  );
};

export default PetForm;
