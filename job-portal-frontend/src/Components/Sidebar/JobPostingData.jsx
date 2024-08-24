import React from "react";
import { InputField } from "../InputField";

const JobPostingData = ({ handleChange }) => {
  const now = new Date();
  const twentyfourhoursago = new Date(now - 24 * 60 * 60 * 1000);
  const sevendaysago = new Date(now - 7 * (24 * 60 * 60 * 1000));
  const thirtydaysago = new Date(now - 30 * (24 * 60 * 60 * 1000));

  //convert date to string
  const twentyfourhoursagodate = twentyfourhoursago.toISOString().slice(0, 10);
  const sevendaysagodate = sevendaysago.toISOString().slice(0, 10);
  const thirtydaysagodate = thirtydaysago.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <InputField
          handleChange={handleChange}
          value=""
          title="All time"
          name="test5"
        />
        <InputField
          handleChange={handleChange}
          value={twentyfourhoursagodate}
          title="Last 24 Hours"
          name="test5"
        />
        <InputField
          handleChange={handleChange}
          value={sevendaysagodate}
          title="Last 7 Days"
          name="test5"
        />
        <InputField
          handleChange={handleChange}
          value={thirtydaysagodate}
          title="Last Month"
          name="test5"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
