import { Fab, Fade, Zoom } from "@mui/material";
import React, { useEffect, useState } from "react";

// import AddIcon from "@material-ui/icons/Add";
import AddIcon from "@mui/icons-material/Add";
// import PaletteIcon from "@material-ui/icons/Palette";
import PaletteIcon from "@mui/icons-material/Palette";
import { SwatchesPicker } from "react-color";
import { v4 as uuidv4 } from "uuid";

function CreateArea(p) {
  const lightColors = [
    "#F28B82",
    "#FBBC04",
    "#FFF475",
    "#CCFF90",
    "#A7FFEB",
    "#CBF0F8",
    "#AECBFA",
    "#D7AEFB",
    "#FDCFE8",
    "#E6C9A8",
    "#E8EAED",
    "#FFFFFF",
  ];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(null);
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
      setDisplayColorPicker(false);
    });
  }, []);

  function handleContent(event) {
    const { value: val } = event.target;
    setContent(val);
  }
  function handleClick(event) {
    event.preventDefault();
    if (title === "" || content === "") return;
    console.log("handleClick: ", color);
    p.addNote({ id: uuidv4(), title: title, content: content, color: color });
    setTitle("");
    setContent("");
    setColor(null);
    setDisplayColorPicker(false);
  }
  function handleExpand() {
    setIsExpanded(true);
  }
  return (
    <div tabIndex={100}>
      <form
        className="create-note"
        tabIndex={0}
        style={{ backgroundColor: color ? color : "white" }}
      >
        {isExpanded && (
          <input
            onChange={handleTitle}
            name="title"
            placeholder="Title"
            value={title}
            tabIndex={1}
            style={{ backgroundColor: "transparent" }}
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
          style={{ backgroundColor: "transparent" }}
        />
        <div
          style={{
            display: "flex",
            padding: "10px",
            justifyContent: "space-around",
          }}
        >
          <Zoom in={isExpanded}>
            <Fab onClick={handleClick}>
              <AddIcon style={{ zIndex: "3" }} />
            </Fab>
          </Zoom>
          <Zoom in={isExpanded} style={{ marginRight: "5vw" }}>
            <Fab
              onClick={() => {
                setDisplayColorPicker(!displayColorPicker);
              }}
              style={{ backgroundColor: color == "#ffffff" ? "black" : color }}
            >
              <PaletteIcon
                style={{
                  zIndex: "3",
                }}
              />
            </Fab>
          </Zoom>
          <Fade in={isExpanded && displayColorPicker}>
            <div
              style={{
                position: "absolute",
                // zIndex: "2",
                left: "330px",
                top: "190px",
                width: "min-content",
              }}
              hidden={!displayColorPicker}
            >
              <SwatchesPicker
                colors={[lightColors]}
                width={7000}
                height={200}
                onChange={(c) => {
                  console.log(c);
                  setColor(c.hex);
                  console.log("color:", color);
                }}
              />
            </div>
          </Fade>
        </div>{" "}
      </form>
    </div>
  );
}

export default CreateArea;
