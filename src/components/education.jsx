import React from "react";
import { useForm } from "react-hook-form";

export default function EducationForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 space-y-4 bg-gray-50 border rounded-md"
    >
      <div>
        <label htmlFor="school" className="block text-sm font-medium">
          School
        </label>
        <input
          id="school"
          {...register("school")}
          type="text"
          placeholder="School"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium">
          Location
        </label>
        <input
          id="location"
          {...register("location")}
          type="text"
          placeholder="location"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="degree" className="block text-sm font-medium">
          Degree
        </label>
        <input
          id="degree"
          {...register("degree")}
          type="text"
          placeholder="Degree"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium">
        Start Date
        </label>
        <input
          id="educationStartDate"
          {...register("startDate")}
          type="text"
          placeholder="Start Date"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="endDate" className="bock text-sm font-medium">
            End Date
        </label>
        <input
        id="educationEndDate"
        {...register("endDate")}
        type="text"
        placeholder="End Date"
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


export function EducationSubmission({ data }) {
    return (
      <div className="p-4 border rounded-md bg-white">
        <h2 className="text-xl font-semibold">Education</h2>
        <p>
          <strong>School:</strong> {data.school}
        </p>
        <p>
          <strong>Location:</strong> {data.location}
        </p>
        <p>
          <strong>Degree:</strong> {data.degree}
        </p>
        <p>
          <strong>Start Date:</strong> {data.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {data.endDate}
        </p>
      </div>
    );
  }
  

