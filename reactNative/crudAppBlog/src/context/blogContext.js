import createDataContext from "./createDataContext";

const blogReducer = (state,action)=>{
   switch(action.type){
      case "add_blogPost":
         return [...state,{title:`BlogPost ${action.payload}`}]
      
         case "default":
            return [...state];
      }

   
}

const addBlogPost =(dispatch)=>{
   return ()=>{
      dispatch({type:"add_blogPost"});
   }
}

export const {Context, Provider } = createDataContext(blogReducer,{addBlogPost},[]);