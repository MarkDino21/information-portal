import React from "react";
import Post from "./Post";
import Comment from "./Comment";
import AddPost from "./AddPost";

const samplePosts = [
  {
    id: 1,
    message: "Hello World!",
    name: "Juan dela Cruz",
    date: "November 13, 2018",
    likes: 0,
    comments: []
  },
  {
    id: 2,
    message: "Lorem ipsum sa inyong lahat!",
    name: "Maria Santos",
    date: "November 14, 2018",
    likes: 5,
    comments: []
  },
  {
    id: 3,
    message:
      "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.",
    name: "Admin",
    date: "November 16, 2018",
    likes: 15,
    comments: [
      {
        id: 1,
        name: "Ana marie",
        date: "November 23, 2018",
        comment: "Ayus!"
      },
      {
        id: 2,
        name: "Marco Luis",
        date: "November 23, 2018",
        comment: "Nice!"
      }
    ]
  }
];

class Feed extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: samplePosts });
  }

  updateItem = (id, itemAttributes) => {
    var index = this.state.posts.findIndex(x => x.id === id);
    if (index === -1) console.log("Invalid");
    else
      this.setState({
        posts: [
          ...this.state.posts.slice(0, index),
          Object.assign({}, this.state.posts[index], itemAttributes),
          ...this.state.posts.slice(index + 1)
        ]
      });
  };

  handleTextareaChange = name => event =>
    this.setState({
      [name]: event.target.value
    });

  handleAddPostClick = () => {
    const { posts, newPost } = this.state;
    posts.push({
      id: Math.random(),
      name: "Admin",
      message: newPost,
      date: Date(),
      likes: 0,
      comments: []
    });
    this.setState({
      posts,
      newPost: ""
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="o-container feed-container">
        <AddPost
          onChange={this.handleTextareaChange("newPost")}
          onClick={this.handleAddPostClick}
          hasNoPost={!this.state.newPost}
        />
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          posts.map((post, index) => (
            <React.Fragment key={index}>
              <Post
                key={post.id}
                post={post}
                handleLikeClick={() => {
                  this.updateItem(post.id, { likes: post.likes + 1 });
                }}
              />
              {post.comments.length === 0
                ? ""
                : post.comments.map(({ id, name, date, comment }) => (
                    <Comment
                      key={id}
                      name={name}
                      date={date}
                      comment={comment}
                    />
                  ))}
            </React.Fragment>
          ))
        )}
      </div>
    );
  }
}

export default Feed;
