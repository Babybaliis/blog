import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Section } from "./app-styles";
import { Header } from "../header/header";
import { ArticlesList } from "../articles-list/articles-list";
import {
  articlesSlice,
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks";
import { Article } from "../../blog-item-types";
import api from "../api/api";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { FullArticleItem } from "../full-article-item/full-article-item";
import { SignUp } from "../sign-up/sign-up";
import { SignIn } from "../sign-in/sign-in";
import { Profile } from "../profile/profile";
import { useCookies } from "react-cookie";
import { CreateArticle } from "../create-article/create-article";

const App = () => {
  const { updateList, updateUser } = articlesSlice.actions;
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector((state) => state.articlesReducer);
  const [sortArticles, setSortArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    api.loadList(cookies.token).then((res) => {
      dispatch(updateList(res));
      setIsLoading(false);
    });

    if (!!cookies.token) {
      api.getUser(cookies.token).then((user) => dispatch(updateUser(user)));
    }
  }, []);

  return (
    <Section>
      <Router>
        <Header />
        <Routes>
          {["/", "/articles"].map((url) => (
            <Route
              path={url}
              element={
                <ArticlesList
                  articles={articles}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              }
            />
          ))}
          <Route path={"/articles/:slug"} element={<FullArticleItem />} />
          <Route path={"/sign-up"} element={<SignUp />} />
          <Route path={"/sign-in"} element={<SignIn />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/new-article"} element={<CreateArticle />} />
          <Route path={"/articles/:slug/edit"} element={<CreateArticle />} />
        </Routes>
      </Router>
    </Section>
  );
};

export { App };
