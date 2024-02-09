import React from 'react';
import ReactDOM from 'react-dom/client';

/*REACT ELEMENTS

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
*/
// const heading = React.createElement('h1', { id: 'heading' }, 'Welcome to Medidata's react training');
// console.log(heading);
/*
//JSX
 const jsxHeading = <h1 id='heading>Welcome to Medidata's react training</h1>;
console.log(jsxHeading);
 //JSX is not html inside javascript, jsx provides a feature to create the reactelements similar to the html
 //JSX is HTML like Syntax
 //when we compare the heading and jsxheading both provide the same output as object

*/

//Creating a functional component

const Title = () => {
	return <h1>Welcome to Medidata's React Training</h1>;
}

//simplest way of writing it is so

const HeadingComponent = () => (
	<div id="container">
		<Title />
		<h1 className="heading-class">
			We are learning functional components
		</h1>
	</div>
);

//we render a component wrapped in the brackets
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HeadingComponent />
);
