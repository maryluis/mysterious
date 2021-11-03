import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../tools';
import NewsCart from './NewsCart';

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  useEffect(() => dispatch(getNews()), []);
  return (
    <div>
      {news.map((item) => <NewsCart key={item.id} title={item.title} text={item.text} />)}
    </div>
  );
};
export default NewsPage;
