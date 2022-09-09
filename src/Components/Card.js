import React from 'react'
import ReactStar from 'react-stars'
import "./Card.css"
function Card(props) {
    
    var options ={
        edit: false,
        color: "rgba(20 , 20, 20, 01)",
        activeColor : "yellow",
        size: window.innerWidth <600 ? 20 : 25,
        value: props.rating,
        isHalf: true
    }


  return (
    <>
      <div className='card' style={{borderColor:props.border,backgroundColor:props.bg}}>
        <div className='card-img' >
            {/* <i className='fa-regular fa-heart' style={{color:props.color?"yellow":"white",fontSize:20 }}></i> */}
            <img src={props.img} alt=''></img>
        </div>
        <div className='card-profile'>
            <div className='card-profile-img' >
                <img src={props.profile} alt=''/>
            </div>
            <div className='card-profile-name'>
                <span>{props.name}</span>
                <a href=''><span>view profile</span></a>
            </div>
        </div>
        <div className='card-rating'>
            <span>{props.rating}</span>
            <ReactStar {...options} />
        </div>
        <div className='card-desc'>
            <span>Amet minim mollit non deserunt ullamco est sit.</span>
        </div>
        <div className='card-price'>
            <div className='price'>
                <span style={{fontWeigth:'bold'}}>₹{props.price}</span>
                <span style={{color:'grey'}}>Starting Price</span>
            </div>
            <button className='card-btn'>Select</button>
        </div>
      </div>
    </>
  )
}

export default Card