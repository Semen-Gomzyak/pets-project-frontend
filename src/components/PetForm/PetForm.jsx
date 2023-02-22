import { format } from 'date-fns';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPets } from '../../redux/pets/petsOperations';
import { PetTitle, BoxWrap } from './PetForm.styled';
import PetFormStep1 from './PetFormStep1';
import PetFormStep2 from './PetFormStep2';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const PetForm = ({ onCancel }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: '',
    birthdate: '',
    breed: '',
    comments: '',
    imageURL: null,
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeReq = async formData => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append(
      'birthdate',
      format(new Date(formData.birthdate), 'dd.MM.yyyy')
    );
    data.append('breed', formData.breed);
    data.append('comments', formData.comments);
    data.append('imageURL', formData.imageURL);

    try {
      dispatch(addPets(data));
      Notify.success('You added new Pet successfully!');
      onCancel();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      makeReq(newData);
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







// import { useState } from 'react';
// import SignUpStep1 from './SignUpStep1';
// import SignUpStep2 from './SignUpStep2';

// const Registration = () => {
//   const [isNext, setIsNext] = useState(true);
//   const [step1Data, setStep1Data] = useState({});
//   const [step2Data, setStep2Data] = useState({});

//   const firstStepData = data => {
//     if (data.email !== '' && data.password !== '') {
//       setIsNext(false);
//       setStep1Data(data);
//     }
//   };
//   const secondStepData = data => {
//     setStep2Data(data);
//     setIsNext(true);
//   };

//   return (
//     <>
//       {isNext ? (
//         <SignUpStep1 data={step1Data} onSubmit={firstStepData} />
//       ) : (
//         <SignUpStep2
//           data={step2Data}
//           step1={step1Data}
//           onBack={secondStepData}
//         />
//       )}
//     </>
//   );
// };

// export default Registration;