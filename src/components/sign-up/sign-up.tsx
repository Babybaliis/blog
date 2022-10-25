import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  DivSignUpForm,
  Input,
  H2,
  Label,
  DivLine,
  LabelCheck,
  InputCheck,
  InputBtn,
  P,
  A,
} from "./sign-up-style";
import { Section } from "../articles-list/articles-list-style";
import api from "../api/api";

interface IFormInputs {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  checked: string;
}

const SignUp = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    api
      .signUp(data.username, data.email, data.password)
      .then((res) => console.log(res));
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <Section>
        <DivSignUpForm onSubmit={handleSubmit(onSubmit)}>
          <H2>Create new account</H2>
          <Label>
            {" "}
            Username
            <Input
              type={"text"}
              error={errors.username}
              placeholder={"Username"}
              {...register("username", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/gm,
                  message: "This input is username.",
                },
                minLength: {
                  value: 3,
                  message: "Username needs to be at least 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username needs to be at max 20 characters",
                },
              })}
            />
            <p style={{ color: "red" }}>{errors.username?.message}</p>
          </Label>
          <Label>
            {" "}
            Email address
            <Input
              type={"text"}
              error={errors.email}
              placeholder={"Email address"}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Email is required field!",
                },
              })}
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </Label>
          <Label>
            {" "}
            Password
            <Input
              type={"password"}
              error={errors.password}
              placeholder={"Password"}
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: "This input is number only.",
                },
                minLength: {
                  value: 6,
                  message: "Your password needs to be at least 6 characters.",
                },
                maxLength: {
                  value: 40,
                  message:
                    "Your password needs to be at not more 20 characters.",
                },
              })}
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </Label>
          <Label>
            {" "}
            Repeat password
            <Input
              type={"password"}
              placeholder={"Repeat password"}
              error={errors.repeatPassword}
              {...register("repeatPassword", {
                required: true,
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "Passwords should match!";
                  },
                },
              })}
            />
            {errors.repeatPassword && (
              <p style={{ color: "red" }}>Passwords must match!</p>
            )}
          </Label>
          <DivLine />
          <LabelCheck>
            <InputCheck
              type={"checkbox"}
              id={"checked"}
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            I agree to the processing of my personal information
          </LabelCheck>
          <InputBtn type={"submit"} children={"Create"} disabled={!isChecked} />
          <P>
            Already have an account? <A href={"/sign-in"}>Sign In.</A>
          </P>
        </DivSignUpForm>
      </Section>
    </>
  );
};

export { SignUp };
