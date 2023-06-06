<template>
    <div class="todo-container">
        <div class="todos">
            <h1>Todo List</h1>
            <form v-on:submit.prevent="enterValue">
                <input type="text" v-model="text_value">
            </form>
            <ul >
                <TodoList v-for="todo in todolist" :key="todo.text" :todo="todo" :closeTodo="closeTodo" :doTodo="doTodo"/>
            </ul>
        </div>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
    export default {
        name: 'TodosPage',
        components: {
            TodoList
        },
        data() {
            return {
                title: "Hello there!",
                text_value: "",
                todolist : [
                    {
                        text: "Buy Oranges",
                        done: false
                    },
                    {
                        text: "Watch Oranges",
                        done: false
                    },
                    {
                        text: "Eat Oranges",
                        done: false
                    },
                ],
            }
        },
        methods: {
            enterValue(){
                this.todolist.push({
                    text: this.text_value,
                    done: false
                });
                this.text_value = "";
            },

            closeTodo(text){
                const newTodo = this.todolist.filter((todo) => {
                    return todo.text !== text;
                });
                this.todolist = newTodo;
            },

            doTodo(checkText){
                const newTodo = this.todolist.map((todos) => {
                    if(todos.text === checkText){
                        todos.done = !todos.done;
                        return todos;
                    }
                    return todos;
                })
                this.todolist = newTodo;
            }
        }
    }
</script>

<style scoped>
    .todo-container{
        margin: 80px 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    ul{
        padding: 0;
    }

    li{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 5px 0;
        padding: 10px;
        border-radius: 5px;
    }

    li:nth-child(2n){
        background: skyblue;
    }

    h1{
        text-align: center;
    }

    input{
        width: 100%;
        box-sizing: border-box;
    }

    .todos{
        width: 450px;
        border-radius: 5px;
        padding: 15px 25px;
        box-shadow: 0 0 10px 0 black;
    }
</style>