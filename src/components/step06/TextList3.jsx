import React from 'react';
const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  //리스트렌더링에서는 반드시 유일한 키값이 필요하다
  //filter는 원하는거만추출
  function TextList3(props) {
    const chemists = people.filter(person => 
       {return person.profession ==='chemist'}
       
    );
    const listItems = chemists.map(person=>
      {return <li key={person.id}>{person.name}</li>}
    )
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default TextList3;