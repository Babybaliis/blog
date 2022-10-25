import React from "react";
import {
  A,
  Div,
  DivAuth,
  DivTittle,
  ImgAvatar,
  InputButtonCreate,
  InputButtonLog,
  InputButtonOut,
  InputButtonReg,
  SpanRight,
} from "./header-style";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  articlesSlice,
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks";
import { User } from "../../blog-item-types";
import avatar from "../../img/avatar.svg";
import api from "../api/api";

const Header = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const { user } = useAppSelector((state) => state.articlesReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { updateUser, updateList } = articlesSlice.actions;
  return (
    <Div>
      <DivTittle>
        {" "}
        <Link to={`/`}>Just tell</Link>{" "}
        <img
          src={"https://media.tenor.com/7zKZuIk31GEAAAAC/bird-dance.gif"}
          alt={"duck"}
          width={"70px"}
          height={"auto"}
        />
      </DivTittle>

      <SpanRight>
        {!cookies.token ? (
          <>
            <Link to={"/sign-in"}>
              {" "}
              <InputButtonLog type={"button"} value={"Sing In"} />
            </Link>
            <Link to={"/sign-up"}>
              <InputButtonReg type={"button"} value={"Sing Up"} />
            </Link>
          </>
        ) : (
          <DivAuth>
            <Link to={"/new-article"}>
              <A>
                <InputButtonCreate type={"button"} value={"Create article"} />
              </A>
            </Link>
            <Link to={"/profile"}>
              <A>
                {user.username}{" "}
                <ImgAvatar src={!!user.image ? user.image : avatar} alt={""} />
              </A>
            </Link>
            <InputButtonOut
              type={"button"}
              value={"Log Out"}
              onClick={() => {
                removeCookie("token");
                dispatch(updateUser({} as User));
                api.loadList("").then((res) => {
                  dispatch(updateList(res));
                  if (
                    window.location.pathname.endsWith("edit") ||
                    window.location.pathname.endsWith("new-article")
                  ) {
                    navigate("/");
                  }
                });
              }}
            />
          </DivAuth>
        )}
      </SpanRight>
    </Div>
  );
};

export { Header };
