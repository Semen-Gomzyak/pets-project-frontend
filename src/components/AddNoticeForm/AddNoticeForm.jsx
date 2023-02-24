import { useState } from 'react';
import { addNotice } from 'redux/Notices/NoticesOperations';
import FirstPart from './FirstPartOfForm';
import SecondPart from './SecondPartOfForm';

const AddNoticeForm = ({ closeModal }) => {
  const [data, setData] = useState({
    category: '',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    theSex: '',
    location: '',
    price: '',
    imageURL: null,
    comments: '',
  });
  const [currentPart, setCurrentPart] = useState(0);

  const appendData = async formData => {
    const data = new FormData();
    data.append('category', formData.category);
    data.append('title', formData.title);
    data.append('name', formData.name);
    data.append('birthday', formData.birthday);
    data.append('breed', formData.breed);
    data.append('comments', formData.comments);
    data.append('imageURL', formData.imageURL);
    data.append('sex', formData.sex);
    data.append('location', formData.location);

    try {
      await addNotice(data);
      closeModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  const nextPart = (newData) => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentPart(prev => prev + 1);
    appendData(newData);

  };

  const prevPart = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentPart(prev => prev - 1);
  };

  const form = [
    <FirstPart next={nextPart} closeModal={closeModal} data={data}/>,
    <SecondPart back={prevPart} data={data}/>,
  ];

  return (
    <div>
      <h3>Add pet</h3>
      {form[currentPart]}
    </div>
  );
};

export default AddNoticeForm;
