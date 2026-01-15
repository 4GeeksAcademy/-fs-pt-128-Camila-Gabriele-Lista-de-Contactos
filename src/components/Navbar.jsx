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
		<>
			<div className="container mb-5">
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						{/* <Link to="/"> */}
						<a className="navbar-brand" href="#"> My Contacts</a>
						{/* </Link> */}
					</div>
				</nav>
			</div>
		</>
	);
};