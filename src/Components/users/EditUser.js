import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../Layouts/Navbar'
const EditUser = () => {
	let nevigate = useNavigate()
	const { id } = useParams()
	const [user, setuser] = useState({
		name: '',
		username: '',
		email: '',
		Phone: '',
		website: '',
	})

	const { name, username, email, phone, website } = user

	useEffect(() => {
		loadUser()
	}, [])

	const onInputChange = (e) => {
		// console.log(e.target.value);
		setuser({ ...user, [e.target.name]: e.target.value })
	}

	const OnSubmit = async (e) => {
		e.preventDefault()
		await axios.put(`http://localhost:3001/users/${id}`, user)
		nevigate('/home')
		toast.info('🦄 Update Successfully', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}

	const loadUser = async () => {
		const result = await axios.get(`http://localhost:3001/users/${id}`)
		setuser(result.data)
	}
	return (
		<>
		<Navbar/>
		<div className='container'>
			<div className='w-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>Edit A User</h2>
				<form onSubmit={(e) => OnSubmit(e)}>
					<div className='form-group mb-4'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Name'
							name='name'
							value={name}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group mb-4'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Username'
							name='username'
							value={username}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group mb-4'>
						<input
							type='email'
							className='form-control form-control-lg'
							placeholder='Enter Your E-mail Address'
							name='email'
							value={email}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group mb-4'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Phone Number'
							name='phone'
							value={phone}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group mb-4'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter Your Website Name'
							name='website'
							value={website}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<button className='w-100 btn btn-warning btn-block'>
						Update User
					</button>
				</form>
			</div>
		</div>
		</>
	)
}

export default EditUser
