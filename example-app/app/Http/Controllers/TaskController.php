<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    // Display all tasks
    public function index()
    {
        return Inertia::render('Tasks/Index', [
            'tasks' => Task::orderBy('created_at', 'desc')->get(),
        ]);
    }

    // Store a new task
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
        ]);

        Task::create($validated);

        return redirect()->back();
    }

    // Toggle task completion status
    public function update(Task $task)
    {
        $task->update([
            'is_completed' => !$task->is_completed,
        ]);

        return redirect()->back();
    }

    // Delete a task
    public function destroy(Task $task)
    {
        $task->delete();

        return redirect()->back();
    }
}