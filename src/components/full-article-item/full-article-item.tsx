import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import { useDispatch } from "react-redux";
import { articlesSlice, useAppSelector } from "../../store/hooks";
import { Spin } from "antd";
import { ArticlesList } from "../articles-list/articles-list";
import { useCookies } from "react-cookie";

const FullArticleItem = () => {
  const { slug } = useParams<string>();
  const { currentSlug } = articlesSlice.actions;
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);

  const dispatch = useDispatch();
  const { article } = useAppSelector((state) => state.articlesReducer);

  useEffect(() => {
    if (!!slug) {
      api
        .getCurrentArticle(cookies.token, slug)
        .then((r) => dispatch(currentSlug(r)));
    }
  }, [dispatch, slug]);

  if (!article.slug) {
    return <Spin size={"large"} />;
  }

  return (
    <ArticlesList
      articles={[article]}
      isLoading={false}
      isFull={true}
      setIsLoading={(isLoading: boolean) => console.error("not supported")}
    />
  );
};

export { FullArticleItem };
