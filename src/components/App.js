import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About
      about = {blogData.about}
      image = {blogData.image}
      />
      <ArticleList data={blogData.posts}/>
    </div>
  );
}

About.defaultProps ={
  image : "https://via.placeholder.com/215"
}

export default App;
