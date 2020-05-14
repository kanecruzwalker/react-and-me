import React from "react";

function Project(props) {
    const {name, description, image} = props;

    return (
        <div className="card">
        <div className="img-container" style={{textAlign: "center", marginTop: "2rem", marginBottom:"2rem"}}>
          <img
            alt={name}
            src={image}
            style = {{width: "18rem",}}
          />
        </div>
        <div className="content">
          <ul>
            <li>
              <h3><strong>Name:</strong> {name}</h3>
            </li>
            <li>
              <h4><u>Description:</u> {description}</h4>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Project;