export const fetchJobsAction = (url) => {
    // do fetch stuff
   return async (dispatch) => {
       console.log("THIS IS THE URL",url)

        dispatch({
          type: "TOGGLE_LOADER",
          payload: true,
        })
    const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("HERE IS THE FETCHED DATA :", data);
        const spreadData = [...data.data]
         await dispatch({
            type:'SET_JOBS',
            payload: spreadData
        });
        setTimeout(() => {
          dispatch({
            type: "TOGGLE_LOADER",
            payload: false,
          })
        }, 1000)
      } else {
        console.log("ERROR: could not fetch data");
      }
   }
};

//BELOW IS STEFANOS WORK AS EXAMPLES
/* export const addToCartAction = (bookToAdd) => ({
    type: ADD_TO_CART,
    payload: bookToAdd, // this is going to be the book we intend to add to the cart
    // the payload is any other piece of info required by the reducer to understand
    // what we want to do with this action
  })
  
  export const removeFromCartAction = (indexToRemove) => ({
    type: REMOVE_FROM_CART,
    payload: indexToRemove,
  })
  // the function returns an object, so you can dispatch it INSTEAD of dispatching the object
  
  export const setUsernameAction = (name) => ({
    type: SET_USERNAME,
    payload: name, // <- this is the content of the input field in CartIndicator!
  })
  
  // EXPLANATION:
  // if you have redux-thunk injected in the flow, you can do more with your action creators.
  // with redux thunk you can return out of them not just simple actions, but FUNCTIONS.
  // and these functions can be even ASYNC, so you can do even FETCHES inside of them!
  
  export const getBooksAction = () => {
    return async (dispatch) => {
      // if you're trying to dispatch something that is NOT an action WITHOUT thunk
      // everything will crash!
      // BUT if you have redux-thunk in the flow, the function you'll eventually dispatch
      // is going to be given by redux-thunk a DISPATCH function as the first argument
      console.log('Hello! this is a thunk action creator')
      // ...you can do whatever you want here
      // let's do a fetch!
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/food-books')
        if (response.ok) {
          const data = await response.json()
          // now it's time do to the dispatch
          dispatch({
            type: GET_BOOKS,
            payload: data,
          })
          setTimeout(() => {
            dispatch({
              type: TOGGLE_LOADER,
              payload: false,
            })
          }, 1000)
        } else {
          console.log('Houston, we got an error :(')
          // we can also dispatch ANOTHER action here for the error!
          dispatch({
            type: GET_BOOKS_ERROR,
          })
          dispatch({
            type: TOGGLE_LOADER,
            payload: false,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: GET_BOOKS_ERROR,
        })
        dispatch({
          type: TOGGLE_LOADER,
          payload: false,
        })
      }
    }
  } */