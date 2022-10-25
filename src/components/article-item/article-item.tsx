import React from "react";
import { Article, User } from "../../blog-item-types";
import {
  DivAuthor,
  DivBlock1,
  DivBlock2,
  DivBlock3,
  DivBody,
  DivDate,
  DivInfo,
  DivItem,
  DivItemSB,
  DivItemsList,
  DivLikes,
  DivTag,
  DivTitle,
  ImgAvatar,
  ImgLike,
  InputDel,
  InputEdit,
  SpanFlex,
  SpanFlexSB,
} from "./article-item-style";
import avatar from "../../img/avatar.svg";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  articlesSlice,
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks";
import vector from "../../img/vector.svg";
import path4 from "../../img/path4.svg";
import api from "../api/api";
import { useCookies } from "react-cookie";
import { notification, Popconfirm } from "antd";
import "antd/dist/antd.css";

interface ArticleItemProps {
  article: Article;
  isFull: boolean;
}

const ArticleItem = ({ article, isFull }: ArticleItemProps) => {
  const { user } = useAppSelector((state) => state.articlesReducer);
  const { slug } = useParams<string>();
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { updateList } = articlesSlice.actions;

  const isAuthor = article.author.username === user.username;

  const onDelete = (slug: string | undefined) => () => {
    if (slug != undefined) {
      api.deleteArticle(cookies.token, slug).then((item) => {
        notification.open({
          message: "OK",
          description: "Delete is successfully",
          duration: 3,
        });
        api.loadList(cookies.token).then((res) => {
          dispatch(updateList(res));
          navigate("/");
        });
      });
    }
  };

  const getDate = (date: string | number) => {
    let d = new Date(date);
    return moment(d).format("MMMM DD, YYYY");
  };

  const like = (slug: string | undefined) => () => {
    api.likes(cookies.token, slug).then((like) => {
      api.loadList(cookies.token).then((res) => {
        dispatch(updateList(res));
      });
    });
  };
  const unLike = (slug: string | undefined) => () => {
    api.unLikes(cookies.token, slug).then((like) => {
      api.loadList(cookies.token).then((res) => {
        dispatch(updateList(res));
      });
    });
  };

  return (
    <DivItemsList>
      <DivItem>
        <DivBlock1>
          <SpanFlex>
            <DivTitle>
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </DivTitle>
            <DivLikes>
              {!article.favorited ? (
                <ImgLike src={vector} onClick={like(article.slug)} />
              ) : (
                <ImgLike src={path4} onClick={unLike(article.slug)} />
              )}
              {article.favoritesCount}
            </DivLikes>
          </SpanFlex>
          <SpanFlex>
            {article.tagList.map((value, i) => {
              return <DivTag>{value}</DivTag>;
            })}
          </SpanFlex>
        </DivBlock1>
        <DivBlock2>
          <DivAuthor>{article.author.username}</DivAuthor>
          <DivDate>{getDate(article.createdAt)}</DivDate>
        </DivBlock2>
        <DivBlock3>
          <ImgAvatar src={article.author.image} alt={"avatar"} />
        </DivBlock3>
      </DivItem>
      <DivItemSB>
        <SpanFlexSB>
          <DivInfo isFull={isFull}>{article.description}</DivInfo>
          {isFull && isAuthor && (
            <SpanFlex>
              <Popconfirm
                title="Are you sure？"
                okText="Yes"
                cancelText="No"
                onConfirm={onDelete(article.slug)}
              >
                <InputDel type={"button"} children={"Delete"} />
              </Popconfirm>
              <Link to={`/articles/${slug}/edit`}>
                {" "}
                <InputEdit type={"button"} children={"Edit"} />
              </Link>
            </SpanFlex>
          )}
        </SpanFlexSB>
      </DivItemSB>
      {isFull && (
        <DivBody>
          <ReactMarkdown>{article.body}</ReactMarkdown>
        </DivBody>
      )}
    </DivItemsList>
  );
};

export { ArticleItem };
