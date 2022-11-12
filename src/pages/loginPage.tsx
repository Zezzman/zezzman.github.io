import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const LoginPage = () => {
  return (<>
    <Navbar title={"Login Page"} />
    <Container id="loginPage">
      <Paper variant="outlined"
        sx={{
          mt: 3,
          p: 3,
          borderTop: 'none',
          borderBottom: 'none',
          borderRadius: 0
        }}
      >
        <Link to="/admin">Go to Admin</Link>
      </Paper>
    </Container>
  </>);
}

export default LoginPage;