import axios from "axios";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ProgressBar,
} from "react-bootstrap";

export function UploadImage() {
  const [selectedFiles, setSelectedFiles] = useState<any>();
  const [progress, setProgress] = useState(0);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault(); //prevent the form from submitting
    let formData = new FormData();

    formData.append("file", selectedFiles[0]);
    axios.post("/upload_file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (data) => {
        //Set the progress value to show the progress bar
        setProgress(Math.round((100 * data.loaded) / data?.total!));
      },
    });
  };
  return (
    <Container>
      <Row>
        <Col lg={{ span: 4, offset: 3 }}>
          <Form.Group>
            <Form.Control
              id="exampleFormControlFile1"
              name="file"
              type="file"
              onChange={(e) => {
                setSelectedFiles(e.target.value as any);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Button
              variant="info"
              type="submit"
              onClick={() => console.log("hi")}
            >
              Upload
            </Button>
          </Form.Group>
          {progress && <ProgressBar now={progress} label={`${progress}%`} />}
        </Col>
      </Row>
    </Container>
  );
}
