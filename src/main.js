// we want font-awesome to load as soon as possible to show the fa-spinner
import '../styles/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import {Store, rootReducer} from 'model';

// comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });


export async function configure(aurelia) {
    aurelia.use
        .standardConfiguration();

    if (window.env === 'development') {
        aurelia.use
            .developmentLogging();
    }

    await aurelia.start();

    //Create the store
    const storeMiddleware = window.env === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;
    Store.init(rootReducer, undefined, storeMiddleware);

    aurelia.setRoot('app/app');
}
