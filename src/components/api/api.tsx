import { User } from "../../blog-item-types";

export default {
  async loadList(token: string, offset = 0, limit = 5) {
    return await fetch(
      `https://blog.kata.academy/api/articles?limit=${limit}&offset=${offset}`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    ).then((res) => {
      return res.json().then((json) => {
        return json.articles;
      });
    });
  },

  async getCurrentArticle(token: string, slug: string) {
    return await fetch(`https://blog.kata.academy/api/articles/${slug}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }).then((res) => {
      return res.json().then((json) => {
        return json.article;
      });
    });
  },

  async login(email: string, password: string) {
    let user = {
      email: email,
      password: password,
    };
    return await fetch(`https://blog.kata.academy/api/users/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    }).then((res) => {
      return res.json().then((json) => {
        return json.user;
      });
    });
  },
  async addArticle(
    title: string,
    description: string,
    body: string,
    tagList: string[],
    token: string
  ) {
    let article = {
      title: title,
      description: description,
      body: body,
      tagList: tagList,
    };
    return await fetch(`https://blog.kata.academy/api/articles`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ article }),
    }).then((res) => {
      return res.json().then((json) => {
        return json.article;
      });
    });
  },
  async deleteArticle(token: string, slug: string) {
    return await fetch(`https://blog.kata.academy/api/articles/${slug}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }).then((res) => {
      return res;
    });
  },

  async signUp(username: string, email: string, password: string) {
    let user = {
      username: username,
      email: email,
      password: password,
    };
    return await fetch(`https://blog.kata.academy/api/users`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    }).then((res) => {
      return res.json().then((json) => {
        return json.user;
      });
    });
  },
  async getUser(token: string) {
    return await fetch(`https://blog.kata.academy/api/user`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json().then((json) => {
        return json.user;
      });
    });
  },

  async editUser(user: User, token: string) {
    let data: User = {} as User;
    for (const [key, value] of Object.entries(user)) {
      if (value !== "") {
        data[key as string] = value;
      }
    }
    return await fetch(`https://blog.kata.academy/api/user`, {
      method: "put",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: data }),
    }).then((res) => {
      return res.json().then((json) => {
        return json.user;
      });
    });
  },

  async likes(token: string, slug: string | undefined) {
    return await fetch(
      `https://blog.kata.academy/api/articles/${slug}/favorite`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res;
    });
  },

  async unLikes(token: string, slug: string | undefined) {
    return await fetch(
      `https://blog.kata.academy/api/articles/${slug}/favorite`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res;
    });
  },
};
