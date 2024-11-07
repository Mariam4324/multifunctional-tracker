import { Button, Link, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function Page() {
  return (
    <section className="main">
      <h1 className="main__title">Welcome to LifeTrack Pro!</h1>
      <h2 className="main__subtitle">Here you can track your work, studies, health and more!</h2>

      <form className="main-form" action="/">
        <div className="main-form__register">
          <span className="main-form__title">Register with</span>

          <div className="main-form__icons">
            <Link href="/">{<GoogleIcon fontSize="large" sx={{ marginTop: "19px", color: "#fff", border: "1px solid #fff", borderRadius: "7px", padding: "5px" }} />}</Link>

            <Link href="/register">{<AlternateEmailIcon fontSize="large" sx={{ marginTop: "19px", color: "#fff", border: "1px solid #fff", borderRadius: "7px", padding: "5px" }} />}</Link>
          </div>
        </div>

        <span className="main-form__or">or</span>

        <div className="main-form__holder">
          <TextField
            className="white-text-field"
            style={{
              color: "#fff",
              width: "100%",
              maxWidth: "700px",
            }}
            id="outlined-textarea"
            label="Name"
            placeholder="Enter your name"
            multiline
          />
          <TextField
            className="white-text-field"
            style={{
              color: "#fff",
              width: "100%",
              maxWidth: "700px",
            }}
            id="outlined-password-input"
            label="Password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
          />

          <TextField
            className="white-text-field"
            style={{
              color: "#fff",
              width: "100%",
              maxWidth: "700px",
            }}
            id="outlined-email-input"
            label="Email"
            type="Email"
            placeholder="Enter email"
          />
        </div>

        <Button
          className="main-form__btn"
          href="/survey"
          style={{
            width: "100%",
            maxWidth: "700px",
            marginTop: "15px",
            fontWeight: "700",
            textTransform: "none",
          }}
          variant="outlined"
          endIcon={<ArrowCircleRightRoundedIcon />}
        >
          Sign up
        </Button>
      </form>
    </section>
  );
}
 



