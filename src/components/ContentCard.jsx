import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { addContact, deleteContact, getContacts } from "../Service/APIService.js";


export const ContentCard = ({contact}) => {

    const { store, dispatch } = useGlobalReducer()
    // useEffect(() => {
    //     getContacts(dispatch)
    // }, [])

    // const [contact, setContact] = useState({
    //     name: "Agustin",
    //     email: "dasda",
    //     phone: "dada",
    //     address: "dada"
    // })
    // console.log(contact);

    // const addContact = () => {
    //     dispatch({
    //         type: "add_contact",
    //         payload: newContact
    //     })
    // }

    return (
        <>
            <div className="card mt-3 p-3">
                <div className="container">
                    {
                        <div>
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
                                    {/* <link to={`/edit/${contact.id}`}> */}
                                    <button className="btn" ><i className="fa-solid fa-pencil"></i></button>
                                    {/* </link> */}
                                    <button className="btn" onClick={() => deleteContact(contact.id, dispatch)}><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
           
        </>
    )
}