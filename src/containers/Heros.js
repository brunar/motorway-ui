import React, { useEffect, useState, useCallback } from 'react';
import './Heros.scss';

import Users from '../components/Users/Users';
import UserDetails from '../components/Users/UsersDetails/UserDetails';

const Heros = () => {

    const [images, setImages] = useState();
    const [imageDetails, setImageDetails] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/images?limit=10')
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                setImages(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, []);


    const handleClick = useCallback(index => {
        const itemSelected = images.filter(i => i.id === index)
        console.log("handle click redering");
        setImageDetails(itemSelected);
    }, [images]);


    let userList = null;
    if (images) {
        userList = <Users
            imagesUsers={images}
            clicked={handleClick} />
    }

    let showUserDetails = null;
    if (imageDetails) {
        showUserDetails = <UserDetails details={imageDetails} />
    }

    return (
        <div className="Heros">
            {/* <ProfileForm /> */}

            {loading && <p>Loading Heros....</p>}

            {/* {(!imageItem) ? <p>loading Details</p> : <p>select an image</p>} */}
            {userList}

            {showUserDetails}

        </div >
    );
}

export default Heros;
