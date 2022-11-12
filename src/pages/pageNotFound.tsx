import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Navbar from "../components/navbar";

const PageNotFound = (props: any) => {
  const { children } = props;
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
        {children ? children : (<>
          <h1>Page not found</h1>
          <p>Sorry, but the page you were trying to view does not exist.</p>
        </>)}
      </Paper>
    </Container>
  </>);
}

export default PageNotFound;