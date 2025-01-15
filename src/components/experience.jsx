import React from "react";
import { useForm } from "react-hook-form";

export default function ExperienceForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 space-y-4 bg-gray-50 border rounded-md"
    >
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium">
         Company Name
        </label>
        <input
          id="companyName"
          {...register("companyName")}
          type="text"
          placeholder="Company Name"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium">
         Job Title
        </label>
        <input
          id="jobTitle"
          {...register("jobTitle")}
          type="text"
          placeholder="Job title"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium">
         Start Date
        </label>
        <input
          id="experienceStartDate"
          {...register("startDate")}
          type="text"
          placeholder="Start Date"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="endDate" className="block text-sm font-medium">
          End Date
        </label>
        <input
          id="experienceEndDate"
          {...register("endDate")}
          type="text"
          placeholder="End Date"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <input
          id="description"
          {...register("description")}
          type="text"
          placeholder="Description"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
}


export function ExperienceSubmission({ data }) {
    return (
      <div className="p-4 border rounded-md bg-white">
        <h2 className="text-xl font-semibold">Experience</h2>
        <p>
          <strong>Company Name:</strong> {data.companyName}
        </p>
        <p>
          <strong>Job Title:</strong> {data.jobTitle}
        </p>
        <p>
          <strong>Start Date:</strong> {data.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {data.endDate}
        </p>
        <p>
            <strong>Description:</strong> {data.description}
        </p>
      </div>
    );
  }
  

