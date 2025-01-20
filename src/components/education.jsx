import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

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
          placeholder="Location"
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
        <label htmlFor="endDate" className="bock text-sm font-medium">
            Graduation Date
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
      <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}


export function EducationSubmission({ data }) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <hr className="mb-2" />
        <p className="float-right">
          Graduated {data.endDate}
        </p>
        <p>
          {data.school}, {data.location}
        </p>
        <p>
          {data.degree}
        </p>
      </div>
    );
  }
  

