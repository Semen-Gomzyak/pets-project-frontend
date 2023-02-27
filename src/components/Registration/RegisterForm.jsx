import { useState } from 'react';
import { FirstRegisterForm } from './FirstRegisterForm';
import { SecondRegisterForm } from './SecondRegisterForm';
// import ContainerPage from '../../Container/ContainerPage';
import { RegisterSection } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [firstData, setFirstData] = useState({});
  //   true
  const [showNext, setShowNext] = useState(true);
  const [secondData, setSecondData] = useState({});

  const onSubmit = values => {
    if (values.email !== '' && values.password !== '') {
      //   false
      setShowNext(false);
      setFirstData(values);
    }
  };

  const handleBack = data => {
    setSecondData(data);
    // true
    setShowNext(true);
  };

  return (
    <>
      <RegisterSection>
        {!showNext ? (
          <FirstRegisterForm data={firstData} onSubmit={onSubmit} />
        ) : (
          <SecondRegisterForm
            data={secondData}
            firstStep={firstData}
            back={handleBack}
          />
        )}
      </RegisterSection>
    </>
  );
};

// =================================

// import { useState } from 'react';
// import { FirstRegisterForm } from './FirstRegisterForm';
// import { SecondRegisterForm } from './SecondRegisterForm';
// import ContainerPage from '../../components/Container/ContainerPage';
// import { RegisterSection } from './RegisterForm.styled';

// export const RegisterForm = () => {
//   const [firstData, setFirstData] = useState({});
//   const [showNext, setShowNext] = useState(false);
//   const [secondData, setSecondData] = useState({});

//   const onSubmit = values => {
//     if (values.email !== '' && values.password === values.confirmPassword) {
//       setShowNext(true);
//       setFirstData(values);
//     }
//   };

//   const handleBack = (data) => {
//     setShowNext(false);
//     setSecondData(data);
//   };

//   return (
//     <>
//       <RegisterSection>
//         {/* <ContainerPage> */}
//           {!showNext ? (
//             <FirstRegisterForm
//               onSubmit={onSubmit}
//               data={firstData}
//               onClick={showNext}
//             />
//           ) : (
//             <SecondRegisterForm data={firstData} secondData={secondData} onClick={handleBack} />
//           )}
//         {/* </ContainerPage> */}
//       </RegisterSection>
//     </>
//   );
// };
