export const Form = () => {


    return (
        <>
            <div className="card m-3">
                <div>
                <h1 className="text-center mt-3"><strong>Add a new contact</strong></h1>
                <form>
                    <div className="p-1">
                        <label for="exampleInputName" classNameName="form-label d-flex justify-content-start aling-item-start p-2">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="p-1">
                        <label for="exampleInputEmail" className="form-label d-flex justify-content-start aling-item-start p-2">Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="p-1">
                        <label for="exampleInputPhone" className="form-label d-flex justify-content-start aling-item-start p-2">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter Phone" />
                    </div>
                    <div className="p-1">
                        <label for="exampleInputAddress" className="form-label d-flex justify-content-start aling-item-start p-2">Address</label>
                        <input type="text" className="form-control" placeholder="Enter Address" />
                    </div>
                </form>
                    <div classNameName="d-grid mt-3 p-2">
                        <button type="submit" className="btn btn-primary text-center">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}