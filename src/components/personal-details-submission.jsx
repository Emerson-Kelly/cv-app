import React from "react";
import { useForm } from "react-hook-form";

export default function PersonalDetailsForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 space-y-4 bg-gray-50 border rounded-md"
    >
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium">
          First Name
        </label>
        <input
          id="firstName"
          {...register("firstName")}
          type="text"
          placeholder="First Name"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          id="lastName"
          {...register("lastName")}
          type="text"
          placeholder="Last Name"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium">
          Address
        </label>
        <input
          id="address"
          {...register("address")}
          type="text"
          placeholder="Address"
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          {...register("email")}
          type="email"
          placeholder="Email"
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


export function PersonalDetailsSubmission({ data }) {
    return (
      <div className="p-4 border rounded-md bg-white">
        <h2 className="text-xl font-semibold">Submitted Data</h2>
        <p>
          <strong>First Name:</strong> {data.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {data.lastName}
        </p>
        <p>
          <strong>Address:</strong> {data.address}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
      </div>
    );
  }
  

