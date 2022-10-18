import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NavLink, useNavigate } from 'react-router-dom'
import SIgn_img from './SIgn_img'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { toast } from 'react-toastify'

const Login = () => {
	const history = useNavigate()
	const [inpval, setInpval] = useState({
		email: '',
		password: '',
	})
	const [data, setData] = useState([])
	const getdata = (e) => {
		const { value, name } = e.target
		setInpval(() => {
			return {
				...inpval,
				[name]: value,
			}
		})
	}

	const addData = (e) => {
		e.preventDefault()

		const { email, password } = inpval

		const getItem = localStorage.getItem('UserYoutuber')
		if (email === '') {
			alert('email field is requried')
		} else if (!email.includes('@')) {
			alert('plz enter valid email address')
		} else if (password === '') {
			alert('password field is required')
		} else if (password.length < 5) {
			alert('password length greater then five')
		} else {
			if (getItem && getItem.length) {
				const userdata = JSON.parse(getItem)
				const userlogin = userdata.filter((el, k) => {
					return el.email === email && el.password === password
				})
				if (userlogin.length === 0) {
					alert('invalid details')
				} else {
					console.log('login successfully')
                    toast.success('Login SuccessFull', {
                        position: 'top-center',
                        theme: 'dark',
                    })
					history('/home')
				}
			}
		}
	}
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>React Crud</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Navbar.Text>
							<NavLink to='/'>SignUp</NavLink>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className='container mt-3'>
				<section className='d-flex justify-content-between'>
					<div className='left_data mt-3 p-3  ' style={{ width: '100%' }}>
						<h3 className='text-center col-lg-6'>Sign IN</h3>
						<Form>
							<Form.Group className='mb-3 col-lg-6' controlId='formBasicEmail'>
								<Form.Control
									type='email'
									name='email'
									placeholder='Enter email'
									onChange={getdata}
								/>
							</Form.Group>

							<Form.Group
								className='mb-3 col-lg-6'
								controlId='formBasicPassword'
							>
								<Form.Control
									type='password'
									name='password'
									placeholder='Password'
									onChange={getdata}
								/>
							</Form.Group>

							<Button
								className='col-lg-6'
								style={{ background: 'rgb(67,185,127' }}
								variant='primary'
								type='submit'
								onClick={addData}
							>
								Submit
							</Button>
						</Form>
						<p className='mt-3'>
							Already Have an Account{' '}
							<span>
								<NavLink to='/'>SignUp</NavLink>
							</span>
						</p>
					</div>

					<SIgn_img />
				</section>
			</div>
		</>
	)
}

export default Login
