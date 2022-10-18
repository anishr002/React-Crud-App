import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
				<div className='container-fluid'>
					<NavLink className='navbar-brand' to='/home'>
						React User
					</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink className='nav-link ' aria-current='page' to='/home'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/about'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/contact'>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
					<Link className='btn btn-outline-light' to='/user/add'>
						Add User
					</Link>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
