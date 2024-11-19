import CourseItem from "./Courseitem";

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

function CourseListCard({ items }) {
    const [course1, course2, course3] = items;
    return (
        <div className="card">
            <div className="card__header">강의 목록</div>
            <div className="card__body">
                <div className="courses">

                    <CourseItem {...course1} />
                    <CourseItem {...course2} />
                    <CourseItem {...course3} />
                </div>
            </div>
        </div >
    );
}

export default CourseListCard;