const Contact = ({ name, number, onDelete }) => {
    return (
      <p>
        {name}: {number}
        <button onClick={onDelete}>Delete</button>
      </p>
    )
}

export default Contact