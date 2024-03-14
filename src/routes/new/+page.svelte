<form method="POST" action="?/create">
    <label for="title">제목</label>
    <input type="text" id="title" name="title" required>
    <label for="content">내용</label>
    <textarea id="content" name="content" required></textarea>
    <button type="submit">만들기~</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
    }
    label {
        margin-top: 10px;
    }
    input, textarea {
        margin-top: 5px;
        padding: 5px;
    }
    button {
        margin-top: 10px;
        padding: 5px;
    }
</style>