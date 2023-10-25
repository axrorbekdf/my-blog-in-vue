import axios from "./axios";

const ArticleService = {
    articles(){
        return axios.get('/articles');
    },
    details(slug){
        return axios.get(`/articles/${slug}`);
    },
    create(article){
        return axios.post(`/articles`, {article});
    },
    update(slug, article){
        return axios.put(`/articles/${slug}`, {article});
    },
    delete(slug){
        return axios.delete(`/articles/${slug}`);
    }
}

export default ArticleService;