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
      userId: props.user.id,
      username: props.user.name,
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
      {/* <div className="info">
        Okay so UI sucks, focus on functionality, both frontend backend done,
        integrated anfd fully functional user can add comments from here, once a
        user adds a comments, the same user or other users can reply to it,
        forming a chain of replies as you can see,once a user adds a comment,
        they have the ability to edit or delete that comment, within 5 minutes
        of posting that comment only, incase they make a mistake, after 5
        minutes of posting that comment the option to edit or delete goes. Any
        user who logs into the site can see all the comments but can add a new
        comment or reply to existing ones only if they are logged in, this is
        without authentication rn, but will integrate it with our site and make
        it functional, spent 2 days on this! Cheers!
      </div> */}
      <div className="comment-header">Comments ({postComments.length})</div>
      {props.user?<div>
      <CommentForm submitLabel="Submit" handleSubmit={addComment} placeholder="Add a comment..."/>
      </div>
      :null
      }
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
          user={props.user}

        />
      </div>
      ))}
    </div>
  );
}
