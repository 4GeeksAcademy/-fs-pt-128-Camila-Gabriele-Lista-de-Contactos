import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { addContact, deleteContact, getContacts } from "../Service/APIService.js";


export const ContentCard = ({ contact }) => {

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
                                    <button className="btn">
                                        <i className="fa-solid fa-pencil"></i>
                                    </button>
                                    <button
                                        className="btn"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#deleteModal-${contact.id}`}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
                <div className="modal fade" id={`deleteModal-${contact.id}`} tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm deletion</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete <strong>{contact.name}</strong>?</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                    onClick={() => deleteContact(contact.id, dispatch)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}






//                       


//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Estructura del Modal (Fuera de la card para evitar problemas de capas/z-index) */}
//             <div className="modal fade" id={`deleteModal-${contact.id}`} tabIndex="-1" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">Confirmar borrado</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <p>Are you sure you want to delete <strong>{contact.name}</strong>?</p>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
//                             <button
//                                 type="button"
//                                 className="btn btn-danger"
//                                 data-bs-dismiss="modal"
//                                 onClick={() => deleteContact(contact.id, dispatch)}
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };