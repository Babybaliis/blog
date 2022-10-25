import React, {
  ChangeEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { Section } from "../articles-list/articles-list-style";
import {
  DivFlex,
  DivNewArticle,
  H2,
  Input,
  InputAdd,
  InputDel,
  InputSend,
  InputTag,
  SpanRow,
  Textarea,
} from "./create-article-style";
import { Label } from "../sign-up/sign-up-style";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  articlesSlice,
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks";
import api from "../api/api";
import { Article } from "../../blog-item-types";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate, useParams } from "react-router-dom";

interface IFormInputs {
  title: string;
  shortDescription: string;
  text: string;
  tag: string[];
}

const CreateArticle = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();
  const { slug } = useParams<string>();
  const dispatch = useAppDispatch();
  const { updateList } = articlesSlice.actions;
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const [tagList, setTagList] = useState<string[]>([]);
  const [article, setArticle] = useState<Article>({} as Article);
  const [tagValue, setTagValue] = useState<string>("");
  const { user } = useAppSelector((state) => state.articlesReducer);
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    api
      .addArticle(
        data.title,
        data.shortDescription,
        data.text,
        tagList,
        cookies.token
      )
      .then((article) => {
        api.loadList(cookies.token).then((res) => {
          dispatch(updateList(res));
          navigate("/");
        });
      });
  };

  useEffect(() => {
    setTagValue("");
  }, [tagList]);

  const onAddBtnClick = (event: any) => {
    event.preventDefault();
    let list = [...tagList];
    list.push(tagValue);
    setTagList(list);
  };

  const onChangeValue = (event: any) => {
    setTagValue(event.target.value);
  };

  const deleteTag = (tag: string) => (event: any) => {
    event.preventDefault();
    setTagList(tagList.filter((tagDel) => tagDel !== tag));
  };

  const isNew = !slug;

  useEffect(() => {
    if (!isNew) {
      api.getCurrentArticle(cookies.token, slug).then((article) => {
        setArticle(article);
        setTagList(article.tagList);
        const isAuthor = article.author.username === user.username;
        if (!isAuthor) {
          navigate("/");
        }
      });
    } else if (!cookies.token) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <Section>
      <DivNewArticle onSubmit={handleSubmit(onSubmit)}>
        <H2>Create new article</H2>
        <Label>
          {" "}
          Title
          <Input
            type={"text"}
            placeholder={"Title"}
            error={errors.title}
            defaultValue={isNew ? "" : article.title}
            {...register("title", {
              required: true,
              minLength: {
                value: 1,
                message: "Enter text",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        </Label>
        <Label>
          {" "}
          Short description
          <Input
            type={"text"}
            placeholder={"Title"}
            error={errors.shortDescription}
            defaultValue={isNew ? "" : article.description}
            {...register("shortDescription", {
              required: true,
              minLength: {
                value: 1,
                message: "Enter text",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.shortDescription?.message}</p>
        </Label>
        <Label>
          {" "}
          Text
          <Textarea
            placeholder={"Please enter your text..."}
            error={errors.text}
            defaultValue={isNew ? "" : article.body}
            {...register("text", {
              required: true,
              minLength: {
                value: 1,
                message: "Enter text",
              },
            })}
          />
          <p style={{ color: "red" }}>{errors.text?.message}</p>
        </Label>
        <DivFlex>
          <Label>
            {" "}
            Tag
            {tagList.map((tag, i) => (
              <SpanRow key={tag + "_" + i}>
                <InputTag placeholder={"Tag"} value={tag} disabled />
                <InputDel
                  type={"button"}
                  children={"Delete"}
                  onClick={deleteTag(tag)}
                />
              </SpanRow>
            ))}
            <SpanRow key={"span_main"}>
              <InputTag
                placeholder={"Tag"}
                value={tagValue}
                onChange={onChangeValue}
              />
              <InputDel type={"button"} children={"Delete"} />
              <InputAdd
                type={"button"}
                children={"Add tag"}
                onClick={onAddBtnClick}
              />
            </SpanRow>
          </Label>
        </DivFlex>
        <InputSend type={"submit"} children={"Send"} />
      </DivNewArticle>
    </Section>
  );
};

export { CreateArticle };
