<template>
    <li @click="doTodo(todo.text)">
        <span class="todo-name" :class="{strike : todo.done}">{{todo.text}}</span><span id="todo-close" @click="closeTodo(todo.text)">X</span>
    </li>
</template>

<script>
    export default {
        name: 'TodoList',
        props: ['todo', 'closeTodo', 'doTodo'],
    }
</script>

<style scoped>
#todo-close{
    cursor: pointer;
    text-decoration: none;

}

#todo-close:hover{
    color: red;
}

.strike{
    text-decoration: line-through;
}
</style>