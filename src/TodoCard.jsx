const colors = ['teal', 'red', 'black', 'green', 'purple']


export default function TodoCard({ item, onDelete, onEdit }) {
    return <div style={{ border: '1px solid', padding: 10, margin: 4, color: 'white', backgroundColor: colors[item.colorIndex] }}>
        <button onClick={onDelete}>X</button>
        <button onClick={onEdit}>🖊</button>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
    </div>
}
