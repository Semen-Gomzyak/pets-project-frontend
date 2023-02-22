export const NoticeCategoryItem = async ({ notices }) => {
  console.log('notices', notices);

  return (
    <>
      <div>
        await{' '}
        {notices.map(({ _id, title, breed, place, age }) => (
          <li key={_id}>
            <div>
              title, breed, place, age
              {'asdfasd'}
            </div>
          </li>
        ))}
      </div>
    </>
  );
};
