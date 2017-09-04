import axios from 'axios';

/* -----------------    STATE     ------------------ */

const initialState = {
  blogs: [],
  color: ''
};

/* -----------------    ACTIONS     ------------------ */

const GET_BLOGS = 'GET_BLOGS';
const UPDATE_NAV = 'UPDATE_NAV';

/* -----------------    ACTION CREATORS     ------------------ */

const getBlogs = blogs => ({ type: GET_BLOGS, blogs });
const updateNav = color => ({ type: UPDATE_NAV, color });

/* -----------------    REDUCER     ------------------ */

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_BLOGS:
      newState.blogs = action.blogs;
      break;
    case UPDATE_NAV:
      newState.color = action.color;
      break;
    default:
      return state;
  }

  return newState;
}

/* -----------------    THUNK CREATORS     ------------------ */

export const fetchBlogs = () => dispatch => {
  return axios
    .get('/api/blogs')
    .then(res => res.data.payload)
    .then(blogs => {
      const action = getBlogs(blogs);
      dispatch(action);
    })
    .catch(err => console.log(err));
};

export const postMessage = (message, success) => dispatch => {
  return axios
    .post('/api/contact', message)
    .then(res => res.data)
    .then(response => {
      success()
    })
    .catch(err => console.log(err));
};

export const setNav = color => dispatch => {
  const action = updateNav(color);
  dispatch(action);
};
