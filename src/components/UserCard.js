import React from "react";
import { Link } from "react-router-dom";
import {
 
  Button,

} from "reactstrap";

const UserCard = ({ user }) => {
  return (
    





<div className="card">
      
      <div className="card_right">
        <h1> {user.name&&user.name[0]}</h1>
        
        <div className="card_right__rating">
          <p>{user.name}</p>
        </div>
        <div className="card_right__review">
          <p>{user.email}</p>
         </div>
         <div className="card_right__button">
         <Button
              className="btns"
              color="link"
              onClick={(e) => e.preventDefault()}
            >
              <Link className="text-light" to={`/profile/${user.id}`}>
                Go To Profile
              </Link>
            </Button>
        </div>
      </div>
    </div>
  )}
   export default UserCard;
   