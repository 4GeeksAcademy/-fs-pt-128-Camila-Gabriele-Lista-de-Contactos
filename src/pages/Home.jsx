import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../Service/APIService.js";
import { Form } from "./Form.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		getContacts(dispatch)
	}, [])
	// vimos ejemplo en mentoria
	const newContact = {
		name: "Agustin",
		phone: "548659874",
		email: "agus@hotmail.com",
		address: "Rivas"
	}
	const addContact = () => {
		dispatch({
			type: "add_contact",
			payload: newContact
		})
	}
	
	return (
		<>
			<div className="card mt-3">
				<div className="container">
					{
						store.contacts.map(contact => (
							<div key={contact.id}>
								<h3>Name: {contact.name}</h3>
								<p>Email:{contact.email}</p>
								<p>Phone:{contact.phone}</p>
								<p>Address:{contact.address}</p>
							</div>


						))
					}
				</div>
				<div>
					<button className="btn btn-primary" onClick={addContact}> Create Contact </button>
				</div>
			</div>
		</>
	);
}; 