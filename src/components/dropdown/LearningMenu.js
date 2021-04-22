import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "next/link";

export default function LearningMenu() {
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
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Learning
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link href="/about">
          <MenuItem onClick={handleClose}>Learning Center</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Container Camp</MenuItem>
        <MenuItem onClick={handleClose}>FOSS Online</MenuItem>
        <MenuItem onClick={handleClose}>Webinars</MenuItem>
      </Menu>
    </div>
  );
}
