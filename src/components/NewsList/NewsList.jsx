import {
  List,
  ListItem,
  Title,
  Description,
  Info,
  Date,
  Link,
} from './NewsList.styled';

export const NewsList = ({ news }) => {
  return (
    <>
      <List>
        {news.map(({ _id, title, description, date, url }) => (
          <ListItem key={_id}>
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Info>
                <Date>{date}</Date>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Read more
                </Link>
              </Info>
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
};
