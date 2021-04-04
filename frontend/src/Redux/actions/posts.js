import * as apis from '../../apis/index';

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await apis.fetchPosts();
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        });
    } catch(error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = apis.createPost(post);
        dispatch({
            type: 'CREATE',
            payload: data
        })
    } catch(error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await apis.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        apis.deletePost(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch(error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await apis.likePost(id);
        dispatch({ type: 'LIKE', payload: data });
    } catch(error) {

    }
}