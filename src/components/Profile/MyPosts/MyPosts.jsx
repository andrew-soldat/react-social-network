import React from 'react';
import s from './MyPosts.module.css';
import styleForm from '../../common/FormsControls/FormsControls.module.css';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utilities/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            name="newPostText"
            component={Textarea}
            className={s.formControl} validate={[required, maxLength10]}
         />
         <button className={styleForm.button}>Add Post</button>
      </form>
   );
};

const AddPostsReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(
   AddNewPostForm
);

const MyPosts = (props) => {
   let state = props.profilePage;
   let postsElements = state.postsData.map((post) => <Post key={post.id} id={post.id} post={post.post} />);

   const onAddNewPost = (value) => {
      props.addPost(value.newPostText);
   };

   return (
      <div className={s.post}>
         <h3 className={s.title}>My posts</h3>
         <AddPostsReduxForm onSubmit={onAddNewPost} />
         <div className={s.postWrapper}>{postsElements}</div>
      </div>
   );
};
export default MyPosts;
