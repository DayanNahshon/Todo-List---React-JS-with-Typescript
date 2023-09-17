import { useState } from 'react';
import './App.css';
import InputFeild from './comp/InputFeild';
import { Todo } from './model';
import TodoList from './comp/TodoList';

const App: React.FC = () => {

  //לאחסון משימה נוכחית todo הגדרת סטייט 
  const [todo, setTodo] = useState<string>("")

  //לאחסון מערך של משימות todos הגדרת סטייט 
  const [todos, setTodos] = useState<Todo[]>([])

  //לטיפול בהוספת משימה חדשה handleAdd הגדרת פונקציית 
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){
      //setTodos עם מזהה ייחודי באמצעות פונקציית todos-הוספת משימה חדשה ל
      /*
        todos מייצג את תכונת הפריסה ובעצם פורסת את המערך הנוכחי ...todos הסינטקס 
        לאלמנטים פרטניים ובכך מאפשר לנו להעתיק את כל האלמנטים ממערך אחד
        לתוך מערך חדש בצורה נוחה
        כלומר, השימוש בפריסה מבטיח שלא נאבד את המשימות הקיימות במערך
      */
      /*
        {id: Date.now(), todo: todo, isDone: false}
        הוספת אובייקט חדש, המייצג משימה חדשה, לסוף המערך
      */
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])

      //todo-לאחר הוספת המשימה החדשה למערך, איפוס המשימה הנוכחית ב 
      setTodo("")
    }
  }

  console.log(todos)

  return (
    <div className="App">
      <span className='heading'>To Do List</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={(e) => handleAdd(e)}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
