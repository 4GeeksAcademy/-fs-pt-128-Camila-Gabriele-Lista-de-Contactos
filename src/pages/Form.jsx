import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addContact, editContacts } from "../Service/APIService";
import useGlobalReducer from "../hooks/useGlobalReducer";



export const Form = ({ title, button }) => {

    const { store, dispatch } = useGlobalReducer()

    const { id } = useParams()
    const navigate = useNavigate()

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    // console.log(contact);
    const [isEditing, setIsEditing] = useState(false);

    const [alert, setAlert] = useState(false);

    const handleInputChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!contact.name || !contact.email || !contact.phone || !contact.address) {
            setAlert(true);
            setTimeout(() => setAlert(false), 2000);
            return;
        }
        if (isEditing) {
           await editContacts(contact, dispatch, navigate)
        } else{
           await addContact(contact, dispatch, navigate);
        }
    }

    const findContact = () => {
        const contactFind = store.contacts.find(contact => { return contact.id === Number(id) })
        // console.log(contactFind);
        setContact(contactFind)

    }

    useEffect(() => {
        if (id) {
            console.log("Estoy editando");
            setIsEditing(true)
            findContact()
        } else {
            console.log("Estoy agregando un nuevo contacto");
            setIsEditing(false)
        }
    }, [])

    return (
        <>
            <div className="card align-self-center m-auto" style={{ width: "1200px" }}>
                <div>
                    <h1 className="text-center mt-3"><strong>{title}</strong></h1>
                    <form onSubmit={handleSubmit}>
                        {alert && (
                            <div className="alert alert-danger" role="alert">
                                All fields are required
                            </div>
                        )}
                        <div className="m-auto p-3">
                            <label htmlFor="exampleInputEmail" className="form-label d-flex justify-content-start align-item-start ">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full name"
                                name="name"
                                value={contact.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="m-auto p-3">
                            <label htmlFor="exampleInputEmail" className="form-label d-flex justify-content-start align-item-start ">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Email"
                                name="email"
                                value={contact.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="m-auto p-3">
                            <label htmlFor="exampleInputPhone" className="form-label d-flex justify-content-start align-item-start ">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone"
                                name="phone"
                                value={contact.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="m-auto p-3">
                            <label htmlFor="exampleInputAddress" className="form-label d-flex justify-content-start align-item-start ">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Address"
                                name="address"
                                value={contact.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <button 
                            type="submit" 
                            className="btn btn-outline-primary col-2" 
                            onChange={handleInputChange}>{button}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};