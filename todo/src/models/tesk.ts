export const TASKS_KEY = "tasks";

export enum TaskState {
    Created = 'Created',
    Creating = "Creating",
};

export interface Task{
    id: string;
    title: string;
    concluded?: boolean;
    state?: TaskState;
}