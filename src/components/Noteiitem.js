import React from 'react'

export default function  (props) {
    const {item}=props;
    console.log(item);
  return (
    <div className='col-md-3 '>
     <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <div className='icon-con'>
    <i className="fa-solid fa-trash "></i>
    <i className="fa-solid fa-file-pen"></i>
    </div>
  </div>
</div>
    </div>
  )
}
