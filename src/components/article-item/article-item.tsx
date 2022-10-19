import React from "react";
import {Article} from "../../blog-item-types";
import {
    DivItemsList,
    DivItem,
    DivTitle,
    DivAuthor,
    DivTag,
    DivInfo,
    DivDate,
    SpanFlex,
    ImgAvatar, DivBlock1, DivBlock2, DivBlock3, DivBody
} from "./article-item-style";
import avatar from "../../img/avatar.svg"
import ReactMarkdown from 'react-markdown'
import moment from "moment";
import {Link} from "react-router-dom";


interface ArticleItemProps {
    article: Article;
    isFull: boolean;
}

const ArticleItem = ({article,isFull}: ArticleItemProps) => {

    const getDate = (date: string | number) => {
        let d = new Date(date);
        console.log(d)
        return moment(d).format("MMMM DD, YYYY");
    };

    return (
        <DivItemsList>
            <DivItem>
                <DivBlock1>
                    <SpanFlex>
                        <DivTitle>
                            <Link to={`/articles/${article.slug}`} >{article.title}</Link>
                            {article.author.following}
                        </DivTitle>

                    </SpanFlex>
                    <SpanFlex>
                        {article.tagList.map((value, i) => {
                            return (
                                <DivTag>
                                    {value}
                                </DivTag>
                            )
                        })}
                    </SpanFlex>
                    <DivInfo isFull={isFull}>
                        {article.description}
                    </DivInfo>
                </DivBlock1>
                <DivBlock2>
                    <DivAuthor>
                        {article.author.username}
                    </DivAuthor>
                    <DivDate>
                        {getDate(article.createdAt)}
                    </DivDate>
                </DivBlock2>
                <DivBlock3>
                    <ImgAvatar src={article.author.image} alt={'avatar'}/>
                </DivBlock3>

            </DivItem>
            {isFull &&
                <DivBody >
                    <ReactMarkdown>{article.body}</ReactMarkdown>
                </DivBody>
            }
        </DivItemsList>

    )
}

export
{
    ArticleItem
}