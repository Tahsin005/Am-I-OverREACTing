export default function Todo ({task, isDone}) {
    if (isDone) {
        return <li>{task}</li>
    }
    return <li>{task} kore nai</li>
}