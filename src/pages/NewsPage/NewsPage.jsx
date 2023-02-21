import { useEffect, useState } from 'react';

import { getNews } from '../../services/getNews';
import { Loader } from '../../components/Loader/Loader';
import { NewsList } from '../../components/NewsList/NewsList';
import ContainerPage from '../../components/Container/ContainerPage';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { SearchInput } from '../../components/SearchInput/SearchInput';

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await getNews({});

        if (result.length === 0) {
          throw new Error();
        }

        sortNewsByDate(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  const searchNews = async query => {
    const searchQuery = query.toLowerCase();
    const resultNews = await getNews({});
    const foundNews = resultNews.filter(
      news =>
        news.title.toLowerCase().includes(searchQuery) ||
        news.description.toLowerCase().includes(searchQuery)
    );
    sortNewsByDate(foundNews);
  };

  const sortNewsByDate = array => {
    const addDateForSort = array.map(news => {
      return { ...news, dateForSort: Date.parse(new Date(news.date)) };
    });

    const sortedNewsByDate = addDateForSort.sort(
      (a, b) => b.dateForSort - a.dateForSort
    );

    setNews(sortedNewsByDate);
    setIsLoading(false);
  };

  return (
    <>
      <ContainerPage>
        <SectionTitle text="News" />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <SearchInput functionSearch={searchNews} />
            <NewsList news={news} />
          </>
        )}

        {news.length === 0 && !isLoading && (
          <div style={{ textAlign: 'center' }}>
            No news were found for your request. Enter the search query again.
          </div>
        )}
      </ContainerPage>
    </>
  );
};
