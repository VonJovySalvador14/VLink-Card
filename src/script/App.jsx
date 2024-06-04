import "../stylesheets/App.scss";
import "../stylesheets/fonts.scss";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import Video from "./background.mp4";

import VideoBackground from "./Background";
import UserPhoto from "./UserDetails/Photo";
import UserDetails from "./UserDetails/Details";
import SocialButtons from "./Social/SocialButtons";
import Loading from "./Loading";

// import { UserData } from "./userData";

function App() {
  const { uid } = useParams();
  const [UserData, setUserData] = useState({});

  useEffect(() => {
    try {
      fetchUser(uid);
    } catch (e) {
      null;
    }
  }, [uid]);

  const fetchUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserData(docSnap.data());
    } else {
      null;
    }
  };

  return (
    <div className="vlink-card-container">
      <div className="background-container">
        <VideoBackground source={Video} />
      </div>

      <div className="vlink-card-wrapper">
        <div className="vlink-card-details-container">
          {Object.keys(UserData).length !== 0 ? (
            <div className="bio-link-wrapper">
              <UserPhoto
                coverPhoto={UserData.cover_photo}
                profilePicture={UserData.profile_picture}
              />

              <UserDetails
                firstName={UserData.first_name}
                lastName={UserData.last_name}
                position={UserData.position}
                company={UserData.company}
              />

              <SocialButtons socialData={UserData} />
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
