import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      Hello {name}
      <br />
      Your age is {age}
      <br />
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
    </div>
  );
}


export default StudentForm;