import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Navbar from "../components/navbar";

const FrontPage = () => {
  return (<>
    <Navbar />
    <Container id="frontPage">
      <Paper variant="outlined"
        sx={{
          mt: 3,
          p: 3,
          borderTop: 'none',
          borderBottom: 'none',
          borderRadius: 0
        }}
      >
        Front page
      </Paper>
    </Container>
  </>);
}

export default FrontPage;