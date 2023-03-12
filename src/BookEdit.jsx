import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function BookEdit({ ucard }) {
  return ucard ? <EditStudentForm card={ucard} /> : <h1>Loading...</h1>;
}

const formValidationSchema = yup.object({
  Bookname: yup.string().required().min(5),
  Rating: yup.number().required().min(0).max(10),
  Author: yup.string().required().min(5),
  Image: yup.string().required().min(5),
  Summary: yup.string().required().min(5),
});

function EditStudentForm({ card }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [Rating, setRating] = useState("");
  const [Authorid, setAuthorid] = useState("");
  const [dob, setDob] = useState("");
  const [phno, setPhno] = useState("");
  let ucard = card[id];

  const addStudent = (e) => {
    ucard.Bookname = e.Bookname;
    ucard.Rating = e.Rating;
    ucard.Author = e.Author;
    ucard.Image = e.Image;
    ucard.Summary = e.Summary;
    navigate("/book");
  };

  useEffect(() => {
    setUser(localStorage.getItem("User"));
    setRating(localStorage.getItem("Rating"));
    setAuthorid(localStorage.getItem("Authorid"));
    setDob(localStorage.getItem("Dob"));
    setPhno(localStorage.getItem("Phno"));
  }, []);

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        Bookname: ucard.Bookname,
        Rating: ucard.Rating,
        Author: ucard.Author,
        Image: ucard.Image,
        Summary: ucard.Summary,
      },
      validationSchema: formValidationSchema,
      onSubmit: (e) => {
        addStudent(e);
      },
    });

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit} className="full">
        <TextField
          name="Bookname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Bookname}
          label="Bookname"
          size="small"
        />
        {touched.Bookname && errors.Bookname ? errors.Bookname : null}
        <TextField
          label="Rating"
          size="small"
          name="Rating"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Rating}
        />
        {touched.Rating && errors.Rating ? errors.Rating : null}

        <TextField
          label="Author"
          size="small"
          name="Author"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Author}
        />
        {touched.Author && errors.Author ? errors.Author : null}

        <TextField
          label="Image"
          size="small"
          name="Image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Image}
        />
        {touched.Image && errors.Image ? errors.Image : null}

        <TextField
          label="Summary"
          size="small"
          name="Summary"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.Summary}
        />
        {touched.Summary && errors.Summary ? errors.Summary : null}

        <Button variant="contained" size="small" color="success" type="submit">
          UPDATE
        </Button>
      </form>
    </div>
  );
}
