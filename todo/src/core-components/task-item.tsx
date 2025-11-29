import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import ButtonIcon from "../components/button-icon";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import React from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/tesk";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";


interface TaskItemProps {
    task: Task;
}


export default function TaskItem({task}: TaskItemProps){

    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);

    const [taskTitle, setTaskTitle] = React.useState(task.title || "")

    const {updateTask, updateTaskStatus, deleteTask} = useTask();

    function handleEditTask(){
        setIsEditing(true);
    }

    function handleExitTask(){
        if(task.state === TaskState.Creating){
            deleteTask(task.id)
        }

        setIsEditing(false);
    }

    function handleChangeTaskTitle (e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "")
    }

    function handleSaveTask(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        // console.log("Id: "+task.id, "//  Titulo da Task: "+taskTitle);
        console.log({id: task.id, title: taskTitle, state: task.state, Concluded: task.concluded});
        //chamar a fução de atualizar
        updateTask(task.id, {title: taskTitle});
        

        setIsEditing(false);
    }

    function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
        const chacked = e.target.checked;

        updateTaskStatus(task.id, chacked);
        console.log(chacked);

    }

    function handleDeleteTask(){
        deleteTask(task.id)
    }

    return (
       
    <Card size="md">
        {!isEditing ? (
        <div className="flex items-center gap-4 ">
            <InputCheckbox value={task?.concluded?.toString()} checked={task?.concluded} onChange={handleChangeTaskStatus}/>

            <Text className={cx("flex-1", {
                "line-through": task?.concluded,
            })}> {task?.title}</Text>
            <div className="flex gap-1">
                <ButtonIcon icon={TrashIcon} variant="tertiary" onClick={handleDeleteTask}/>
                <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
            </div>
        </div>  
        ): ( 
        <form onSubmit={handleSaveTask} className="flex items-center gap-4 ">
            <InputText
            // Parece q o problema do warning ta aqui, segundo a documentacao nn precisa do value
             value={taskTitle}
             className="flax-1" 
             onChange={handleChangeTaskTitle} 
             required 
             autoFocus
             /> 
            <div className="flex gap-1">
                <ButtonIcon 
                    type="button" 
                    icon={XIcon} 
                    variant="secondary" 
                    onClick={handleExitTask}
                />

                <ButtonIcon 
                    type="submit" 
                    icon={CheckIcon} 
                    variant="primary" 
                />
            </div>
        </form>
    )}
        

    </Card>
    
    )}   
