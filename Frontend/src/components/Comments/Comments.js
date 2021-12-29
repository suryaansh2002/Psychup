import React, { useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import axios from "axios";
import CommentForm from "./CommentForm";

export default function Comments(props) {
  const [comments, setComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const currentUserId = 1;
  useEffect(() => {
    axios
      .get("http://localhost:5000/comments")
      .then((res) => setComments(res.data.reverse()));
  }, []);
  console.log(comments);
  const postComments = comments.filter(
    (comment) => comment.postId == props.post._id
  );
  const rootComments = postComments.filter(
    (comment) => comment.parentId == null
  );
  console.log(rootComments);
  const getReplies = (commentId) => {
    return postComments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  console.log(props.post._id);
  const addComment = (text, parentId) => {
    console.log("addcomment", text, parentId);
    const data = {
      text,
      parentId,
      userId: props.user ? props.user.id : null,
      username: props.user ? props.user.name : null,
      postId: props.post._id,
    };
    axios
      .post("http://localhost:5000/comments", data)
      .then((comment) => window.location.reload());
  };

  const deleteComment = (commentId) => {
    //  const data={commentId}
    console.log(commentId);
    if (window.confirm("Are you sure you want to delete this comment?")) {
      axios
        .delete("http://localhost:5000/comments/" + commentId)
        .then((res) => window.location.reload());
    }
  };
  const updateComment = (text, commentId, comment) => {
    const data = {
      body: text,
    };
    axios
      .put("http://localhost:5000/comments/" + commentId, data)
      .then((response) => window.location.reload());
  };
  return (
    <div className="container">

      <div className="comment-header">Comments ({postComments.length})</div>
      <div className="c-b-c">
        <div className="c-bg">
          {props.user ? (
            <div>
              <CommentForm
                submitLabel="Submit"
                handleSubmit={addComment}
                placeholder="Add a comment..."
              />
            </div>
          ) : null}

          {rootComments.map((rootComment) => (
            <div className="comment-box">
              <SingleComment
                key={rootComment.id}
                comment={rootComment}
                replies={getReplies(rootComment._id)}
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                updateComment={updateComment}
                user={props.user ? props.user : null}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
