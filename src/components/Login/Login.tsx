"use client";

import { Button, Link, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import css from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { loginSchema, loginTypes } from "../../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<loginTypes>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const formSubmit = async (data: loginTypes) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      reset();
      return (window.location.href = "/dashboard");
    } catch (error) {
      setError("root", { message: " account already exists" });
    }
  };
  return (
    <section className={css.main}>
      <h1 className={css.main__title}>Welcome to Tlo!</h1>
      <h2 className={css.main__subtitle}>Here you can track your work, studies, health and more!</h2>

      <form onSubmit={handleSubmit(formSubmit)} className={css["main-form"]} action="/">
        <div className={css["main-form__register"]}>
          <span className={css["main-form__title"]}>Register with</span>

          <div className={css["main-form__icons"]}>
            <Link href="/">{<GoogleIcon fontSize="large" sx={{ marginTop: "19px", color: "#fff", border: "1px solid #fff", borderRadius: "7px", padding: "5px" }} />}</Link>

            <Link href="/register">{<AlternateEmailIcon fontSize="large" sx={{ marginTop: "19px", color: "#fff", border: "1px solid #fff", borderRadius: "7px", padding: "5px" }} />}</Link>
          </div>
        </div>

        <span className={css["main-form__subtitle"]}>or</span>
        <span className={css["main-form__subtitle"]}>Log in with</span>

        <div className={css["main-form__holder"]}>
          <TextField
            {...register("email")}
            error={errors.email}
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
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          <TextField
            {...register("password")}
            error={errors.password}
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
          {errors.password && <p className="error-text">{errors.password.message}</p>}
        </div>

        <Button
          className={css["main-form__btn"]}
          type="submit"
          disabled={isSubmitting}
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
          {isSubmitting ? "Loading..." : "Sign up"}
        </Button>
        {errors.root && <p className="error-text">{errors.root.message}</p>}
      </form>
    </section>
  );
}
