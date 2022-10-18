import React from "react";

function Form(props) {

    var name = props.name;
    var crush = props.crush;

    // function to stop refreshing the form 
    const handleSubmit = event => {
        event.preventDefault();
        // console.log('form submitted ✅');
    };

    return (
        <div style={{ paddingTop: "12%" }}>

            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" value={name}>
                            <label>Your Name</label>
                            <input onChange={props.handleName} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Your Name"></input>
                        </div>
                        <div className="form-group" value={crush}>
                            <label>Your Crush's Name</label>
                            <input onChange={props.handleCrush} type="text" className="form-control" placeholder="Enter Your Crush's Name"></input>
                        </div>
                        <button onClick={props.handleClick} type="submit" className="btn btn-primary">{props.submit}</button>
                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>

        </div>
    );
}

export default Form;