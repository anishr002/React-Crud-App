import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Navbar from '../Layouts/Navbar'

const User = () => {
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		phone: '',
		webiste: '',
	})
	const { id } = useParams()
	useEffect(() => {
		loadUser()
	}, [])
	const loadUser = async () => {
		const res = await axios.get(`http://localhost:3001/users/${id}`)
		setUser(res.data)
		toast('User Details', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}
	return (
		<>
		<Navbar/>
		<div className='container py-4'>
			<Link className='btn btn-primary' to='/home'>
				back to Home
			</Link>
			<h1 className='display-4'>User Id: {id}</h1>
			<hr />
			<ul className='list-group w-50'>
				<li className='list-group-item'>name: {user.name}</li>
				<li className='list-group-item'>user name: {user.username}</li>
				<li className='list-group-item'>email: {user.email}</li>
				<li className='list-group-item'>phone: {user.phone}</li>
				<li className='list-group-item'>website: {user.website}</li>
			</ul>
		</div>
		</>
	)
}

export default User
