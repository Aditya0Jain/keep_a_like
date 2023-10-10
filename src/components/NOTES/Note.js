import { useContext } from "react";
import { Delete, Filter } from "@mui/icons-material";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Deleted,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../../context/Dataprovider";
const styledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);
  const archiveNote = (note) => {
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNote);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };
  const deleteNote = (note) => {
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNote);
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };
  return (
    <styledCard>
      <CardContent>
        <Typography>{Note.heading}</Typography>
        <Typography>{Note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <Deleted fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </styledCard>
  );
};
export default Note;
