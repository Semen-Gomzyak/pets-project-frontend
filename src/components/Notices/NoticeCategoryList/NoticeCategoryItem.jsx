import { ListItem } from './NoticeCategoryItem.styled';

export const NoticeCategoryItem = ({ data, route }) => {
  console.log('notices in Item', data);
  const { _id, title, category, name, birthdate, breed, location, imgURL } =
    data;

  return (
    <ListItem>
      <p>{category}</p>
      <img src={imgURL} alt={name} />
      <p>{title}</p>

      <ul>
        <li key={`${_id}+breed`}>
          <p>Breed:</p>
          <p>{breed}</p>
        </li>
        <li key={`${_id}+place`}>
          <p>Place:</p>
          <p>{location}</p>
        </li>
        <li key={`${_id}+age`}>
          <p>Age:</p>
          <p>
            {birthdate?.split('-').reverse().join('/').split('T23:00:00.000Z')}
          </p>
        </li>
      </ul>
    </ListItem>
  );
};
