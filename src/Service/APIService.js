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

const createAgenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Camila`, {
        method: "POST",
    })
    if (response.ok) {
        console.log("Agenda Creada");
    }
}