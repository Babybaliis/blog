import {User} from "../../blog-item-types";
import {notification} from "antd";

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

    },

    async login(email: string, password: string) {
        let user = {
            email: email,
            password: password
        }
        return await fetch(
            `https://blog.kata.academy/api/users/login`,
            {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user})
            }
        ).then((res) => {
            return res.json().then((json) => {
                return json.user;
            });
        })

    },

    async signUp(username: string, email: string, password: string) {
        let user = {
            username: username,
            email: email,
            password: password
        }
        return await fetch(
            `https://blog.kata.academy/api/users`,
            {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user})
            }
        ).then((res) => {
            return res.json().then((json) => {
                return json.user;
            });
        });

    },
    async getUser(token:string) {
        return await fetch(
            `https://blog.kata.academy/api/user`,
            {
                method: "get",
                headers: {
                     Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            return res.json().then((json) => {
                return json.user;
            });
        });

    },

    async editUser(user:User,token:string) {
        let data:User={} as User
        for(const [key, value] of Object.entries(user)){
            if(value!==''){
                data[key as string]=value
            }
        }
        return await fetch(
            `https://blog.kata.academy/api/user`,
            {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user:data})
            }
        ).then((res) => {
            return res.json().then((json) => {
                return json.user;
            });
        });

    }
}
