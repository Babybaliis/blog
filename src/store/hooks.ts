import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article} from "../blog-item-types";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface ReducerInitialState {
    articles: Article[];
    article: Article;
}

const initialState: ReducerInitialState = {
    articles: [] as Article[],
    article: {} as Article,

};

export const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers:{
        updateList(state, action: PayloadAction<Article[]>) {
            state.articles = action.payload;
    },
        currentSlug(state, action: PayloadAction<Article>) {
            state.article = action.payload;
        },

}
});

export default articlesSlice.reducer;