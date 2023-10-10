import * as React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import {
  NoteAdd as Noteadd,
  ArchiveOutlined as Archive,
  Delete as Trash,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Navlist = () => {
  const navlist = [
    { id: 1, name: "Notes", icon: <Noteadd />, route: "/" },
    { id: 2, name: "Archive", icon: <Archive />, route: "/archive" },
    { id: 3, name: "Trash", icon: <Trash />, route: "/delete" },
  ];
  return (
    <List>
      {navlist.map((list) => (
        <ListItem Button key={list.id}>
          <Link
            to={list.route}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
export default Navlist;
