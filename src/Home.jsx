import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src="https://api.time.com/wp-content/uploads/2021/10/GettyImages-577674005.jpg"
        alt="library image"
      />
      <div className="home">
        <p>LIBRARY</p>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate("/book")}
          >
            BOOKS
          </Button>
        </Stack>
      </div>
    </div>
  );
}
