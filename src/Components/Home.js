import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from 'react-bootstrap/Button'

import Navbar from '../Components/Layouts/Navbar'

const Home = () => {
	const history = useNavigate()
	const [users, setusers] = useState([])

	useEffect(() => {
		loadusers()
	}, [])

	const loadusers = async () => {
		const result = await axios.get('http://localhost:3001/users')
		console.log(typeof (result, '14'))
		console.log(result)
		setusers(result.data.reverse())
	}

	const DeleteUser = async (id) => {
		await axios.delete(`http://localhost:3001/users/${id}`)
		loadusers()
		toast.warning('Delete SuccessFully')
	}

	const userLogout = () => {
		// localStorage.removeItem('UserYoutuber')
		history('/login')
	}

	return (
		<>
		<Navbar/>
		<div className='container'>
		
			<div className='py-4'>
				<h1 style={{ textAlign: 'center' }}>React Crud Application</h1>
				<Button className='mb-3' onClick={userLogout}>
					Logout
				</Button>
				<table className='table border shadow'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>User Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Phone NO</th>
							<th scope='col'>Website</th>
							<th
								scope='col'
								style={{
									alignItems: 'center',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							return (
								<tr>
									<th scope='row' key={index.id}>
										{index + 1}
									</th>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.website}</td>
									<td
										style={{
											alignItems: 'center',
											display: 'flex',
											justifyContent: 'center',
										}}
									>
										<Link
											class='btn btn-primary '
											style={{ marginRight: '20px' }}
											to={`/user/${user.id}`}
										>
											<i class='fa-solid fa-eye'></i>
										</Link>

										<Link
											class='btn btn-outline-primary '
											style={{ marginRight: '20px' }}
											to={`/user/edit/${user.id}`}
										>
											<i class='fa-solid fa-pen-to-square'></i>
										</Link>

										<Link
											class='btn btn-danger'
											to='/home'
											onClick={() => DeleteUser(user.id)}
										>
											<i class='fa-solid fa-trash'></i>
										</Link>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
		</>
	)
}

export default Home
