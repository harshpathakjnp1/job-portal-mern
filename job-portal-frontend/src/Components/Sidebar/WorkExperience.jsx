import React from "react";
import { InputField } from "../InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>

      <div>
        <InputField
          handleChange={handleChange}
          value=""
          title="Any Experience"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test3"
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="test3"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
