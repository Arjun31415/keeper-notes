import React, { useEffect, useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { v4 as uuidv4 } from "uuid";

function CreateArea(p) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  function handleTitle(event) {
    // destructuring variables
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
  useEffect(() => {
    window.addEventListener("click", (evt) => {
      const formElement = document.getElementsByClassName("create-note")[0];
      let targetElement = evt.target; // clicked element

      do {
        if (targetElement === formElement) {
          // This is a click inside. Do nothing, just return.
          return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);

      // This is a click outside.
      setIsExpanded(false);
    });
  }, []);

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
    <div tabIndex={100}>
      <form className="create-note" tabIndex={0}>
        {isExpanded && (
          <input
            onChange={handleTitle}
            name="title"
            placeholder="Title"
            value={title}
            tabIndex={1}
          />
        )}
        <textarea
          onChange={handleContent}
          onClick={handleExpand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={content}
          tabIndex={0}
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
