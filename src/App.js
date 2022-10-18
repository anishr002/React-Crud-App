import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Layouts/Navbar'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import AddUser from './Components/users/AddUser'
import EditUser from './Components/users/EditUser'
import User from './Components/users/User'
import Error from './Components/Error'
import SignUp from './Components/signUp'
import Login from './Components/Login'

function App() {
	return (
		<>
			<div className='App'>
				
				<Routes>
					<Route path='/' element={<SignUp />} />
					<Route path='/home' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/user/add' element={<AddUser />} />
					<Route path='/*' element={<Error />} />
					<Route path='/user/edit/:id' element={<EditUser />} />
					<Route path='/user/:id' element={<User />} />
				</Routes>

				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
			</div>
		</>
	)
}

export default App
