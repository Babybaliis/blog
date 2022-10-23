import React from "react";
import {
    Div,
    InputButtonLog,
    InputButtonReg,
    SpanRight,
    DivTittle,
    DivAuth,
    A,
    InputButtonOut,
    ImgAvatar
} from "./header-style";
import {Link} from "react-router-dom";
import {useCookies} from "react-cookie";
import {articlesSlice, useAppDispatch, useAppSelector} from "../../store/hooks";
import {User} from "../../blog-item-types";

const Header = () => {
    const [cookies, setCookies, removeCookie] = useCookies(['token']);
    const {user} = useAppSelector((state) => state.articlesReducer);
    const dispatch = useAppDispatch();
    const {updateUser} = articlesSlice.actions;
    return (
        <Div>
            <DivTittle> <Link to={`/`}>Just tell</Link> <img
                src={'https://media.tenor.com/7zKZuIk31GEAAAAC/bird-dance.gif'} alt={'duck'} width={'70px'}
                height={'auto'}/></DivTittle>

            <SpanRight>
                {!cookies.token ? <>
                        <a href={'/sign-in'}> <InputButtonLog type={"button"} value={'Sing In'}/></a>
                        <a href={'/sign-up'}><InputButtonReg type={"button"} value={'Sing Up'}/></a>

                    </> :
                    <DivAuth>
                        <A href={'/profile'}>{user.username} <ImgAvatar src={user.image} alt={''}/></A>
                        <InputButtonOut type={"button"} value={'Log Out'} onClick={() => {
                            removeCookie('token')
                            dispatch(updateUser({} as User))
                        }
                        }/>
                    </DivAuth>}
            </SpanRight>

        </Div>
    )
}

export {Header};