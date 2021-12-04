import React, { useState } from "react";

export default function CommentForm({
  hasCancelButton = false,
  initialText = "",
  handleSubmit,
  submitLabel,
  handleCancel,
  placeholder,
}) {
  const [text, setText] = useState(initialText);
  const isDisabled = text.length === 0;
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="form-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      ></textarea>
      <button
        className="btn btn-primary form-button"
        type="submit"
        disabled={isDisabled}
      >
        {submitLabel}
      </button>
      {hasCancelButton ? (
        <button className="btn btn-danger form-button" onClick={handleCancel}>
          Cancel
        </button>
      ) : null}
    </form>
  );
}
