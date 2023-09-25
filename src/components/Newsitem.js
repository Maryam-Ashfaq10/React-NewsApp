import React from 'react'


const Newsitem = (props) => {
    let { title, des, iurl, newsurl, author } = props;
    return (
      <div>
        <div className="card" >
          <img src={iurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{des}...</p>
            <a  rel="noreferrer" href={newsurl}  target ="_blank" className="btn btn -sm btn-dark">READ MORE</a>
            <p className="card-text"><small className="text-body-secondary">By {author}</small></p>

          </div>
        </div>
      </div>
    )
  
}

export default Newsitem

