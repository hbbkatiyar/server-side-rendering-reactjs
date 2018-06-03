import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config'; // This is used to load data without loading component
import Routes from './client/Routes';
import renderer from './helpers/renderer'; 
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        // call loadData function, passing in the redux store
        // loadData function manually dispatch action creator
        // loadData function return a promise
        // wait for promise to resolve
        // Render application 

        return route.loadData ? route.loadData(store) : null;
    });

    console.log(promises);

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });    
});

app.listen(3000, () => {
    console.log("listening on port: 3000");
});
