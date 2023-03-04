import { useEffect, useState } from 'react';

import { getNews } from '../../services/getNews';
import { Loader } from '../../components/Loader/Loader';
import { NewsList } from '../../components/NewsList/NewsList';
import ContainerPage from '../../components/Container/ContainerPage';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { WrapNews } from './NewsPage.styled';


export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState(true);

  const isNews = Boolean(news.length);

  useEffect(() => {
    setError(null);
    setIsLoading(true);


    async function fetchNews() {
      try {

        
        const result = await getNews({});
        const data = result.data.data;
        console.log(data);

        setNews(prevNews => [...prevNews, ...data]);

        news.length === result.data.total

        ? setDisable(true)
        : setDisable(false);

        if (result.length === 0) {
          throw new Error();
        }

        sortNewsByDate(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, [news.length, page]);

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

  function loadMore() {
    setPage(prevPage => prevPage + 1);
  }



  return (
    <>
      <ContainerPage>
        <WrapNews>
          <SectionTitle text="News" />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <SearchInput functionSearch={searchNews} />
              <NewsList news={news} loadMore={loadMore} isNews={isNews} error={error} disabled={disable}  />
            </>
          )}
          {news.length === 0 && !isLoading && (
            <div style={{ textAlign: 'center' }}>
              No news were found for your request. Enter the search query again.
            </div>
          )}
        </WrapNews>
      </ContainerPage>
    </>
  );
};
