import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "react-bootstrap";
import "../styles/certificateList.css";
import { IoArrowBack } from "react-icons/io5";
const CertificationList: React.FC = () => {
  const certifications = useSelector((state: RootState) => state.certification.list);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Skills-Based Certifications</h2>
            <p className="text-center">(You can add up to 5 certifications)</p>
            <div className="back-btn mb-2" onClick={() => window.history.back()}><IoArrowBack className="back-icon" /> <span className="back-text">Back</span></div>
      {certifications.length === 0 ? (
        <p className="text-center">No certifications added yet.</p>
      ) : (
        certifications.map((cert,index) => (
          <div key={cert.id} className="listcover p-3 border rounded mb-3">
            <div className="certicaticate-details">
            <p className="m-0 certificate-slno">{index+1}</p>
            <h5 className="m-0 certificate-name">{cert.name}</h5>
            <p  className="m-0">{cert.issuer}</p>
            </div>
            
            <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
              <Button className="view-btn" variant="link">View Certification</Button>
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default CertificationList;
