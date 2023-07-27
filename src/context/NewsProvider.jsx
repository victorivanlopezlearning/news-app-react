import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

  return (
    <NewsContext.Provider
      value={{}}
    >
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext;