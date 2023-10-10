import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Swipedrawer from "./Swipedrawer";
import Notes from "./NOTES/Notes";
import Archives from "./archives/Archives";
import DeleteNotes from "./delete/DeleteNotes";
const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <Swipedrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  );
};
export default Home;
