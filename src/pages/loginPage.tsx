import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { Link } from "react-admin";
import Navbar from "../components/navbar";

const LoginPage = () => {
  return (<>
    <Navbar title={"Login Page"} />
    <Container id="loginPage">
      <Paper elevation={3}
        sx={{
          mt: 3,
          p: 3
        }}
      >
        <Link to="/admin">Go to Admin</Link>
      </Paper>
    </Container>
  </>);
}

export default LoginPage;