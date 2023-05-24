import "./Form.css";

export default function Form({ onAddMovie }) {
  // the onAddMovie function is defined in the parent component (App) and passed in as a prop  
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
// we use our function received as a prop to add a new movie to our state existing in the parent component (App) 
    onAddMovie(data);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new movie</h2>
      <div className="form__fields">
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            name="name"
            placeholder="Dr. Strange"
            required
          />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="isLiked">
            Like
          </label>
          <input
            className="form__checkbox"
            id="isLiked"
            type="checkbox"
            name="isLiked"
          />
        </div>
        <button type="submit" className="form__button">
          Add
        </button>
      </div>
    </form>
  );
}
