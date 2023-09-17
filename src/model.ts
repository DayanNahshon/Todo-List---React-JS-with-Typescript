import { useReducer } from "react"
/*
    useReducer:
    useState במקום להשתמש בהוק state הינו הוק בריאקט המאפשר לנהל 
    הסינטקס - const [state, dispatch] = useReducer(reducer, initialState)
    dispatch - useState-במקום ל dispatch-קוראים ל 
    reducer - action-בהתקם ל state-מטפל בעדכון ה
    initialStat - מצב התחלתי
*/

//-----הגדרת טיפוסים
export interface Todo{
    id: number,
    todo: string,
    isDone: boolean
}

// type Actions = 
//     //payload = action-מונח המשמש לתיאור נתונים או מידע המועברים בתוך ה
//     { type: "add", payload: string} |
//     { type: "remove", payload: number} |
//     { type: "done", payload: number}


// //-----הגדרת רדיוסר
// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch (action.type) {
//         case "add":
//             return [...state, {id: Date.now(), todo: action.payload, isDone:false}]
//         case "remove":
//             return state.filter((todo) => todo.id !== action.payload)
//         case "done":
//             return state.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone}: todo)
//         default:
//             return state
//     }
// }

// //-----הגדרת מצב התחלתי
// const initialState: Todo[] = []

// //-----שימוש בהוק
// const [state, dispatch] = useReducer(TodoReducer, initialState)

