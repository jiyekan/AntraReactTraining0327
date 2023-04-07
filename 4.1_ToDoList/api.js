const API = (() => {
    // Store API URL
    const API_URL = "http://localhost:3000/todos";

    const getTodos = async() => {
        const res = await fetch(API_URL);
        return await res.json();
    };

    const postTodo = async(newTodo) => {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        });
        return await res.json();
    };
    
    const deleteTodo = async(id) => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
    };

    return {
        getTodos,
        postTodo,
        deleteTodo
    };
})();