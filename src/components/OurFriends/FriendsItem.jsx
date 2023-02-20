import FriendsPopup from './FriendsPopup';

import { checkInfoFields } from 'helpers/checkInfoFields';
import notAvailable from '../../images/services/notAvailable.png';
import {
  Card,
  WrapperTitle,
  LinkTitle,
  WrapperInfo,
  Logo,
  InfoList,
  InfoItemText,
} from './FriendsItem.styled';

const daysOfWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

export default function FriendsItem({ data }) {
  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } =
    data;
  return (
    <Card>
      <WrapperTitle>
        <LinkTitle href={url} target="_blank" rel="noreferrer">
          {title}
        </LinkTitle>
      </WrapperTitle>

      <WrapperInfo>
        {imageUrl ? (
          <Logo src={imageUrl} alt={title} />
        ) : (
          <Logo src={notAvailable} alt="not found" />
        )}
        <InfoList>
          <FriendsPopup
            trigger={
              <li>
                <InfoItemText>Time:</InfoItemText>
                {checkInfoFields('workDays', workDays)}
              </li>
            }
            workDays={workDays}
          >
            {workDays?.map((day, index) => {
              return (
                <p key={index}>
                  <span style={{ marginRight: '12px' }}>
                    {daysOfWeek[index]}
                  </span>
                  {day.from} - {day.to}
                </p>
              );
            })}
          </FriendsPopup>

          <li>
            <InfoItemText>Address:</InfoItemText>
            {checkInfoFields('address', { address, addressUrl })}
          </li>
          <li>
            <InfoItemText>Email:</InfoItemText>
            {checkInfoFields('email', email)}
          </li>
          <li>
            <InfoItemText>Phone:</InfoItemText>
            {checkInfoFields('phone', phone)}
          </li>
        </InfoList>
      </WrapperInfo>
    </Card>
  );
}
