import todo from "../model/todos.js";

export const addTodo = async (req,res) =>{
    try{
        console.log("reached controller");
        const newTodo =  await  todo.create({
        todo:req.body.newTodo,
        createdAt: Date.now()
    });
    await newTodo.save();
    return res.status(200).json(newTodo);
    }catch(error){
        return res.status(500).json(error.message);
    }
 }

export const getAllTodo = async (req,res) =>{
    try{
        const todoData = await todo.find({}).sort({'createdAt':-1});
        console.log(todoData);
        return res.status(200).json(todoData);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const getTodo = async (req,res) =>{
    try {
        const currentTodo =await todo.findById({_id: req.params.id});
        const updatedTodo =  await todo.findOneAndUpdate({_id:req.params.id},{ $set: { done: !currentTodo.done }},{returnOriginal: false} )
        return res.status(200).json(updatedTodo);
    } catch (error) {
       return(res.status(500).json(error.message))
    }
}
export const deleteTodo = async (req,res) =>{
    
    try{
        console.log('in delete');
        const deleted = await todo.findByIdAndDelete(req.params.id);
        console.log('deleted',deleted);
        return (res.status(200).json(deleted));
    }
    catch(error){
        return(res.status(500).json(error.message))
    }
}
export const updateTodo = async (req,res) =>{
    try {
        console.log('in update route',req.body);
         const updatedTodo =  await todo.findByIdAndUpdate(req.params.id,req.body,{new: true});
         console.log('updatedTodo',updatedTodo);
   return res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json(error.message);
    }
  

}
 