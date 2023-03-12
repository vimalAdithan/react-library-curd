import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  Bookname: yup.string().required().min(5),
  Rating: yup.number().required().min(0).max(10),
  Author: yup.string().required().min(5),
  Image: yup.string().required().min(5),
  Summary: yup.string().required().min(5),
});

export function BookAddForm({ list }) {
  const addUser = (e) => {
    list.push(e);
    navigate("/book");
  };
  const ids = uuid();
  let newid = ids.slice(0, 8);
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        id: newid,
        Bookname: "",
        Rating: "",
        Author: "",
        Image: "",
        Summary: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (e) => {
        addUser(e);
      },
    });

  const navigate = useNavigate();

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
          ADD
        </Button>
      </form>
    </div>
  );
}
