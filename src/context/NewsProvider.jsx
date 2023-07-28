import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=12&apiKey=${import.meta.env.VITE_API_KEY}`;
      const { data } = await axios(url);
      setNews(data.articles);
    }
    getNews();
  }, [category])


  const changeCategory = (e) => {
    setCategory(e.target.value);
  }

  return (
    <NewsContext.Provider
      value={{
        category,
        changeCategory,
        news,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext;