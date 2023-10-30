import "../CSS/ProfilePage.css";

function ProfileItem({ label, value }) {
  return (
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">{label}</h6>
      </div>
      <div className="col-sm-9 text-secondary">{value}</div>
    </div>
  );
}

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <div className="error-message">User data not available</div>;
  }

  return (
    <div className="card my-3" style={{ margin: "auto" }}>
      <div className="card-body">
        <ProfileItem label="Full Name" value={user.name} />
        <hr />
        <ProfileItem label="Email" value={user.email} />
        <hr />
        <ProfileItem label="Mobile" value={user.mobile} />
        <hr />
        <ProfileItem label="Address" value={user.address} />
      </div>
    </div>
  );
}
