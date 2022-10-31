import Container from "@mui/material/Container";
import Navbar from "../components/navbar";

const PageNotFound = () => {
  return (<>
    <Navbar />
    <Container id="frontPage">
      <h1>Page not found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </Container>
  </>);
}

export default PageNotFound;