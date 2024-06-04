import "../../stylesheets/Social/socialbuttons.scss";

import { Grid } from "@mui/material";

import Common from "./Common";

import IconMessenger from "../../assets/icons/messenger.svg";
import IconFacebook from "../../assets/icons/facebook.svg";
import IconViber from "../../assets/icons/viber.svg";
import IconWhatsapp from "../../assets/icons/whatsapp.svg";
import IconTelegram from "../../assets/icons/telegram.svg";
import IconLinkedin from "../../assets/icons/linkedin.svg";

const _rendersociallogo = (logo) => {
  switch (logo) {
    case "messenger":
      return <img src={IconMessenger} className="social-button-svg" alt="" />;
    case "facebook":
      return <img src={IconFacebook} className="social-button-svg" alt="" />;
    case "viber":
      return <img src={IconViber} className="social-button-svg" alt="" />;
    case "whatsapp":
      return <img src={IconWhatsapp} className="social-button-svg" alt="" />;
    case "telegram":
      return <img src={IconTelegram} className="social-button-svg" alt="" />;
    case "linkedin":
      return <img src={IconLinkedin} className="social-button-svg" alt="" />;
  }
};

function SocialButtons({ socialData }) {
  return (
    <div className="social-container">
      <Common email={socialData.email} phone={socialData.phone} />

      <div className="social-button-container">
        <Grid container spacing={2} justifyContent="center">
          {Object.entries(socialData.social).map(([key, value]) =>
            value ? (
              <Grid item key={key}>
                <a href={value}>
                  <div className={"color-" + key + " social-button"}>
                    {_rendersociallogo(key)}
                  </div>
                </a>
              </Grid>
            ) : null
          )}
        </Grid>
      </div>
    </div>
  );
}

export default SocialButtons;
