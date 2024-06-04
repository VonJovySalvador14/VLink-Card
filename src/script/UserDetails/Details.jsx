import "../../stylesheets/UserDetails/details.scss";

function Details({ firstName, lastName, position, company }) {
  return (
    <div className="user-details-container">
      <h1>
        {lastName}, {firstName}
      </h1>
      <h4>{position}</h4>
      <h5>{company}</h5>
    </div>
  );
}

export default Details;
