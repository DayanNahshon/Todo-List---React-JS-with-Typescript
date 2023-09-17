import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import "./style.css"

/*
    https://react-icons.github.io/react-icons
*/
import { GrEdit } from 'react-icons/gr';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

interface Props{
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
    /*
       .עם המזהה המתאים todo-של ה isDone עוברת על המערך ומעדכנת רק את handleDone הפונקציה
       כדי לעדכן את הסטייט עם המערך המעודכן setTodos-הפונקציה קוראת ל
    */
    const handleDone = (id:number) => {
        /*
            todos.map - עבור כל משימה במערך
            todo.id === id - בצע השוואה של המספר מזהה של המשימה למספר מזהה שהתקבל כפרמטר
            {...todo, isDone: !todo.isDone} - של המשימה isDone במידה והמזהה תואם, הפוך את הערך
            todo - אם לא תואם, החזר את המשימה כפי שהיא
        */
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const handleDelete = (id:number) => {
        /*
            פונקציית הסינון של המערך תשאיר רק את המשימות שמספר המזהה
            שונה מהמספר מזהה שהתקבל
            כלומר, תמחק את המשימה עם המספר מזהה המתאים
        */
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

     /*
       .עם המזהה המתאים todo-של ה todo עוברת על המערך ומעדכנת רק את handleEdit הפונקציה
       כדי לעדכן את הסטייט עם המערך המעודכן setTodos-הפונקציה קוראת ל
    */
    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault()
        /*
            todos.map - עבור כל משימה במערך
            todo.id === id - בצע השוואה של המספר מזהה של המשימה למספר מזהה שהתקבל כפרמטר
            {...todo, todo: editTodo} - editTodo של המשימה עם הערך של todo במידה והמזהה תואם, שנה את הערך
            todo - אם לא תואם, החזר את המשימה כפי שהיא
            setEdit(false) - לאחר מכן, סגור את העריכה
        */
        setTodos(todos.map((todo) => todo.id === id ? {...todo, todo: editTodo} : todo))
        setEdit(false)
    }

    /*
        כלשהו דרך מראה בקוד DOM מאפשר גישה ישירה לאלמנט useRef
        שימוש למקרים כמו מיקוד, אנימציות ועוד
    */
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    },[edit])

    return (
        <div>
            <form  className='todos__single' onSubmit={(e) => {handleEdit(e, todo.id)}}>
                {edit ? (
                    <input 
                        value={editTodo} 
                        onChange={(e) => setEditTodo(e.target.value)} 
                        className='todos__single--text'
                        ref={inputRef} 
                    />
                ) : todo.isDone ? (
                        /*אז הטקסט שיוצג יהיה עם קו חוצה, אחרת הטקסט יוצג רגיל todo.isDone אם */
                        <s className='todos__single--text'>{todo.todo}</s>
                    ) : (
                        <span className='todos__single--text'>{todo.todo}</span>
                )}

                <div>
                    <span className='icon' onClick={() => {
                        if(!edit && !todo.isDone){
                            setEdit(!edit)
                        }
                    }}><GrEdit/></span>
                    <span className='icon' onClick={() => handleDelete(todo.id)}><AiTwotoneDelete/></span>
                    <span className='icon' onClick={() => handleDone(todo.id)}><MdDone/></span>
                </div>
            </form>
        </div>
    )
}

export default SingleTodo