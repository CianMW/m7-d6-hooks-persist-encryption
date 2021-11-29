import { useState } from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import clipart from "../imageAssets/clipart329592.png";
import { connect, useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../actions";


//  const mapStateToProps = (state) => ({
//    favouriteArray: state.data.favourites,
//    load : state.jobs.loading
//  })

//  const mapDispatchToProps = (dispatch) => ({
//     favourite: (element) => {
//       dispatch({
//         type: "FAVOURITE",
//         payload: element
//         })
//       },
//     removeFavourite: (element) => {
//       dispatch({
//         type: "REMOVE_FAVOURITE",
//         payload: element
//         })
//       }
//   }) 



const Favourites = ({ result}) => {

  const load = useSelector(state => state.jobs.loading)
  const favouriteArray = useSelector(state => state.data.favourites)


  const dispatch = useDispatch()


  const toggleClick =(element)=> {
   const index = favouriteArray.indexOf(element._id)
   if (index !== -1) {
       dispatch(addToFavourites(element))
   } else {
       dispatch(removeFromFavourites(element))
   }

  };

 const [arrayOfFavourites, setArrayOfFavourites] = useState([]);

 useEffect(() => {
   setArrayOfFavourites(favouriteArray)
 

 }, [favouriteArray]);

  return (
    <div className="total-cover">
      <Container>
      {arrayOfFavourites.length > 0 ? (
        arrayOfFavourites.map((data, i) => (
          <Row className={i % 2 === 0 ? "grayer rounded-jobs" : "whiter rounded-jobs"}>
            <Col sm={6} className="rounded-jobs-left">
              <div>
                <p className="d-flex">
                  <h6>Company Name</h6> : {data.company_name}
                </p>
                <p className="d-flex">
                  <h6>Position</h6> : {data.title}
                </p>
                <p className="d-flex">
                  <h6>Hours</h6> : {data.job_type}
                </p>
                <p className="d-flex">
                  <h6>Category</h6> : {data.category}
                </p>
              </div>
            </Col>
            <Col sm={6} className="rounded-jobs-right">
                <div className="d-flex justify-content-between">
              <Link to={`/company/${data._id}`}>
                <Button>find out more</Button>
              </Link>
              <i className={
             "bi bi-star-fill bubble"
          }
          onClick={() => toggleClick(data)} style={{color: "black", fontSize: "25px", cursor: "pointer"}}></i>
              </div>
            </Col>
          </Row>
        ))
      ) : (
        <>
        <h2>Hmm looks like you don't have any favourites</h2>
        </>
      )}
      </Container>
    </div>
  );
};





export default Favourites;
