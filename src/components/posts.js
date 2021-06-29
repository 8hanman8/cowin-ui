import { PureComponent } from "react";
import { fetchPosts } from "../redux/posts/actions";
import { connect } from "react-redux";

class Posts extends PureComponent {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.renderPosts()}
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts = () => {
    const { posts } = this.props;
   if(posts.isProcessing){
     return 'Loading...'
   }else if(posts.error){
     return 'Error'
   }else{
    return posts.posts.map(x =><div key={x.id}>{x.title}</div>);
   }
  };
}
const mapStateToPros = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(mapStateToPros, mapDispatchToProps)(Posts);
