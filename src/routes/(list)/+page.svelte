<script>
    export let data;
</script>

<div>
    <h1>잭영의 TODO List</h1>
    {#each data.todos as todo}
        <div class="todo">
            <form method="POST" action="?/delete">
                {todo.title} {todo.content} {new Date(todo.created_at).toLocaleString()}
                <input type="hidden" name="id" value={todo.id}>
                <button type="submit">삭제</button>
            </form>
        </div>
    {/each}
</div>

<style>
    h1 {
        text-align: center;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .todo {
        margin-top: 10px;
    }
</style>