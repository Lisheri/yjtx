import React from 'react';
import './Spinner.scss';
const Spinner = ({ fullScreen = false }) => {
    return (
        <div className={ fullScreen ? 'spinner-point full-screen' : 'spinner-point' }>
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
