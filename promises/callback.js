function getProjects(callback) {
    setTimeout(() => {
        callback([{ id: 1, name: 'Project A' }, { id: 2, name: 'Project B' }]);
    }, 100);
}
function getTasks(projects, callback) {
    setTimeout(() => {
        callback([{ id: 1, projectId: 1, title: 'Task A' },
            { id: 2, projectId: 2, title: 'Task B'}]);
    }, 100);
}
function render({ projects, tasks }) {
    console.log(`Render ${projects.length} projects and ${tasks.length} tasks`);
}
getProjects((projects) => {
    getTasks(projects, (tasks) => {
        render({ projects, tasks });
    });
});
