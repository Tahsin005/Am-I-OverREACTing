export default function Friend({friend}) {
    // console.log(friend);
    const friendStyle = {
        margin: '20px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: 'lightblue',
        color: 'black',
    }
    return (
        <div className='boxy' style={friendStyle}>
            <h4>Name: {friend.name}</h4>
            <h3>Email: {friend.email}</h3>
            <h3>Phone: {friend.phone}</h3>
            <h3>Website: {friend.website}</h3>
        </div>
    )
}