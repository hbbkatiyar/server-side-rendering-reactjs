// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('../client/components/Home').default;

// OR 

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
                {/* <Routes /> */}
            </StaticRouter>
        </Provider>
    );
    return `
        <html>
            <head><head>
            <body>
                <div id="root"> ${content} </div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
