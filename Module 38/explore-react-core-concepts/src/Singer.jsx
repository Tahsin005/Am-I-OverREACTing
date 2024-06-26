export default function Singer ({singer}) {
    return (
        <div>
            <h3>I am a singer</h3>
            <p>Name: {singer.name}</p>
            <p>Age: {singer.age}</p>
        </div>
    )
}