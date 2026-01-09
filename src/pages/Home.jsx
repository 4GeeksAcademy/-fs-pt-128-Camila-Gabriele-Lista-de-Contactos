import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { addContact, deleteContact, getContacts } from "../Service/APIService.js";
import { Form } from "./Form.jsx";
import { ContentCard } from "../components/ContentCard.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		getContacts(dispatch)
	}, [])

	return (
		<>
			<div className="container">
				{
					store.contacts.map(contact => (
						<ContentCard contact={contact} key={contact.id} />
					))
				}
			</div>
			<div className="d-flex justify-content-center">
				<link to="/add">
					<button className="btn btn-outline-primary mt-3" onClick={addContact}> Create Contact </button>
				</link>
			</div >
		</>
	);

}; 