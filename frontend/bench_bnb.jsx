import React from 'react';
import ReactDOM from 'react-dom';

document.addEvetListener('DOMContentLoaded', ()=>{
	const root = document.getElementById('root');
	ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});