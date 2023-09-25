import React, { useEffect,  useState } from 'react'
import Newsitem from './Newsitem'
import Spinnner from './Spinnner';
import InfiniteScroll from "react-infinite-scroll-component";


const Newscomp = (props) => {

  const [articles, setArticals] = useState([])
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)




    const updateNews= async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apik}&page=${page}`
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticals(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        setLoading(false)

    }

    useEffect(() => {
        updateNews();
    }, [] )



    const fetchMoreData = async () => {
      
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apik}&page=${page}`
       setPage(page + 1) 
       let data = await fetch(url);
        let parsedata = await data.json();
        setArticals(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)  
       
      };

    
        return (

            <div className="container my-3">
                <h1 className='text-center' style={{marginTop:'50px'}}>TOP NEWS</h1>
                <Spinnner />

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<h4>Loading...</h4>}
                >

                    <div className='row container my-3'>
                        {articles.map((element) => {

                            return <div className='col-md-4' key={element.url}>
                                <Newsitem title={element.title} des={element.description ? element.description.slice(0, 80) : ""} iurl={element.urlToImage} newsurl={element.url} author={element.author? element.author:"unknown"} />
                            </div>

                        })}

                    </div >
                </InfiniteScroll>
                
              
            </div>
        )
   
}

export default Newscomp
