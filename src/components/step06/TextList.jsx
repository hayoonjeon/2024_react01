import React from 'react';
const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  export default function TextList(props) {

   const listItems = people.map(k=>
        <li>{k}</li>
    );

    return <ul>{listItems}</ul>;
}
