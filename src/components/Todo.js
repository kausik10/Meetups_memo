import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [isModalopen, setisModalopen] = useState(false);

  function handleDelete() {
    setisModalopen(true);
  }
  function closeModalHandler() {
    setisModalopen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {isModalopen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {isModalopen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
