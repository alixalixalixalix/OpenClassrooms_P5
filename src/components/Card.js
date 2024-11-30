import React from 'react';

const Card = (dataLogement) => {
    return (
        <a href="">
            <article style={{backgroundImage: "url(" + dataLogement.cover + ")"}}>
                <h3>{dataLogement.title}</h3>
            </article>
        </a>
    );
};

export default Card;

