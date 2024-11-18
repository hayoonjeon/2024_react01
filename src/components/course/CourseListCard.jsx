import React from 'react';
import Courseitem from './Courseitem';

function CourseListCard() {
    return (
        <>
            <div className="card">
                <div className="card__header">강의 목록</div>
                <div className="card__body">
                    <div className="courses">

                    <Courseitem 
                    title="입문자를 위한, HTML&CSS 웹 개발 입문" 
                    description="웹 개발에 필요한 기본 지식을 배웁니다." 
                    image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141023_64%2Fkmts9_1414049753353tMuUJ_JPEG%2F%25C0%25CC%25B8%25A7%25C0%25BB_%25B8%25BB%25C7%25D8%25C1%25E0.JPG&type=sc960_832" />
                    <Courseitem 
                    title="초급자를 위한 , JavaScript 기초" 
                    description="JavaScript의 기본 지식을 배웁니다" 
                    image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA0MTVfMjAw%2FMDAxNTU1MjkyMTMyODc4.G_aCn7x4hhneZPFtVwl4iYkMqVKESj7STi0--bxD2mgg.LYwhbMmtVmo36i8JOrecakSi44yg_uqWqiWE6P1qNokg.JPEG.adangyj%2F81.jpg&type=a340"/>
                    <Courseitem 
                    title="중급자를 위한 React 개발 과정" 
                    description="React에 필요한 지식을 배웁니다." 
                    image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141023_64%2Fkmts9_1414049753353tMuUJ_JPEG%2F%25C0%25CC%25B8%25A7%25C0%25BB_%25B8%25BB%25C7%25D8%25C1%25E0.JPG&type=a340"/>
                   
                    </div>
                </div>
            </div >
        </>
    );
}

export default CourseListCard;