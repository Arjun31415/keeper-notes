import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(p) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  function handleTitle(event) {
    const { value: val } = event.target;
    setTitle(val);
  }

  // $(document).mouseup(function (e) {
  //   var container = $(".create-note");
  //   console.log(container);
  //   if (!container.is(e.target) && container.has(e.target).length === 0) {
  //     setIsExpanded(false);
  //   }
  // });

  function handleContent(event) {
    const { value: val } = event.target;
    setContent(val);
  }
  function handleClick(event) {
    event.preventDefault();
    if (title === "" || content === "") return;
    p.addNote({ id: uuidv4(), title: title, content: content });
    setTitle("");
    setContent("");
  }
  function handleExpand() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleTitle}
            name="title"
            placeholder="Title"
            value={title}
          />
        )}
        <textarea
          onChange={handleContent}
          onClick={handleExpand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
