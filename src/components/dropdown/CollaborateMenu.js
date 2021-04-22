import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function CollaborateMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginRight: "2%" }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
      >
        Collaborate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Powered by CyVerse</MenuItem>
        <MenuItem onClick={handleClose}>
          External Collaborative Partnerships
        </MenuItem>
        <MenuItem onClick={handleClose}>Proposal Resources</MenuItem>
        <MenuItem onClick={handleClose}>CyVerse @ UArizona</MenuItem>
        <MenuItem onClick={handleClose}>CyVerse UK</MenuItem>
        <MenuItem onClick={handleClose}>CyVerse AU</MenuItem>
      </Menu>
    </div>
  );
}
