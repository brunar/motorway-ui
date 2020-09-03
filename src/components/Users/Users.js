import React from 'react';
import Img from '../UI/Img/Img';
import './Users.scss';

const Users = (props) => {
    console.log("UserList redering");
    return (
        <div className="user">
            {
                props.imagesUsers.map((img) => (
                    <div onClick={props.clicked.bind(this, img.id)} className="user-item" key={img.id}>
                        <Img
                            src={img.user.profile_image}
                            fallback={img.user.profile_image}
                            alt={img.user.name}
                        />
                        <p>{img.user.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;