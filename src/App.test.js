import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
