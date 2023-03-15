import React, { useState, useEffect } from "react";
import "./comments.css";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";
import CommentForm from "./CommentForm";
import { FaComments } from "react-icons/fa";

export default function SingleComment(props) {
  const fiveMinutes = 300000;
  const timePassed =
    new Date() - new Date(props.comment.createdAt) > fiveMinutes;
  var canReply;
  var canEdit;
  var canDelete;
  if (props.user) {
    canReply = Boolean(props.user);
    canEdit = props.user.id === props.comment.userId && !timePassed;
    canDelete = props.user.id === props.comment.userId && !timePassed;
  }
  const getInitials = (name) => {
    let initials = name.split(" ");

    if (initials.length > 1) {
      return initials.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      return name.substring(0, 2);
    }
  };

  const [comments, setComments] = useState([]);
  useEffect(() => {
    setTog("");
    axios
      .get("https://psychup-backend.vercel.app/comments")
      .then((res) => setComments(res.data));
  }, []);
  console.log(comments);
  const getReplies = (commentId) => {
    return comments
      .filter((comment) => comment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  console.log(props.activeComment);

  const isReplying =
    props.activeComment &&
    props.activeComment.type === "replying" &&
    props.activeComment.id == props.comment._id;

  const isEditing =
    props.activeComment &&
    props.activeComment.type === "editing" &&
    props.activeComment.id == props.comment._id;

  console.log(props.activeComment);
  console.log(isEditing);
  const replyId = props.comment._id;
  const [tog, setTog] = useState("");
  function showReplies(id) {
    setTog("");
    setTog(id);
  }
  function hideReplies(id) {
    setTog("");
  }
  return (
    <div className="single-comment-container">
      <div>
        <div className="user-button-c">
          <button className="user-button">
            {getInitials(props.comment.username)}
          </button>
        </div>
        <div className="comment-user">
          {props.comment.username}
          <div className="comment-d">
            {new Date(props.comment.createdAt).toLocaleDateString()}{" "}
            {new Date().toLocaleDateString() ==
            new Date(props.comment.createdAt).toLocaleDateString()
              ? new Date(props.comment.createdAt).toLocaleTimeString()
              : null}
          </div>
        </div>
      </div>
      {/* <div className="comment-time">{props.comment.createdAt}</div> */}

      {!isEditing ? (
        <div className="comment-body">{props.comment.body}</div>
      ) : null}
      {isEditing ? (
        <CommentForm
          submitLabel="Update"
          hasCancelButton
          initialText={props.comment.body}
          handleSubmit={(text) =>
            props.updateComment(text, props.comment._id, props.comment)
          }
          handleCancel={() => props.setActiveComment(null)}
        />
      ) : null}
      <div className="comment-actions">
        {canReply ? (
          <button
            className="action"
            onClick={() =>
              props.setActiveComment({
                id: props.comment._id,
                type: "replying",
              })
            }
          >
            <FaComments className="comment-icon" />
            Reply
          </button>
        ) : null}
        {canEdit ? (
          <button
            className="action"
            onClick={() =>
              props.setActiveComment({
                id: props.comment._id,
                type: "editing",
              })
            }
          >
            Edit
          </button>
        ) : null}
        {canDelete ? (
          <button
            className="action"
            onClick={() => props.deleteComment(props.comment._id)}
          >
            Delete
          </button>
        ) : null}
      </div>

      {isReplying ? (
        <CommentForm
          submitLabel="Reply"
          handleSubmit={(text) => props.addComment(text, replyId)}
        />
      ) : null}
      {props.comment.parentId == null && props.replies.length ? (
        <div>
          {tog == "" ? (
            <button
              className="tog-r"
              onClick={() => showReplies(props.comment._id)}
            >
              View Replies
            </button>
          ) : (
            <button
              className="tog-r"
              onClick={() => hideReplies(props.comment._id)}
            >
              Hide Replies
            </button>
          )}
        </div>
      ) : null}
      {props.replies.length &&
      (tog == props.comment._id || props.comment.parentId !== null) ? (
        <div className="replies">
          {props.replies.map((reply) => (
            <div>
              <SingleComment
                comment={reply}
                key={reply.id}
                replies={getReplies(reply._id)}
                currentUserId={props.currentUserId}
                deleteComment={props.deleteComment}
                activeComment={props.activeComment}
                setActiveComment={props.setActiveComment}
                addComment={props.addComment}
                updateComment={props.updateComment}
                user={props.user}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
