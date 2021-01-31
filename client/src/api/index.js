import axios from "axios";

//const url = 'https://memories-app-prj.herokuapp.com/posts';

//dev
//{baseURL:'http://localhost:5000'}
//production

//{baseURL:'https://memories-app-prj.herokuapp.com'}
const API = axios.create({baseURL:'http://localhost:5000'});
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

//POSTS
export const fetchPosts = ()=>API.get('/posts');
export const createPost = (newPost)=>API.post('/posts',newPost); 
export const updatePost = (id, updatedPost)=> API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

//COMMENT
export const fetchComments = ()=>API.get(`/comments`);
export const createPostComment = (newComment,currentPost)=>API.post(`/comments?postId=${currentPost}`,newComment); 
export const deletePostComment = (id) => API.delete(`/comments/${id}`);
export const likePostComment = (id) => API.patch(`/comments/${id}/likePost`);
// export const updatePost = (id, updatedPost)=> API.patch(`/posts/${id}`,updatedPost);

//USER
export const signIn = (formData)=>API.post('/user/signin', formData);
export const signUp = (formData)=>API.post('/user/signup', formData);
