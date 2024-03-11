import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)
    
    
  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=295f3561a5e84c73b23857126e06de08&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `NewsMonkey - ${capitalizeFirstLetter(
        props.category
      )}`;
  updateNews();

},[])
 

//   handleNextClick = async () => {
//     // if (
//     //   this.state.page + 1 >
//     //   Math.ceil(this.state.totalResults / props.pageSize)
//     // ) {
//     // } else {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=295f3561a5e84c73b23857126e06de08&page=${
//     //     this.state.page + 1
//     //   }&pageSize=${props.pageSize}`;
//     //   this.setState({ loading: true });
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();
//     //   console.log(parsedData);
//     //   this.setState({
//     //     page: this.state.page + 1,
//     //     articles: parsedData.articles,
//     //     loading: false,
//     //   });
//     // }
//     this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   };

//   handlePreviousClick = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=295f3561a5e84c73b23857126e06de08&page=${
//     //   this.state.page - 1
//     // }&pageSize=${props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // console.log(parsedData);
//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false,
//     // });
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };
 const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=295f3561a5e84c73b23857126e06de08&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };

  
    return (
      <>
        <h1 className="text-center py-4" style={{marginTop:"70px"}}>
          NewsMonkey - Top HeadLines from{" "}
          {capitalizeFirstLetter(props.category)}
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {articles.map((element,index) => {
                return (
                  <div className="col-md-3" key={`${element.url}-${index}`}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unkown"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );

}

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "sports",
  };
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;
