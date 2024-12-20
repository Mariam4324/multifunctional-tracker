"use client";
import { Button, TextField } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import css from "./Register.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerTypes } from "../../lib/types";

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<registerTypes>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const formSubmit = async (data: registerTypes) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      reset();
      return (window.location.href = "/survey");
    } catch (error) {
      setError("root", { message: " account already exists" });
    }
  };

  return (
    <section className={css.main}>
      <h1 className={css.main__title}>Nice to see you!</h1>
      <h2 className={css.main__subtitle}>Here you can track your work, studies, health and more!</h2>

      <form onSubmit={handleSubmit(formSubmit)} className={css["main-form"]} action="/">
        <div className={css["main-form__register"]}>
          <span className={css["main-form__title"]}>Register</span>
        </div>

        <div className={css["main-form__holder"]}>
          <TextField
            {...register("name")}
            className="white-text-field"
            error={errors.name}
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
            {...register("email")}
            className="white-text-field"
            error={errors.email}
            style={{
              color: "#fff",
              width: "100%",
              maxWidth: "700px",
            }}
            id="outlined-email-input"
            label="Email"
            type="email"
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

          <TextField
            {...register("confirmPassword")}
            className="white-text-field"
            style={{
              color: "#fff",
              width: "100%",
              maxWidth: "700px",
            }}
            id="outlined-password-input"
            label="Confirm password"
            type="password"
            placeholder="Repeat password"
            autoComplete="current-password"
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword.message}</p>}
        </div>

        <Button
          className={css["main-form__btn"]}
          disabled={isSubmitting}
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
          {isSubmitting ? "Loading..." : "Let's go"}
        </Button>
        {errors.root && <p className="error-text">{errors.root.message}</p>}
      </form>
    </section>
  );
};

export default Register;
