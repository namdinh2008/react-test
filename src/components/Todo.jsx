import { useState, useEffect } from 'react';
import { Trash, CheckSquare, RotateCcw } from 'lucide-react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [activeTab, setActiveTab] = useState('new');

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem('todos');
  //   if (savedTodos) {
  //     setTodos(JSON.parse(savedTodos));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      alert("Xin hãy nhập thông tin");
      return;
    }
    
    const currentTime = new Date();
    const timeString = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')} ${currentTime.getDate().toString().padStart(2, '0')}/${(currentTime.getMonth() + 1).toString().padStart(2, '0')}/${currentTime.getFullYear()}`;

    const newTask = {
      id: new Date().getTime(),
      text: newTodo,
      status: 'new',
      time: timeString
    };

    setTodos([newTask, ...todos]);
    setNewTodo('');
  };

  const updateTodoStatus = (id, newStatus) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status: newStatus } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => todo.status === activeTab);

  return (
    <div className="container py-5">
      <form onSubmit={handleAddTodo} className="mb-4 d-flex justify-content-center align-items-center">
        <div className="input-group gap-3" style={{width: "80%"}}>
          <input
            type="text"
            className="form-control rounded"
            placeholder="Bạn có kế hoạch gì ...."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button 
            type="submit" 
            className="btn text-white rounded"
            style={{ backgroundColor: '#f5a623' }}
          >
            Lưu
          </button>
        </div>
      </form>

      <div className="d-flex gap-2 mb-4">
        <button
          className={`btn flex-grow-1 ${activeTab === 'new' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setActiveTab('new')}
        >
          Mới
        </button>
        <button
          className={`btn flex-grow-1 ${activeTab === 'completed' ? 'btn-success' : 'btn-outline-success'}`}
          onClick={() => setActiveTab('completed')}
        >
          Đã hoàn thành
        </button>
        <button
          className={`btn flex-grow-1 ${activeTab === 'cancelled' ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => setActiveTab('cancelled')}
        >
          Đã hủy
        </button>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <div 
            key={todo.id}
            className={`card mb-2 ${
              todo.status === 'completed' ? 'border-success' :
              todo.status === 'cancelled' ? 'border-danger' :
              'border-primary'
            }`}
          >
            <div className="card-body d-flex justify-content-between align-items-center p-3">
              <div>
                <small className="text-muted d-block">{todo.time}</small>
                <h5 className="mx-0 my-1">{todo.text}</h5>
                <h6 className=''>id: {todo.id}</h6>
                <h6 className=''>Status id: {todo.status}</h6>
              </div>
              <div className="d-flex gap-2">
                {todo.status === 'new' && (
                  <>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => updateTodoStatus(todo.id, 'completed')}
                    >
                      <CheckSquare size={18} />
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => updateTodoStatus(todo.id, 'cancelled')}
                    >
                      <Trash size={18} />
                    </button>
                  </>
                )}
                {todo.status === 'completed' && (
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => updateTodoStatus(todo.id, 'cancelled')}
                  >
                    <Trash size={18} />
                  </button>
                )}
                {todo.status === 'cancelled' && (
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => updateTodoStatus(todo.id, 'new')}
                  >
                    <RotateCcw size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;