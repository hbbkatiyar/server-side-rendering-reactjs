import React from 'react';

const Home = () => {
    return (
        <div>
            <div>Home component</div>
            <button onClick={() => console.log("click event handler")}>Click Here</button>
        </div>
    );
};

export default Home;
