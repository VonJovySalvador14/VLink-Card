/* eslint-disable react/prop-types */
import "../../stylesheets/Social/common.scss";

import Grid from "@mui/material/Grid";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

function Common({ email, phone }) {
  return (
    <>
      <div className="social-title">CONNECT WITH ME</div>

      <div className="social-button-container">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <a href={"mailto:" + email}>
              <div className="color-generic social-button">
                <EmailOutlinedIcon
                  sx={{ fontSize: 30 }}
                  className="social-button-icon"
                />
              </div>
            </a>
          </Grid>

          <Grid item>
            <a href={"tel:" + phone}>
              <div className="color-generic social-button">
                <PhoneOutlinedIcon
                  sx={{ fontSize: 30 }}
                  className="social-button-icon"
                />
              </div>
            </a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Common;
