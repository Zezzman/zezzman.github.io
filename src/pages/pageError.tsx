import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Navbar from "../components/navbar";

const PageError = (props: any) => {
  const { children } = props;
  return (<>
    <Navbar />
    <Container id="errorPage">
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
          <h1>Something went wrong</h1>
          <p>Sorry, but an error has occurred.</p>
        </>)}
      </Paper>
    </Container>
  </>);
}

export default PageError;