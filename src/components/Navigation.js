import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
                onClick={() => onRouteChange('signin')}
            >Sign  out</button>
        </nav>
    );
}
export default Navigation;