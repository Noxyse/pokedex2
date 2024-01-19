import React from 'react';

const ClickableImage = ({ imageUrl, name }) => {
    return (
        <div className="pokemon-card">
            <img
                src={imageUrl}
                alt={name}
                style={{ width: '100px', height: '100px' }}
            />
            <p>{name}</p>
        </div>
    );
};

export default ClickableImage;
