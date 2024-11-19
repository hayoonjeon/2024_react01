import React from 'react';
import Avatar from './Avatar';

function Profile() {
    return (
        <div>
            <Avatar 
            size={100}
            person={{name:'hong', age:17, imageId: 'YfeOqp2'}}
            />
            <Avatar 
             size={80}
             person={{name:'park', age:57,  imageId: 'OKS67lh'}}
            />
            <Avatar 
             size={60}
             person={{name:'jeon', age:27,   imageId: '1bX5QH6'}}
            />
        </div>
    );
}

export default Profile;