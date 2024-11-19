import React from 'react';

function HeartIconBtn({ isFavorite = false }) {
    if (isFavorite) {
        return (
            <button className="btn">
                <img className="btn_img" src="./img/heart-fill-icon.svg" />
            </button>
        )
    }
    return (
        <button className="btn">
            <img className="btn_img" src="./img/heart-icon.svg" />
        </button>
    )
}

function CourseItem({ title, description, image,isFavorite }) {
    return (
        <article className="course">
            <img className="course__img" src={image} alt="" />
            <div className="course__body">
                <div className="course__title">
                    <h1>{`이책의 이름은 ${title}입니다.`}</h1></div>
                <div className="course__description">
                    <h1>{`이책의 설명은 ${description}`}</h1></div>
            </div>
            <div className='course_icons'>
            <HeartIconBtn isFavorite={isFavorite}/>
            </div>
        </article>
    );
}
export default CourseItem;