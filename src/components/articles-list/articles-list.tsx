import React from "react";
import {DivList, Section} from "./articles-list-style";
import {Article} from "../../blog-item-types";
import {ArticleItem} from "../article-item/article-item";
import {Alert, Pagination, Spin} from "antd";
import api from "../api/api";
import {articlesSlice, useAppDispatch} from "../../store/hooks";


interface ArticlesListProps {
    articles: Article[];
    isLoading: boolean;
    setIsLoading:(isLoading:boolean)=>void;
    isFull?:boolean;
}



const ArticlesList = ({articles, isLoading,isFull=false,setIsLoading}: ArticlesListProps) => {

    const {updateList} = articlesSlice.actions;
    const dispatch = useAppDispatch();

    if (articles.length === 0) {
        return <Spin size={"large"} />;
    }

    return (
        <>

        <Section>
            <DivList>
                {articles.length > 0 && !isLoading ? (
                    <>
                        {articles.map((article) => (
                                <ArticleItem article={article} isFull={isFull}
                                             key={'articles_item_' + article.slug }/>
                            )
                        )}
                    </>
                ) : (
                    <><>
                    </>
                        <Alert
                            type="info"
                            description="Статьи отсутствуют"
                            showIcon/></>
                )}
            </DivList>
        </Section>
            {ArticlesList.length > 0 && !isFull &&
                <Pagination
                    size="default"
                    onChange={page => api.loadList(page * 5).then((res) => {
                        dispatch(updateList(res));
                        setIsLoading(false)
                    })}
                    total={50}
                    style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}/>
            }
        </>
    )
}

export {ArticlesList}