import React from 'react';

function CourseItem({title,description,image}) {
    return (
        <article className="course">
            <img className="course__img" src={image} alt="" />
            <div className="course__body">
                <div className="course__title">
                    <h1>{`이책의 이름은 ${title}입니다.`}</h1></div>
                <div className="course__description">
                    <h1>{`이책의 설명은 ${description}`}</h1></div>

            </div>
        </article>
    );
}
export default CourseItem;