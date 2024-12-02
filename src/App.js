import React from 'react';
import './App.css';
import CalculatorPage from './components/CalculatorPage';
import CharactersPage from './components/CharactersPage';
import ClassesPage from './components/ClassesPage';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './Root';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Root />}>
		<Route path='/calculator' element={<CalculatorPage />}/>
		<Route path='/characters' element={<CharactersPage />}/>
		<Route path='/classes' element={<ClassesPage />}/>
	</Route>
))


function App() {
  	return (
    	<RouterProvider router={router} />
  	);
}

export default App;
