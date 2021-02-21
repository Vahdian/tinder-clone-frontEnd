import React from "react";
import "./Header.scss";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum"
export function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="Header__Icon" fontSize="large"></PersonIcon>
      </IconButton>
      <img
        className="header__logo"
        src="https://www.graphicsprings.com/filestorage/stencils/cf75344a12486bda35308b68e61184d3.png?width=500&height=500"
        alt=""
      >
     </img>
     <IconButton>
         <ForumIcon className="Header__Icon" fontSize="large">></ForumIcon>
     </IconButton>
    </div>
  );
}
