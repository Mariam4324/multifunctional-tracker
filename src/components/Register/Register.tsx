"use client";
import { Button, TextField } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import css from "./Register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

type FormField = {
  name: string;
  email: string;
  password: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormField>();

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("email", {
        message: "this email is already taken"
      })
    }
  };

  return (
    <section className={css.main}>
      <h1 className={css.main__title}>Nice to see you!</h1>
      <h2 className={css.main__subtitle}>Here you can track your work, studies, health and more!</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={css["main-form"]} action="/">
        <div className={css["main-form__register"]}>
          <span className={css["main-form__title"]}>Register</span>
        </div>

        <div className={css["main-form__holder"]}>
          <TextField
            {...(register("name"),
            {
              required: "name is required",
              minLength: 2,
              maxLength: 60,
            })}
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
          {errors.name && <p className="error-text">{errors.name.message}</p>}

          <TextField
            {...(register("email"),
            {
              required: "email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "email must include @";
                }
                return true;
              },
            })}
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
            {...(register("password"),
            {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password must have at least 8 chars",
              },
            })}
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
          disabled={isSubmitting ? "Loading..." : "Lets go"}
          // href="/survey"
          type="submit"
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
          Let's go
        </Button>
      </form>
    </section>
  );
};

export default page;
