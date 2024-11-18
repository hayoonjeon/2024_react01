// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Courseitem from './components/course/Courseitem';
import CourseListCard from './components/course/CourseListCard';

// function Header() {
//   return(
//     <header>
//       <h2>Header</h2>
//     </header>
//   );
// }
// function Footer() {
//   return(
//     <footer>
//       <h2>Footer</h2>
//     </footer>
//   );
// }
// function Main() {
//   return(
//     <main>
//       <Counter />
//     </main>
//   );
// }

// //파스칼케이스 사용해야한다 (첫글자 대문자, 단어 첫글자들 대문자)
// function Counter() {
//   return (

//     <button>Counter</button>
//   );
// }

// 리액트에선 class는 예약어이기때문에 사용못하고 
// className 사용
function App() {
  return (
    // <main>
    //   <div className="card">
    //     <div className="card__header">강의 목록</div>
    //     <div className="card__body">
    //       <div className="courses">
    //         {/* <Courseitem />
    //         <Courseitem />
    //         <Courseitem /> */}
    //       </div>
    //     </div>
    //   </div>
    // </main>

    <main>
      <CourseListCard/>
    </main>

  );
}

export default App;
