// export default function Todo ({task, isDone}) {
//     if (isDone) {
//         return <li>{task}</li>
//     }
//     return <li>{task} kore nai</li>
// }

// conditional rendering (ternary operator)
// export default function Todo ({task, isDone}) {
//     return (
//         <li>{task} {isDone? 'korse' : 'kore nai'}</li>
//     )
// }

// export default function Todo ({task, isDone}) {
//     return (
//         <li>{task} {isDone && ': is done'}</li>
//     )
// }

// export default function Todo ({task, isDone}) {
//     return (
//         <li>{task} {isDone || ': do it'}</li>
//     )
// }

export default function Todo ({task, isDone}) {
    let listItem;
    if (isDone) {
        listItem = <li>{task} Korse</li>
    } else listItem = <li>{task} kore nai</li>

    return listItem;
}