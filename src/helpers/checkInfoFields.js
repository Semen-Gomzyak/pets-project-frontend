import {
  InfoItemLink,
  InfoItemText,
} from 'components/OurFriends/FriendsItem.styled';

import { indexDayOfWeek } from 'helpers/getIndexDayOfWeek';

export function checkInfoFields(field, value) {
  if (value) {
    if (field === 'workDays' && value[indexDayOfWeek]) {
      if (value[indexDayOfWeek].isOpen) {
        return (
          <InfoItemText>
            {value[indexDayOfWeek].from} - {value[indexDayOfWeek].to}
          </InfoItemText>
        );
      }
    }
    if (field === 'address') {
      if (value.addressUrl) {
        return (
          <InfoItemLink
            href={value.addressUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'underline' }}
          >
            {value.address}
          </InfoItemLink>
        );
      }

      if (value.address) {
        return <InfoItemText>{value.address}</InfoItemText>;
      }
    }

    if (field === 'email') {
      return <InfoItemLink href={`mailto:${value}`}>{value}</InfoItemLink>;
    }

    if (field === 'phone') {
      return <InfoItemLink href={`tel:${value}`}>{value}</InfoItemLink>;
    }
  }
  return <div>--------------</div>;
}
