import { useState } from "react";
import { FormInput } from "../../universal.component/form-input/form-input.component";
import "./form-style-2.styles.scss";

export const FormStyle2 = () => {
  const [participants, setParticipants] = useState([{ name: "", age: "" }]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = (index, event) => {
    const values = [...participants];
    values[index][event.target.name] = event.target.value;
    setParticipants(values);
  };

  const isValidParticipant = () => {
    const current = participants[currentPage];
    return current.name.trim() !== "" && current.age.trim() !== "";
  };

  const handleAddParticipant = () => {
    if (!isValidParticipant()) {
      alert("Please fill in all fields before adding a new member.");
      return;
    }
    setParticipants([...participants, { name: "", age: "" }]);
    setCurrentPage(participants.length); /* Go to the new page */
  };

  const handleRemoveParticipant = (index) => {
    /* Prevent removal if there's only one participant left */
    if (participants.length === 1) {
      alert("At least one member must be present.");
      return;
    }

    const values = [...participants];
    values.splice(index, 1);
    setParticipants(values);

    /* Adjust currentPage if necessary */
    if (currentPage >= values.length) {
      setCurrentPage(values.length - 1);
    }
  };

  const handleNextPage = () => {
    if (isValidParticipant() && currentPage < participants.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (!isValidParticipant()) {
      alert("Please fill in all fields before moving to the next member.");
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="form-inner-box form-style--2">
      <div className="form-style--2-textbox">
        <h3 className="heading-tertiary">Members Info:</h3>
        {participants.length > 0 && (
          <div className="participant-entry">
            <FormInput
              name="name"
              type="text"
              placeholder="Member Name"
              label="Member Name"
              value={participants[currentPage].name}
              onChange={(event) => handleChange(currentPage, event)}
              required
            />
            <FormInput
              name="age"
              type="number"
              placeholder="Member Age"
              label="Age"
              value={participants[currentPage].age}
              onChange={(event) => handleChange(currentPage, event)}
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveParticipant(currentPage)}
              disabled={participants.length === 1}
            >
              Remove Member
            </button>
          </div>
        )}
        <div className="navigation-buttons">
          <button
            type="button"
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextPage}
            disabled={
              !isValidParticipant() || currentPage >= participants.length - 1
            }
          >
            Next
          </button>
          <button type="button" onClick={handleAddParticipant}>
            Add Member
          </button>
        </div>
        <FormInput
          name="nationality"
          type="text"
          placeholder="Nationality"
          label="Nationality"
          required
        />
        <FormInput
          type="textarea"
          name="specialRequest"
          placeholder="Special Request"
          label="Special Request"
        />
      </div>
    </div>
  );
};
