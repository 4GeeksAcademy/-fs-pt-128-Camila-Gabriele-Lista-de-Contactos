export const getContacts = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Camila/contacts`)
    console.log(response);
    if (!response.ok) {
        createAgenda()
        return
    }
    const data = await response.json()
    console.log(data);
    dispatch({ type: "set_contacts", payload: data.contacts })
}

export const createAgenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Camila`, {
        method: "POST",
    })
    if (response.ok) {
        console.log("Agenda Creada");
    }
}

export const deleteContact = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Camila/contacts/${id}`, {
        method: "DELETE",
    })
    if (response.ok) getContacts(dispatch)
}

export const editContacts = async (contact, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Camila/contacts/${contact.id}`, {

        method: "PUT",
        body: JSON.stringify(contact),
        headers: {
            "Content-Typer": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
    navigate("/");
}
export const addContact = async (contact, dispatch, navigate) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Camila/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact, dispatch)
    })
    dispatch({ type: "add_contact", payload: data.contacts })
    navigate("/");

    if (!response.ok) {
        alert("ERROR AL CREAR CONTACTO")
        return
    }
    const data = await response.json()
    dispatch({ type: "add_contact", payload: data })
}


//para ver con patricia: no me anda el navigate y no me crea el contacto, ni edita y guarda
