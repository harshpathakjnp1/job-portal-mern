import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import { useLoaderData, useParams } from 'react-router-dom'
import JobPostingData from './../Components/Sidebar/JobPostingData';

const UpdateJob = () => {

  const { id } = useParams(); // Get the `id` from the URL
  const [jobData, setJobData] = useState(null); // Store job data
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState(null); // Handle errors
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    fetch(`http://localhost:5000/update-job/${id}`, {
      method: "PATCH", headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => res.json()).then((result) => {
      if (result.acknowledged === true) {
        alert('Job Updated Successfully')
        reset()

      }
    })
  };

  useEffect(() => {
    // Fetch job data from the API
    const fetchJobData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/all-jobs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job data');
        }
        const data = await response.json();
        setJobData(data); // Set job data once fetched
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchJobData(); // Call the function to fetch data
  }, [id]);

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle errors
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Destructure job data after it's fetched
  const {
    jobTitle, companyName, minPrice, maxPrice, salaryType,
    jobLocation, experienceLevel, employmentType,
    description, companyLogo, postedBy, skills, postingDate
  } = jobData;

  // Destructuring job data after loader fetches it





  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "C++", label: "C++" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },


  ]

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st Row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 2nd row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="Ex: 15000"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="Ex: 35000"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 3rd row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select{...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly       </option>
                <option value="Yearly">Yearly</option>
              </select>

            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: Varanasi, India"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                defaultValue={postingDate}
                placeholder="Ex: 2023-11-24"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NoExperience">NoExperience</option>
                <option value="WorkRemotely">Internship       </option>
                <option value="Yearly">Yearly</option>
              </select>

            </div>

          </div>

          {/* 5th row  */}
          <div>
            <label className="block mb-2 text-lg">Required Skills Sets:</label>
            <CreatableSelect defaultValue={skills}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4" />

          </div>

          {/* 6th row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                defaultValue={companyLogo}
                type="url"
                placeholder="Paste your company logo URL : http://wesharelogo/img1"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select  {...register("employmentType")} className="create-job-input">
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time       </option>
                <option value="Temporary">Temporary</option>
              </select>

            </div>

          </div>

          {/* 7th row  */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea defaultValue={description} className="w-full pl-3 py-1.5 focus:outline-none  placeholder:text-gray-500 " {...register("description")}
              rows={6}

              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam vero beatae. Nisi sequi aut laboriosam animi dignissimos fugiat cumque!" />
          </div>

          {/* 8th row  */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              defaultValue={postedBy}
              type="email"
              placeholder="your email @gmail.com"
              {...register("postedBy")}
              className="create-job-input"
            />

          </div>

          <input type="submit" className="my-5 block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" />
        </form>
      </div>

    </div>
  )
}

export default UpdateJob
