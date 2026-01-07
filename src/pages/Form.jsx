export const Form = () => {


    return (
        <>
            <h1><strong>Add a new contact</strong></h1>
            <form>
                <div className="mb-3 p-2">
                    <label for="exampleInputName" classNameName="form-label d-flex justify-content-start aling-item-start p-2">Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="mb-3 p-2">
                    <label for="exampleInputEmail" className="form-label d-flex justify-content-start aling-item-start p-2">Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email" />
                </div>
                <div className="mb-3 p-2">
                    <label for="exampleInputPhone" className="form-label d-flex justify-content-start aling-item-start p-2">Phone</label>
                    <input type="text" className="form-control" placeholder="Enter Phone" />
                </div>
                <div className="mb-3 p-2">
                    <label for="exampleInputAddress" className="form-label d-flex justify-content-start aling-item-start p-2">Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" />
                </div>
                <div classNameName="d-grid gap-2 p-2">
                    <button type="submit" className="btn btn-primary ">Save</button>
                </div>
            </form>
        </>
    )
}