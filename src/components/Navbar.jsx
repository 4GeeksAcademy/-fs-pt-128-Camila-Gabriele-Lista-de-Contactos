import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
	//lo vimos en mentoria con Robert para entender como funciona
	// const { store, dispatch } = useGlobalReducer()
	// const newContact = {
	// 	name: "Agustin",
	// 	phone: "548659874",
	// 	email: "agus@hotmail.com",
	// 	address: "Rivas"
	// }

	// const addContact = () =>{
	// 	dispatch({
	// 		type: "add_contact",
	// 		payload: newContact
	// 	})
	// }
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Create Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};