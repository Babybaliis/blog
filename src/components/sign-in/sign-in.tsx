import React from "react";
import { Section } from "../articles-list/articles-list-style";
import { DivSignInForm, InputBtn } from "./sign-in-style";
import { A, H2, Input, Label, P } from "../sign-up/sign-up-style";
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../api/api";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { articlesSlice, useAppDispatch } from "../../store/hooks";
import { notification } from "antd";
import "antd/dist/antd.css";

interface IFormInputs {
  mail: string;
  password: string;
}

const SignIn = () => {
  const [cookies, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { updateUser, updateList } = articlesSlice.actions;
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    api
      .login(data.mail, data.password)
      .then((user) => {
        setCookies("token", user.token);
        dispatch(updateUser(user));
        api.loadList(user.token).then((res) => {
          dispatch(updateList(res));
          navigate("/");
        });
      })
      .catch((err) => {
        notification.error({
          message: "Error",
          description: "Email or Password is invalid",
          duration: 3,
        });
      });
  };

  return (
    <Section>
      <DivSignInForm onSubmit={handleSubmit(onSubmit)}>
        <H2>Sign In</H2>
        <Label>
          {" "}
          Email address
          <Input
            type={"text"}
            error={errors.mail}
            placeholder={"Email address"}
            {...register("mail", {
              required: true,
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Email is required field!",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.mail?.message}</p>
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
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message: "Your password needs to be at least 6 characters.",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </Label>
        <InputBtn type={"submit"} children={"Login"} />
        <P>
          Don't have an account? <A href={"/sign-up"}>Sign Up.</A>
        </P>
      </DivSignInForm>
    </Section>
  );
};

export { SignIn };
