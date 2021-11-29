import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
  FormGroup,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { connect } from "react-redux";
import { fetchJobsAction } from "../actions/index.js";
import { useSelector, useDispatch } from "react-redux";


// const mapStateToProps = (state) => ({
//   jobsArray : state.jobs.content
// })

// //setJobs takes a url as payload and uses it as props
// const mapDispatchToProps = (dispatch) => ({
//   setJobs: (url) => {
//     dispatch(fetchJobsAction(url))
//   }
// });

const JobSearch = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const jobsArray = useSelector(state => state.jobs.content)
  const dispatch = useDispatch()
  const fetchData = async () => {
    if (query.length > 3 && category) {
       dispatch(fetchJobsAction(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&category=${category}&limit=10`
      ));
    } else if (query.length > 3) {
       dispatch(fetchJobsAction(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10`
      ));
    } else {
         dispatch(fetchJobsAction(`https://strive-jobs-api.herokuapp.com/jobs?limit=10`));
    }
   console.log("HERE'S THE REDUX STATE JOBS ARRAY", jobsArray)
  };
  
  useEffect(() => {
    console.log("this is the query:", query);
    console.log("this is the category:", category);

    fetchData();
  }, [query]);

  useEffect(() => {
    console.log("this is the query:", query);
    console.log("this is the category:", category);
    if (!searchResult) {
      fetchData();
    }
  }, []);

  const spreadData = [...jobsArray]

  return (
    <div className="total-cover-company">
      <div className="head-background">
        <Container className="p-2">
          <Row>
            <Col sm={6}>
              <h2>Search for your new future today!</h2>
            </Col>
            <Col sm={6}>
              {" "}
              <FormGroup className="search-group">
                <Form inline className="d-flex">
                  <FormControl
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button
                    onClick={() => console.log(spreadData)}
                    variant="outline-info"
                  >
                    Search
                  </Button>
                </Form>
                <Form>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Select Category</Form.Label>
                    <Form.Control
                      as="select"
                      onSelect={(e) => setCategory(e.target.value)}
                      custom
                    >
                      <option></option>
                      <option>All Others</option>
                      <option>Business</option>
                      <option>Data</option>
                      <option>Marketing</option>
                      <option>Finance / Legal</option>
                      <option>Product</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        {jobsArray && <SearchResults result={spreadData} />}
      </Container>
    </div>
  );
};

export default JobSearch;
