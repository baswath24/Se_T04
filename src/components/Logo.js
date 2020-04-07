import React from 'react';
import Tilt from 'react-tilt';
import brain from './logo.png';
import { findByLabelText } from '@testing-library/react';
const Logo = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img src={brain}></img> </div>
            </Tilt>
        </div>


    );
}
export default Logo;