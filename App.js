import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child1' }, [
		React.createElement('h1', {}, 'we re in child 1'),
		React.createElement('h2', {}, 'we are in heading2 of child1'),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, 'we re in child 2'),
		React.createElement('h2', {}, 'we are in heading2 of child2'),
	]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
