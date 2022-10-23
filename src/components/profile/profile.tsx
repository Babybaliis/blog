import React from "react";
import {Section} from "../articles-list/articles-list-style";
import {DivSignUpForm} from "./profile-style";
import {H2, Input, InputBtn, Label} from "../sign-up/sign-up-style";
import {SubmitHandler, useForm} from "react-hook-form";
import {articlesSlice, useAppDispatch, useAppSelector} from "../../store/hooks";
import api from "../api/api";
import {useCookies} from "react-cookie";
import {User} from "../../blog-item-types";

interface IFormInputs {
    username: string;
    email: string;
    password: string;
    newPassword: string;
    avatar: string;
}

const Profile = () => {
    const [cookies, setCookies, removeCookie] = useCookies(['token']);
    const {register, getValues, formState: {errors}, handleSubmit} = useForm<IFormInputs>();
    const dispatch = useAppDispatch();
    const {updateUser} = articlesSlice.actions;
    const onSubmit: SubmitHandler<IFormInputs> = data => {
        let user={
            username:data.username,
            email:data.email,
            password:data.password,
            image:data.avatar,
        }as User
        api.editUser(user , cookies.token) .then(user=>{
            dispatch(updateUser(user))
        })
    }
    const {user} = useAppSelector((state) => state.articlesReducer);

    return (
        <Section>
            <DivSignUpForm onSubmit={handleSubmit(onSubmit)}>
                <H2>Edit Profile</H2>
                <Label> Username
                    <Input type={"text"} error={errors.username} defaultValue={user.username} placeholder={user.username||'Username'} {
                        ...register("username",
                            {
                                required: false,
                                pattern: {
                                    value: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/gm,
                                    message: "This input is username."
                                },
                                minLength: {
                                    value: 3,
                                    message: "Username needs to be at least 3 characters"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Username needs to be at max 20 characters"
                                }
                            }
                        )}/>
                    <p style={{color: 'red'}}>{errors.username?.message}</p>
                </Label>
                <Label> Email address
                    <Input type={"text"} error={errors.email} placeholder={user.email||'Email address'} {
                        ...register("email",
                            {
                                required: false,
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Email is required field!"
                                },
                            }
                        )}/>
                    <p style={{color: 'red'}}>{errors.email?.message}</p>
                </Label>
                <Label> New password
                    <Input type={"password"} error={errors.password}  placeholder={'New password'} {
                        ...register("password",
                            {
                                required: false,
                                pattern: {
                                    value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                    message: "This input is number only."
                                }, minLength: {
                                    value: 6,
                                    message: "Your password needs to be at least 6 characters."
                                },
                                maxLength: {
                                    value: 40,
                                    message: "Your password needs to be at not more 20 characters."
                                }
                            }
                        )}/>
                    <p style={{color: 'red'}}>{errors.password?.message}</p>
                </Label>
                <Label> Avatar image
                    <Input type={"text"} error={errors.avatar}  placeholder={user.image||'Avatar image'} {
                        ...register("avatar",
                            {
                                required: false,
                                pattern: {
                                    value: /(https?:\/\/.*\.(?:png|jpg))/i,
                                    message: "This input is number only."
                                }
                            }
                        )}/>
                    <p style={{color: 'red'}}>{errors.avatar?.message}</p>
                </Label>
                <InputBtn type={'submit'} children={'Save'}/>
            </DivSignUpForm>
        </Section>
    )
}

export {Profile}