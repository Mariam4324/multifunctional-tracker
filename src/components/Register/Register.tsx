"use client";
import { Button, TextField } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import css from "./Register.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormField = {
  name: string;
  email: string;
  password: string;
};

// Валидация с использованием Zod
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(40, "Name must be less than 40 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must have at least 8 characters").max(25, "Password must be less than 25 characters"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("email", {
        message: "This email is already taken",
      });
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
            {...register(
              "name",

              {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must have at least 2 chars",
                },
                maxLength: {
                  value: 40,
                  message: "Name can not be more than 40 chars",
                },
              }
            )}
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
            {...register(
              "email",

              {
                required: "email is required",
              }
            )}
            className="white-text-field"
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
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password must be at least 8 chars",
              },
              maxLength: {
                value: 25,
                message: "password can not be more than 25 chars",
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
          disabled={isSubmitting}
          href="/survey"
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
      </form>
    </section>
  );
};

export default Page;
