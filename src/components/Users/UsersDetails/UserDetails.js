import React from 'react';
import Img from '../../UI/Img/Img';
import './UserDetails.scss';

const UserDetails = ({ details }) => {
    console.log("UserDetails redering");
    return (
        <React.Fragment>
            {/* <div className="UserDetails" key={details[0].id}>
                <Img
                    src={details[0].url}
                    fallback={details[0].url}
                    alt={details[0].url}
                />
            </div> */}
            {details.map(item => (
                <div className="UserDetails" key={item.id}>
                    <Img
                        src={item.url}
                        fallback={item.url}
                        alt={item.url}
                    />
                </div>
            ))
            }
        </React.Fragment>
    );
}

export default React.memo(UserDetails);