import React from 'react';

const Img = ({
    src,
    fallback,
    type = 'image/webp',
    alt,
    ...props
}) => {
    return (
        <picture>
            <source srcSet={`${src}.webp`} type={type} />
            <img src={`${fallback}.jpg`} alt={alt} {...props} />
        </picture>
    );
};

export default Img;