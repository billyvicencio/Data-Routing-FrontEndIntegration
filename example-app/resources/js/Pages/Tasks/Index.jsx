import { useForm, router } from '@inertiajs/react';

export default function Index({ tasks }) {
    const { data, setData, post, reset } = useForm({ title: '' });

    function addTask(e) {
        e.preventDefault();
        post('/tasks', { 
            onSuccess: () => reset('title') 
        });
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Task Manager</h1>

            <form onSubmit={addTask} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="Enter task title..."
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: '8px' }}>
                        <span style={{ marginRight: '10px' }}>{task.title}</span>
                        <button onClick={() => router.delete(`/tasks/${task.id}`)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}