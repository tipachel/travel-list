export default function Item({ item, onRemoveItem, onToggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                <span>{item.quantity} </span>
                {item.description}
            </span>
            <button onClick={() => onRemoveItem(item.id)}>❌</button>
        </li>
    );
}