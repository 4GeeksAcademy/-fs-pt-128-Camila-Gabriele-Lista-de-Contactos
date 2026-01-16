import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { addContact, deleteContact, getContacts } from "../Service/APIService.js";
import { ContentCard } from "../components/ContentCard.jsx";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		getContacts(dispatch)
	}, [])

	return (
		<>
			<div className="container">
				{
					store.contacts?.map(contact => (
						<ContentCard contact={contact} key={contact.id} />
					))
				}
			</div>
			<div className="d-flex justify-content-center">
				<Link to="/add">
					<button className="btn btn-dark mt-3"> Create Contact </button>
				</Link>
			</div >
		</>
	);

}; 