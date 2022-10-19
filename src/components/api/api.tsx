export default {
    async loadList(offset = 0, limit = 5) {
        return await fetch(
            `https://blog.kata.academy/api/articles?limit=${limit}&offset=${offset}`
        ).then((res) => {
            return res.json().then((json) => {
                return json.articles;
            });
        });
    },

    async getCurrentArticle(slug: string) {
        return await fetch(
            `https://blog.kata.academy/api/articles/${slug}`
        ).then((res) => {
            return res.json().then((json) => {
                return json.article;
            });
        });

    }
}
