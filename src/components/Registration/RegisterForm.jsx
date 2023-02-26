import { useState } from 'react';
import { FirstRegisterForm } from './FirstRegisterForm';
import { SecondRegisterForm } from './SecondRegisterForm';
import ContainerPage from '../../components/Container/ContainerPage';
import { RegisterSection } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [firstData, setFirstData] = useState({});
  const [showNext, setShowNext] = useState(false);
  const [secondData, setSecondData] = useState({});

  const onSubmit = values => {
    if (values.email !== '' && values.password === values.confirmPassword) {
      setShowNext(true);
      setFirstData(values);
    }
  };

  const handleBack = (data) => {
    setShowNext(false);
    setSecondData(data);
  };

  return (
    <>
      <RegisterSection>
        {/* <ContainerPage> */}
          {!showNext ? (
            <FirstRegisterForm
              onSubmit={onSubmit}
              data={firstData}
              onClick={showNext}
            />
          ) : (
            <SecondRegisterForm data={firstData} secondData={secondData} onClick={handleBack} />
          )}
        {/* </ContainerPage> */}
      </RegisterSection>
    </>
  );
};
