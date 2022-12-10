import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from './components/Users';
import AppContent from './components/AppContent';
import "./style/index.css";
import AddUser from './components/AddUser';

function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<BrowserRouter >
			<div className="App">
				<AppContent />
				<Routes>
					<Route path="/" element={<Navigate to="/users" />} />
					<Route path='/profile' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Profile</h1>
						</div>
					} />
					<Route path='/users' element={

						<Users />

					} />
					<Route path='/user/add' element={
						<AddUser />
					} />
					<Route path='/others' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Not Available</h1>
						</div>
					} />

				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
