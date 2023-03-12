import { useParams } from "react-router-dom";

export function BookInfo({ list }) {
  const { id } = useParams();
  const user = list[id];
  return (
    <div className="info">
      <div className="userdetails">
        <div className="card">
          <div className="title">
            <img src={user.Image} alt="no" />
          </div>
          <div>
            <div className="name">
              <p>{user.Bookname}</p>
              <p>⭐{user.Rating}</p>
            </div>
            <div className="content">
              <p>{user.Author}</p>
            </div>
          </div>
        </div>
        <p>
          <b> Summary: </b>
          <br />
          {user.Summary}
        </p>
      </div>
    </div>
  );
}
