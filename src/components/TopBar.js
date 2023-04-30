import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import '../App.css';

function TopBar({ setQuery }) {
    const [city, setCity] = useState('');

    function handleClick(e) {
        setQuery({ q: city });
        setCity('');
    };

    function handleChange(e) {
        setCity(e.target.value);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQuery({
                    q: `${lat},${lon}`
                });
            });
        }
    }, []);

    return (
        <div className="topContainer">
            <div className="appTitle">
                <h1>Weatherrrrrr App</h1>
            </div>
            <div className="searchContainer">
                <input
                    type="text"
                    className="searchInput"
                    placeholder='Enter city...'
                    value={city}
                    onChange={handleChange}
                />
                <button onClick={handleClick} className="searchButton">
                    <BsSearch size={30} />
                </button>
            </div>
        </div>
    );
}

export default TopBar;