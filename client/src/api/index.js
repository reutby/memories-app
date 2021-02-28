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

export const fetchUserPosts = (id)=>API.get(`/posts/profile/${id}`);
export const getPostById = (id) => API.get(`/posts/${id}`);
//COMMENT
export const fetchComments = ()=>API.get(`/comments`);
export const createPostComment = (newComment,currentPost)=>API.post(`/comments?postId=${currentPost}`,newComment); 
export const deletePostComment = (id) => API.delete(`/comments/${id}`);
export const likePostComment = (id) => API.patch(`/comments/${id}/likePost`);
// export const updatePost = (id, updatedPost)=> API.patch(`/posts/${id}`,updatedPost);

//USER
export const signIn = (formData)=>API.post('/user/signin', formData);
export const signUp = (formData)=>API.post('/user/signup', formData);


//NOTIFICATIONS
export const fetchNotifications = ()=>API.get('/notifications');
export const createNotification = (newNotification)=> API.post('/notifications',newNotification); 
export const deleteNotification = (notificationId)=>API.delete(`/notifications/${notificationId}`);

//PROFILES

export const fetchAllProfiles = ()=>API.get('/profiles');
export const createProfile = (newProfile)=>API.post('/profiles',newProfile);

export const addFollower = (id,followerId)=>API.post(`/profiles/followers/${id}`,followerId);
export const addFollowing = (id,followingId)=>API.post(`/profiles/followings/${id}`,followingId);