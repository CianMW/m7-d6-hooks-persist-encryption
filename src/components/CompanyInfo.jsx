import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
import clipart from "../imageAssets/clipart329592.png";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const CompanyInfo = () => {
  const params = useParams();
  const [companyInfo, setCompanyInfo] = useState(null);
  const [companyId, setCompanyId] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`
            https://strive-jobs-api.herokuapp.com/jobs?id=${params.companyId}&limit=1
            `);
        if (response.ok) {
          const data = await response.json();
         //console.log("HERE IS THE COMPANY INFO: ", ...data);
          await setCompanyInfo(data);
        } else {
          console.log("ERROR: Couldn't fetch data");
        }
      
    }
    fetchData();
  }, []);

  //setCompanyId(params.companyId)

  return (
    <div className="total-cover-company">
    <Container >
      {companyInfo && companyInfo.data.map((info, i) => 
      <Row >
      <Col className="right-border bottom-border" sm={6}>
          <h3 className="mt-2">Company Information</h3>
          <div>
              <p className="d-flex"><h6>Company Name</h6> : {info.company_name}</p>
              <Col> <a href={`${info.url}`}> <Button>Visit Website</Button></a></Col>
   
          </div>
      </Col>
      <Col className="bottom-border" sm={6}>
      <h3 className="mt-2">Position Information</h3>
         <p className="d-flex"><h6>Required Candidate Location</h6> : {info.candidate_required_location}</p>
              <p className="d-flex"><h6>Position</h6> : {info.title}</p>
              <p className="d-flex"><h6>Hours</h6> : {info.job_type}</p>
              <p className="d-flex"><h6>Category</h6> : {info.category}</p>
      </Col>
      <Col className="mt-2" sm={12}><div className="content" dangerouslySetInnerHTML={{__html: `${info.description}`}}></div></Col>
  </Row>
      
      )}
    </Container>
    </div>
  );
};

export default CompanyInfo;
