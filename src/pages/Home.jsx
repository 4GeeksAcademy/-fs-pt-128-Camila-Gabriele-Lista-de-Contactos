import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { deleteContact, getContacts } from "../Service/APIService.js";
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
			<div className="card mt-3 p-3">
				<div className="container">
					{
						store.contacts.map(contact => (
							<div key={contact.id}>
								<div className="d-flex justify-content-between">
									<div className="d-flex justify-content-start">
										<img src="https://s1.r29static.com/bin/entry/e37/720x864,85/1887474/image.webp" className="object-fit-cover rounded-circle" style={{ width: "240px", height: "240px" }} alt="..."></img>
										<div className="m-3">
											<h3>{contact.name}</h3>
											<p><i className="fa-solid fa-envelope m-1"></i>{contact.email}</p>
											<p><i className="fa-solid fa-phone m-1"></i>{contact.phone}</p>
											<p><i className="fa-solid fa-location-dot m-1"></i>{contact.address}</p>
										</div>
									</div>
									<div className="">
										<button className="btn" ><i className="fa-solid fa-pencil"></i></button>
										<button className="btn" onClick={() => deleteContact(contact.id)}><i className="fa-solid fa-trash"></i></button>
									</div>
								</div>
								<hr></hr>
							</div>
						))
					}
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<button className="btn btn-outline-primary mt-3" onClick={addContact}> Create Contact </button>
			</div>
		</>
	);
}; 