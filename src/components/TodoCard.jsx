export default function TodoCard(porps) {
  const todo = props.todo;
  const setNewStatus = props.setNewStatus;

  const CanBeSetDone = todo.status === 1;
  const CanBeSetCancel = todo.status !== 3;
  const CanBeSetNew = todo.status === 3;

  const handleSetDone = () => {
    setNewStatus(todo.id, 2);
  };
  const handleSetCancel = () => {
    setNewStatus(todo.id, 3);
  };
  const handleSetNew = () => {
    setNewStatus(todo.id, 1);
  };

  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-end">
        <div>
          <p className="card-text">{todo.create_at}</p>
          <h5 className="card-title">{todo.content}</h5>
        </div>
        <div className="">
          {CanBeSetDone ? (
            <button onClick={handleSetDone} className="btn btn-success mx-1">
              Done
            </button>
          ) : null}

          {CanBeSetCancel ? (
            <button onClick={handleSetCancel} className="btn btn-warning mx-1">
              Delete
            </button>
          ) : null}

          {CanBeSetNew ? (
            <button onClick={handleSetNew} className="btn btn-primary mx-1">
              Renew
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
