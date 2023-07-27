import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');

  const changeCategory = (e) => {
    setCategory(e.target.value);
  }

  return (
    <NewsContext.Provider
      value={{
        category,
        changeCategory,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext;