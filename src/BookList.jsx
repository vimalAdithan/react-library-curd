import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import { Cards } from "./Cards";
import { useNavigate } from "react-router-dom";

export function BookList({ list, setList }) {
  const navigate = useNavigate();

  const handleEdit = (usr) => {
    localStorage.setItem("User", usr.Bookname);
    localStorage.setItem("Rating", usr.Rating);
    localStorage.setItem("Authorid", usr.Author);
    localStorage.setItem("Dob", usr.Image);
    localStorage.setItem("Phno", usr.Summary);
  };

  const deleteCard = (index) => {
    list.splice(index, 1);
    setList(list);
    navigate("/book");
  };

  return (
    <div>
      <div className="addbtn">
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/book/add")}
        >
          Add Book
        </Button>
      </div>
      <div className="useritems">
        {list.map((usr, index) => (
          <Cards
            key={index}
            user={usr}
            id={index}
            deletebutton={
              <IconButton color="error" onClick={() => deleteCard(index)}>
                <DeleteIcon />
              </IconButton>
            }
            editbutton={
              <IconButton
                color="success"
                onClick={() => {
                  navigate(`/book/edit/${index}`);
                  handleEdit(usr);
                }}
              >
                <CreateIcon />
              </IconButton>
            }
            infobutton={
              <IconButton
                color="secondary"
                onClick={() => navigate(`/book/${index}`)}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
