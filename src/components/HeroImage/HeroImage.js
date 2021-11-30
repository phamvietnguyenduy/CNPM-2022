import React from "react";
import { Wrapper, Content,Contain } from "./HeroImage.styles";
import {Click} from "./query.js"
import { useEffect, useState } from "react";
export default function HeroImage({ image }) {
  const [current,setcurren] = useState(0)
  const length=image.length;
  const next=()=>{
    setcurren(current===length-1 ? 0:current+1)
  }
  const prev=()=>{
    setcurren(current===0 ?length -1:current-1)
  }
  console.log(current)
  return (
    <div className='slider'>
        { image.map((item,i)=>{
          return<Wrapper className={i===current ? 'slide active':'slide'} image={item.a} bg={item.bg}>
          <Content className="content">
          <h1>Become an Amateur Fashionista</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, amet et ea corrupti eaque reprehenderit veniam nemo accusamus ipsam unde alias nisi, inventore at incidunt cupiditate expedita minus quos quibusdam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusantium non rerum illo ipsum porro ea. Sunt, at laboriosam? Rerum reiciendis at aperiam eius? Error libero soluta dolorem voluptatibus cupiditate.
            </p>
            <a href="">Read More</a>  
          </Content>
        </Wrapper>
        })
        }
    <div className='nav'>
      <i class="fas fa-step-backward prev"  onClick={next}></i>
      <i class="fas fa-step-forward next"  onClick={next}></i>
    </div>
    <div class="icon">
            <a href=""><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-instagram-square"></i></a>
            <a href=""><i class="fab fa-twitter-square"></i></a>
    </div>
    {Click}
    </div>
  );
}

{/* <Wrapper image={image}>
      <Content>
      
          <input
            type="search"
            class="form-control  search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span> */}
        
    //   </Content>
    // </Wrapper>
    // <Wrapper image={image}>
    //   <Content>
      
    //       <input
    //         type="search"
    //         class="form-control  search"
    //         placeholder="Search"
    //         aria-label="Search"
    //       />
    //       {/* <span class="input-group-text border-0" id="search-addon">
    //         <i class="fas fa-search"></i>
    //       </span> */}
        
    //   </Content>
    // </Wrapper>
    // <Wrapper image={image}>
    //   <Content>
      
    //       <input
    //         type="search"
    //         class="form-control  search"
    //         placeholder="Search"
    //         aria-label="Search"
    //       />
    //       {/* <span class="input-group-text border-0" id="search-addon">
    //         <i class="fas fa-search"></i>
    //       </span> */}
        
    //   </Content>
    // </Wrapper>
    // <Wrapper image={image}>
    //   <Content>
      
    //       <input
    //         type="search"
    //         class="form-control  search"
    //         placeholder="Search"
    //         aria-label="Search"
    //       />
    //       {/* <span class="input-group-text border-0" id="search-addon">
    //         <i class="fas fa-search"></i>
    //       </span> */}
        
    //   </Content>
    // </Wrapper> */}