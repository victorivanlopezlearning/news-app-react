import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNews, setTotalNews] = useState(0);

  useEffect(() => {
    const getNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=12&apiKey=${import.meta.env.VITE_API_KEY}`;
      const { data } = await axios(url);
      setNews(data.articles);
      setTotalNews(data.totalResults);
      setCurrentPage(1);
    }
    getNews();
  }, [category])

  useEffect(() => {
    const getNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${currentPage}&category=${category}&pageSize=12&apiKey=${import.meta.env.VITE_API_KEY}`;
      const { data } = await axios(url);
      setNews(data.articles);
      setTotalNews(data.totalResults);
    }
    getNews();
  }, [currentPage])


  const changeCategory = (e) => {
    setCategory(e.target.value);
  }

  const changePage = (e, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  }


  return (
    <NewsContext.Provider
      value={{
        category,
        changeCategory,
        news,
        totalNews,
        changePage,
        currentPage,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext;