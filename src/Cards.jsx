export function Cards({ user, deletebutton, editbutton, infobutton }) {
  return (
    <div>
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
        <div className="icons">
          {infobutton}
          {editbutton}
          {deletebutton}
        </div>
      </div>
    </div>
  );
}
