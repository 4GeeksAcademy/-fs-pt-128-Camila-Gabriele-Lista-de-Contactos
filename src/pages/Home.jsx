import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../Service/APIService.js";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
useEffect(()=>{
	getContacts()
})
	return (
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
	);
}; 