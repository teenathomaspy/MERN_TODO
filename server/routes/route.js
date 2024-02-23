import  express  from "express";
import { addTodo,getAllTodo ,getTodo,deleteTodo,updateTodo} from "../controller/todo_controller.js";
const route = express.Router();

route.post("/todos",addTodo);
route.get('/todos',getAllTodo);
route.get('/todos/:id',getTodo)
route.delete('/todos/:id',deleteTodo);
route.put('/todos/:id',updateTodo);

export default route;