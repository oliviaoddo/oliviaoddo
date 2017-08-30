import axios from 'axios';


/* -----------------    STATE     ------------------ */

const initialState = {
  blogs: []
}


/* -----------------    ACTIONS     ------------------ */

const GET_BLOGS = "GET_BLOGS";


/* -----------------    ACTION CREATORS     ------------------ */

const  getBlogs = blogs => ({ type: GET_BLOGS, blogs});


/* -----------------    REDUCER     ------------------ */


export default function reducer (state = initialState, action){
  const newState = Object.assign({}, state);
  switch (action.type) {
      case GET_BLOGS:
         newState.blogs = action.blogs;
         break;
      default:
        return state;
    }

  return newState;
}



/* -----------------    THUNK CREATORS     ------------------ */

export const fetchBlogs = () => dispatch => {
    return axios.get('/api/blogs')
      .then(res => res.data.payload)
      .then(blogs => {
        const action = getBlogs(blogs);
        dispatch(action);
      })
      .catch(err => console.log(err));
}
