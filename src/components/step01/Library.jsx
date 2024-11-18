import React from 'react';
import Book from './Book';

function Library() {
    return (
        <div>
            <Book name = "처음 만난 리액트" numOfPage="300"  imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141023_64%2Fkmts9_1414049753353tMuUJ_JPEG%2F%25C0%25CC%25B8%25A7%25C0%25BB_%25B8%25BB%25C7%25D8%25C1%25E0.JPG&type=sc960_832"/><hr/>
            <Book name = "처음 만난 스프링 부트" numOfPage="550" imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA0MTVfMjAw%2FMDAxNTU1MjkyMTMyODc4.G_aCn7x4hhneZPFtVwl4iYkMqVKESj7STi0--bxD2mgg.LYwhbMmtVmo36i8JOrecakSi44yg_uqWqiWE6P1qNokg.JPEG.adangyj%2F81.jpg&type=a340"/><hr/>
            <Book name = "처음 만난 MySQL" numOfPage="250" imgSrc="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141023_64%2Fkmts9_1414049753353tMuUJ_JPEG%2F%25C0%25CC%25B8%25A7%25C0%25BB_%25B8%25BB%25C7%25D8%25C1%25E0.JPG&type=a340"/><hr/>
        </div>
    );
}

export default Library;