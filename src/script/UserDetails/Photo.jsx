import "../../stylesheets/UserDetails/photo.scss";

function Photo({ coverPhoto, profilePicture }) {
  return (
    <>
      <div className="cover-container">
        <div className="cover-photo-container">
          <img src={coverPhoto} alt="" className="cover-photo" />
        </div>
      </div>

      <div className="profile-photo-container">
        <div className="profile-photo-wrapper">
          <img src={profilePicture} alt="" className="profile-photo" />
        </div>
      </div>
    </>
  );
}

export default Photo;
