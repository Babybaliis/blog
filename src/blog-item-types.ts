export type Article = {
    author: Author;
    description: string;
    body: string;
    tagList: [];
    slug: string;
    createdAt: string | number;
    title: string;
};

export type Author = {
    following: false
    image: string
    username: string
}

export type User = {
    email: string,
    token?: string,
    username: string,
    image: string,
    [key:string]:any
}