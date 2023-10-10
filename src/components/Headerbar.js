import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: black;
  font-size: 24px;
  margin-left: 25px;
`;

const HeaderBar = ({ open, handleDrawer }) => {
  const logo =
    "https://media.istockphoto.com/id/1161405325/vector/pencil-icon-isolated-of-flat-style.jpg?s=612x612&w=0&k=20&c=UvRnN79GjWPIT4o28k232_mG05G_-3GNxL8deiNqmyk=";

  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: "20px" }}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: 30 }} />
        <Heading>keep-a-like</Heading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
