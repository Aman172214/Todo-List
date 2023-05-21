import React, { useState } from "react";
import Button from "./Button.tsx";
import Checkbox from "./Checkbox.tsx";
import './TodoRow.css'

interface TodoRowProps {
  label: string;
  onDelete: () => void;
  onComplete: (isChecked: boolean) => void;
}

const TodoRow: React.FC<TodoRowProps> = ({ label, onDelete, onComplete }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`todo-row ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Checkbox label={label} onChange={onComplete} />
        <div className="flex-grow"></div>
        <div className="delete-container">
          <Button
            variant="small"
            className={`delete-button ${isHovered ? "visible" : ""}`}
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  };
  

export default TodoRow;
