import React from 'react';

function HeartIconBtn({ chk = false }) {
    function handleFavorite() {
        chk=!chk;
        alert(chk ? "좋아요" : "모르겠어요");
        console.log(chk ? "좋아요" : "모르겠어요");
    }
    return (
        <button className="btn" onClick={handleFavorite}>
            <img
                className="btn_img"
                src={chk ? './img/heart-fill-icon.svg' : './img/heart-icon.svg'}
                alt="좋아요 버튼"
            />
        </button>
    );
}

function CourseItem08({ title, description, image, isFavorite }) {
    return (
        <article className="course">
            <img
                className="course_img"
                src={image}
                alt="강의 이미지"
                style={{ width: "100px", height:"100px"}}
            />
            <div className="course_body">
                <div className="course_title">{title}</div>
                <div className="course_description">{description}</div>
            </div>
            <div className="course_icons">
                <HeartIconBtn chk={isFavorite} />
            </div>
        </article>
    );
}

export default CourseItem08;
