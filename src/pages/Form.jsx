export const Form = () => {


    return (
        <>
            <div className="card align-self-center m-auto" style={{ width: "1200px" }}>
                <div>
                    <h1 className="text-center mt-3"><strong>Add a new contact</strong></h1>
                    <form>
                        <div className="m-auto p-3">
                            <label for="exampleInputName" classNameName="form-label d-flex justify-content-start align-item-start">Full Name</label>
                            <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="m-auto p-3">
                            <label for="exampleInputEmail" className="form-label d-flex justify-content-start align-item-start ">Email</label>
                            <input type="text" className="form-control" placeholder="Enter Email" />
                        </div>
                        <div className="m-auto p-3">
                            <label for="exampleInputPhone" className="form-label d-flex justify-content-start align-item-start ">Phone</label>
                            <input type="text" className="form-control" placeholder="Enter Phone" />
                        </div>
                        <div className="m-auto p-3">
                            <label for="exampleInputAddress" className="form-label d-flex justify-content-start align-item-start ">Address</label>
                            <input type="text" className="form-control" placeholder="Enter Address" />
                        </div>
                    </form>
                        <div classNameName="d-flex justify-content-center align-item-center">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                </div>
            </div>
        </>
    )
}