import React from 'react';
import ReactDOM from 'react-dom';
import App from '.app';

it('renders without crashig', () => {
const div = document.createElement('div');
ReactDOM.render(<app />,  div);
ReactDOM.unmountComponentAtNode(div);

});