export const NoticeCategoryItem = ({ data }) => {
  console.log('notices in Item', data);
  const { _id, title, category, name, birthdate, breed, location, imgURL } =
    data;

  return (
    <li>
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
          <p>{birthdate}</p>
        </li>
      </ul>
    </li>
  );
};
