import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

const [index,setIndex]=useState(0); 
const {name,job,image,text}=people[index]; // we dont want to render all the list,instead we want to render one element each time

// this function checkIndex() will solve the problem that will happen if index is
// bigger than our list length or if it's less than zero which is the
// first index of our array, so we need to check that.
const checkIndex = (number)=>{
  if(number> people.length - 1 ){
    return 0;
  }
  if(number<0){
    return people.length - 1
  }
  return number;
}

const nextReview = ()=>{
  setIndex((index)=>{
let newIndex = index+1;
return checkIndex(newIndex);
  })
}
const prevReview = ()=>{
  setIndex((index)=>{
let newIndex = index-1;
return  checkIndex(newIndex);
  })
}


const randomReview = () => {
  let randomIndex =  Math.floor( Math.random() * people.length);
  if(randomIndex === index){
    randomIndex+=1;
  }
  setIndex(checkIndex(randomIndex)); //we still can face the same problem as the one in the checkIndex()
}


  return <article className="review">
   <div className="img-container"> 
      <img src={image} alt={name} className="person-img"></img>
      <span className="quote-icon">
        <FaQuoteRight></FaQuoteRight>
      </span>
   </div>
   <h4 className="author">{name}</h4>
   <p className="job">{job}</p>
   <p className="info">{text}</p>
   <div className="button-container">
     <button className="prev-btn" onClick={prevReview}>
       <FaChevronLeft></FaChevronLeft>
     </button>
     <button className="next-btn" onClick={nextReview}>
       <FaChevronRight></FaChevronRight>
     </button>  
   </div>
   <button className="random-btn" onClick={randomReview}>
      surprise me
     </button>
  </article>;
};

export default Review;
