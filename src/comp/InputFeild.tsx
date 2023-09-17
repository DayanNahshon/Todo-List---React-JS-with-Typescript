import { useRef } from "react"
import "./style.css"

interface Props{
  todo: string,
  //setTodo - todo-פונקציה לעדכון סטייט ה
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  //handleAdd - של הטופס Submit פונקציה לטיפול באירוע 
  handleAdd: (e:React.FormEvent) => void
}

/*
  כפרמטר Props בריאקט שמקבלת אובייקט Function Component הינה InputFeild הקומפוננטה
  הפרופס מציין את הטיפוס שהקומפוננטה מקבלת
*/

const InputFeild: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  /*
    כלשהו דרך מראה בקוד DOM מאפשר גישה ישירה לאלמנט useRef
    שימוש למקרים כמו מיקוד, אנימציות ועוד
  */
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    //handleAdd תפעיל את הפונקציה submit לחיצה על כפתור 
    <form 
      className='input' 
      onSubmit={(e) => {
        handleAdd(e);
        //על מנת לטשטש אותו ולהוריד מיקוד input המקושרת לאלמנט blur בעת הגשת הטופס, תקרא המתודה 
        inputRef.current?.blur()
    }}>
        <input 
          ref={inputRef} 
          type="input" 
          value={todo}
          //כדי לעדכן את הסטייט setTodo-משתנה קוראים ל todo כאשר הערך
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter a task' 
          className='input__box' 
        />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild

