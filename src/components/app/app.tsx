import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Section} from "./app-styles";
import {Header} from "../header/header";
import {ArticlesList} from "../articles-list/articles-list";
import {articlesSlice, useAppDispatch, useAppSelector} from "../../store/hooks";
import {Article} from "../../blog-item-types";
import api from "../api/api";
import {Pagination} from "antd";
import 'antd/dist/antd.css';
import {FullArticleItem} from "../full-article-item/full-article-item";


const App = () => {
    const {updateList} = articlesSlice.actions;
    const dispatch = useAppDispatch();

    const {articles} = useAppSelector((state) => state.articlesReducer);
    const [sortArticles, setSortArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
            api.loadList().then((res) => {
                dispatch(updateList(res));
                setIsLoading(false)
            },)
        }, []
    );


    return (
        <Section>
            <Router>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<ArticlesList articles={articles} isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
                    <Route path={'/articles'} element={<ArticlesList articles={articles} isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
                    <Route path={'/articles/:slug'} element={<FullArticleItem/>}/>
                </Routes>

            </Router>
        </Section>
    )
}

export {App}