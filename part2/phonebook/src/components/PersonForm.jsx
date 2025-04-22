const PersonForm = ({ onSubmit, newName, handleNameInput, newNumber, handleNumberInput }) => {
    return (
      <form onSubmit={onSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
  }
  
  export default PersonForm
  