import {
   addPostActionCreator
} from '../../../Redux/profile-reducer';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText));
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
