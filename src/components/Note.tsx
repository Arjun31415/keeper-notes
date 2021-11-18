import React, { useState } from "react";

/* eslint-disable react/prop-types */
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { SwatchesPicker } from "react-color";

// import { useDrag } from "react-dnd";

function Note(props: {
  color: any;
  delete: (arg0: any) => void;
  id: String;
  title: String;
  content: String;
}) {
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
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(props.color);
  function handleDelete() {
    props.delete(props.id);
  }
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete} style={{ color: "#3d3535de", zIndex: 5 }}>
        <DeleteOutlinedIcon />
      </button>
      <button
        onClick={() => setDisplayColorPicker(!displayColorPicker)}
        style={{ color: "#3d3535de", zIndex: 5 }}
      >
        <PaletteOutlinedIcon />
      </button>
      <button style={{ color: "#3d3535de", zIndex: 5 }}>
        <PushPinOutlinedIcon />
      </button>
      <div
        style={{
          position: "absolute",
        }}
        hidden={!displayColorPicker}
        tabIndex={1}
        onBlur={() => setDisplayColorPicker(false)}
      >
        <SwatchesPicker
          colors={[lightColors]}
          width={7000}
          height={200}
          onChange={(c: { hex: String }) => {
            console.log(c);
            setColor(c.hex);
            console.log("color:", color);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
