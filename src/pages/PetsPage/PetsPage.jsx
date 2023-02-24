import { useEffect } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets, addPets } from '../../redux/pets/petsOperations';
import { getPets, selectIsLoading, selectError } from '../../redux/pets/petsReduser';
import { Loader } from '../../components/Loader/Loader';
import PetForm from '../../components/PetForm';
import PetList from '../../components/PetList';
import Filter from '../../components/Filter';
// import '../App.scss';




export default function PetsPage() {
  const dispatch = useDispatch();

  const pets = useSelector(getPets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  const addPet = (name, number) => {
    const newPet = {
      id: shortid.generate(),
      name,
      number,
    };

    if (pets.some(pet => pet.name === newPet.name)) {
      Notiflix.Notify.warning(`❌ ${newPet.name} is already is contacts`, {
        timeout: 3000,
      });
      return false;
    }
    dispatch(addPets(newPet));
    return true;
  };


  return (
    <div className="Phonebook">
       {isLoading && !error && <Loader />}
      <h1>My pets</h1>
      <PetForm onSubmit={addPet}/>
      <h2 className="TitleContacts">Contacts</h2>
      <Filter />
      <PetList/>
    </div>
  );
}