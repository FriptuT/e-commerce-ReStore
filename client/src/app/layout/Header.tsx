import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  ListItem,
  Switch,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          dispaly: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display='flex' alignItems='center'>
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            TEODOR's SHOP
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>

        <ul className="mid">
          {midLinks.map((link) => (
            <ListItem
              component={NavLink}
              to={link.path}
              key={link.path}
              sx={navStyles}
            >
              {link.title.toUpperCase()}
            </ListItem>
          ))}
        </ul>

        <Box display='flex' alignItems='center'>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="3" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <ul className="right">
            {rightLinks.map((link) => (
              <ListItem
                component={NavLink}
                to={link.path}
                key={link.path}
                sx={navStyles}
              >
                {link.title.toUpperCase()}
              </ListItem>
            ))}
          </ul>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
