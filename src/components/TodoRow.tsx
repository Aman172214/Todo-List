import React, { useState } from "react";
import Button from "./Button.tsx";
import Checkbox from "./Checkbox.tsx";

const TodoRow = ({ label, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div
      className="d-flex align-items-center justify-content-between"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Checkbox label={label} />
      {hovered && (
        <Button variant="small" onClick={handleDeleteClick}>
          <span aria-hidden="true">&times;</span>
        </Button>
      )}
    </div>
  );
};

export default TodoRow;
