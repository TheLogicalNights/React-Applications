import "./AddUserForm.css";
import Card from "../ui/Card";

const AddUserForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className="input">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age (Years)">Age</label>
        <input type="number" id="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUserForm;
