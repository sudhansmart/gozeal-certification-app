import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCertification } from "../redux/certificationSlice";
import { useNavigate } from "react-router-dom";
import {Col, Row,Form as BootstrapForm,} from "react-bootstrap";
import "../styles/certificateform.css";
import { FiUpload } from "react-icons/fi";
import { PiCertificate } from "react-icons/pi";

const CertificationForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Certification name is required"),
    issuer: Yup.string().required("Issuer is required"),
    file: Yup.mixed()
      .required("Please upload a certification file")
      .test("fileFormat", "Only PDF and JPG files are allowed", (value: any) => {
        if (!value) return false;
        return value && ["application/pdf", "image/jpeg"].includes(value.type);
      }),
  });

  const handleSubmit = (values: any) => {
    const newCertification = {
      id: Date.now(),
      name: values.name,
      issuer: values.issuer,
      fileUrl: fileUrl || "",
    };
    dispatch(addCertification(newCertification));
    navigate("/list");
  };

  return (
    <div className="CertificateForm container mt-4">
    
      <h2 className="text-center">Skills-Based Certifications</h2>
      <p className="text-center">(You can add up to 5 certifications)</p>

      <Formik
        initialValues={{ name: "", issuer: "", file: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        
        {({ setFieldValue, handleChange,values, touched, errors }) => (
          <Form className="CertificateForm-formfield">
            <div className="mb-3 d-flex justify-content-end">
            <div className="certificate-iconcover" onClick={() => navigate("/list")}>
              <span>View</span> <PiCertificate size={20} className="certificate-icon"  />
             </div>
            </div>
            <Row className="mb-3">
              <BootstrapForm.Group as={Col} md="6" controlId="validationFormik01">
                <BootstrapForm.Label>Certification Name</BootstrapForm.Label>
                <Field
                  type="text"
                  name="name"
                  className={`form-control ${touched.name && errors.name ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                <ErrorMessage name="name" component="div" className="invalid-feedback" />
              </BootstrapForm.Group>

              <BootstrapForm.Group as={Col} md="6"  controlId="validationFormik02">
                <BootstrapForm.Label>Issuer</BootstrapForm.Label>
                <Field
                  type="text"
                  name="issuer"
                  className={`form-control ${touched.issuer && errors.issuer ? "is-invalid" : ""}`}
                  onChange={handleChange}
                />
                <ErrorMessage name="issuer" component="div" className="invalid-feedback" />
              </BootstrapForm.Group>
            </Row>

            <BootstrapForm.Group as={Col} md="12" className="file-upload-container">
                  <div className="file-upload-wrapper">
                    <label className="file-upload-label" hidden>Upload a file showing your certification</label>
                    <div className="file-upload-input">
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden-input"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          const file = event.target.files?.[0];
                          if (file) {
                            setFieldValue("file", file);
                            setFileUrl(URL.createObjectURL(file));
                          }
                        }}
                      />
                      <div className="file-upload-box">
                        <span>{values.file ?(values.file as { name: string }).name : "Upload a file showing your certification"}</span>
                        <label htmlFor="fileInput" className="file-upload-btn">
                          UPLOAD  <FiUpload className="ms-2" size={18}/>
                        </label>
                      </div>
                    </div>
                  </div>
                  <p className="file-format-note">(File format should be only pdf and jpg)</p>
                  <ErrorMessage name="file" component="div" className="text-danger mt-1" />
        </BootstrapForm.Group>
            <div className="d-flex justify-content-end mt-3">
                 <button type="submit" className="submit-btn" >
                   Save Certification
                 </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CertificationForm;
