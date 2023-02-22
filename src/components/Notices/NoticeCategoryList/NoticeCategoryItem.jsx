export const NoticeCategoryItem = async ({ data, route }) => {
  console.log('notices in Item', data);
  const {
    _id,
    title,
    category,
    name,
    birthdate,
    breed,
    location,
    imgURL,
    owner,
  } = data;

  return (
    <>
      <ul>
        <li key={_id}>
          <p>{category}</p>
          <img src={imgURL} alt={name} loading="lazy" />
          <p>{title}</p>

          <ul>
            <li key={`${_id}+breed`}>
              <lable>Breed:</lable>
              <p>{breed}</p>
            </li>
            <li key={`${_id}+place`}>
              <lable>Place:</lable>
              <p>{location}</p>
            </li>
            <li key={`${_id}+age`}>
              <lable>Age:</lable>
              <p>{birthdate}</p>
            </li>
            <li key={`${_id}+owner`}>
              <lable>Owner:</lable>
              <p>{owner}</p>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
