import { useState } from 'react';
import { FirstRegisterForm } from './FirstRegisterForm';
import { SecondRegisterForm } from './SecondRegisterForm';

export const RegisterForm = () => {
  const [firstData, setFirstData] = useState({});
  const [showNext, setShowNext] = useState(false);

  const onSubmit = values => {
    if (values.email !== '' && values.password === values.confirmPassword) {
      setShowNext(true);
      setFirstData(values);
    }
  };

  const handleBack = () => {
    setShowNext(false);
  };

  return (
    <>
      {!showNext ? (
        <FirstRegisterForm
          onSubmit={onSubmit}
          data={firstData}
          onClick={showNext}
        />
      ) : (
        <SecondRegisterForm data={firstData} onClick={handleBack} />
      )}
    </>
  );
};
