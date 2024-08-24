import React from 'react'
import { InputField } from '../InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Location</h4>

    <div>
      <InputField
        handleChange={handleChange}
        value=""
        title="Any"
        name="test4"
      />
      <InputField
        handleChange={handleChange}
        value="full-time"
        title="Full-time"
        name="test4"
      />
      <InputField
        handleChange={handleChange}
        value="temporary"
        title="Temporary"
        name="test4"
      />
      <InputField
        handleChange={handleChange}
        value="part-time"
        title="Part-time"
        name="test4"
      />
      
    </div>
  </div>
  )
}

export default EmploymentType
