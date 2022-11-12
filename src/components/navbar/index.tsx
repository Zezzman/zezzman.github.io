import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = (props: any) => {
  const { title, children, ...other } = props;
  const appName = "React Portfolio";

  return (
    <Box id="app-navbar" sx={{ flexGrow: 1 }} {...other}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
          }}>
            <Button color="inherit" LinkComponent={NavLink} {...({ to: "/" })} sx={{ textTransform: 'capitalize' }}>
              <Typography variant="h6" component="div">{appName}</Typography>
            </Button>
            {title && (<>
              <pre> - </pre>
              <Typography variant="subtitle1" component="div">{title}</Typography>
            </>)}
          </Box>
          <Button color="inherit" LinkComponent={NavLink} {...({ to: "/login" })}>Login</Button>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;