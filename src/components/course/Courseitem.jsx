import React from 'react';

function Courseitem(props) {

    // const course = {
    //     title: '입문자를 위한, HTML&CSS 웹 개발 입문',
    //     description: '웹 개발에 필요한 기본 지식을 배웁니다.',
    //     image: './img/coffee-blue.jpg',
    //     alt: '강의 이미지'
    //   };



    return (
        // <article className="course">
          
        //     <img className="course__img" src={course.image} alt="" />
        //     <div className="course__body">
        //         <div className="course__title">
        //             <h1>{`이책의 이름은 ${course.title}입니다.`}</h1></div>
        //         <div className="course__description">
        //         <h1>{`이책의 설명은 ${course.description}`}</h1></div>
              
        //     </div>
        // </article>

        //방법2
         <article className="course">
          
         <img className="course__img" src={props.image} alt="" />
         <div className="course__body">
             <div className="course__title">
                 <h1>{`이책의 이름은 ${props.title}입니다.`}</h1></div>
             <div className="course__description">
             <h1>{`이책의 설명은 ${props.description}`}</h1></div>
           
         </div>
     </article>

        
    );
}

export default Courseitem;