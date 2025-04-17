import React from "react";
import { Router, Link, Routes, Route,  } from "react-router-dom";
import Counter from "./components/Counter";
import ControlledForm from "./components/ControlledForm";
import ToggleTheme from "./components/ToggleTheme";
import FetchData from "./components/FetchData";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="h-full w-full wrap ">
      <nav className="flex border-2 mb-3 ">
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/counter">Counter</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/form">Form</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/theme">Theme</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/api">Fetch</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/todo">Todo</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/modal">Modal</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/debounce">Debounce</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/pagination">Pagination</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/toggle">Toggle</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/dynamic">Dynamic</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/memo">Memo</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/callback">Callback</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/context">Context</Link>
        <Link className="bg-violet-400 border-2 border-red-500 w-[100px] p-2 m-2 rounded" to="/drag">Drag</Link>
      </nav>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<ControlledForm />} />
        <Route path="/theme" element={<ToggleTheme />} />
        <Route path="/api" element={<FetchData />} />
        <Route path="/todo" element={<TodoList />} />
        {/* <Route path="/modal" element={<Modal show={true} onClose={() => {}}>This is modal content</Modal>} /> */}
        {/* <Route path="/debounce" element={<DebouncedInput />} /> */}
        {/* <Route path="/pagination" element={<Pagination items={Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)} itemsPerPage={5} />} /> */}
        {/* <Route path="/toggle" element={<ToggleComponent />} /> */}
        {/* <Route path="/dynamic" element={<DynamicForm />} /> */}
        {/* <Route path="/memo" element={<ExpensiveCalcComponent number={2} />} /> */}
        {/* <Route path="/callback" element={<ParentWithCallback />} /> */}
        {/* <Route path="/context" element={<ContextApp />} /> */}
        {/* <Route path="/drag" element={<DragDrop />} /> */}
      </Routes>
      
    </div>
  );
};

export default App;
