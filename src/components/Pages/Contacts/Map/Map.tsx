import React from 'react';
import './Map.scss';

export const Map = () => {
    return (
        <div className='Map'>
            <iframe title="Map"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A07c169c0c7db81faa29fcc1faed2caf7b18c0d0b4c8deb1a72bc862c3b0d25f0&amp;source=constructor"
                width="100%"
                height="400"
                frameBorder="0"></iframe>
        </div>
    )
}