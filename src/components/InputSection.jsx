import { useState } from "react";
import tax from "../assets/tax.jpg";

export default function InputSection() {
  const style = {
    backgroundImage: `url(${tax})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  const [hra, setHra] = useState("");
  const [specialAllowance, setSpecialAllowance] = useState("");
  const [travelAllowance, setTravelAllowance] = useState("");
  const newTaxSlab = 700000;
  const oldTaxSlab = 500000;
  const newTaxSlabRate = 0.1;
  const oldTaxSlabRate = 0.2;
  const cess = 0.04;

  const calculateTaxNew = () => {
    const totalSalary =
      parseInt(basicSalary) * 12 +
      parseInt(hra) * 12 +
      parseInt(specialAllowance) * 12 +
      parseInt(travelAllowance);
    const taxableIncome = totalSalary - 250000;
    let tax = 0;
    if (taxableIncome <= newTaxSlab) {
      tax = taxableIncome * newTaxSlabRate;
    } else {
      tax =
        newTaxSlab * newTaxSlabRate +
        (taxableIncome - newTaxSlab) * oldTaxSlabRate;
    }
    tax = tax + tax * cess;
    return tax;
  };

  const calculateTaxOld = () => {
    const totalSalary =
      parseInt(basicSalary) * 12 +
      parseInt(hra) * 12 +
      parseInt(specialAllowance) * 12 +
      parseInt(travelAllowance);
    const taxableIncome = totalSalary - 250000;
    let tax = 0;
    if (taxableIncome <= oldTaxSlab) {
      tax = taxableIncome * oldTaxSlabRate;
    } else {
      tax =
        oldTaxSlab * oldTaxSlabRate +
        (taxableIncome - oldTaxSlab) * newTaxSlabRate;
    }
    tax = tax + tax * cess;
    return tax;
  };

  const compareTax = () => {
    const newTax = calculateTaxNew();
    const oldTax = calculateTaxOld();
    if (newTax < oldTax) {
      console.log("New Tax Regime is better");
    } else {
      console.log("Old Tax Regime is better");
    }
  };

  return (
    <div className="">
      <div className="font-mono bg-white min-h-full flex justify-center align-middle rounded-2xl">
        <div className="container mx-auto">
          <h3 className="mt-4 pt-4 text-2xl text-center">
            Confused of which scheme to choose?
          </h3>

          <h5 className="mt-4 text-xl text-center">
            Think no more, got you covered!
          </h5>
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto  hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={style}
              ></div>
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="text-2xl text-center">Fill in the details!</h3>

                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="role"
                      >
                        Role
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="role"
                        type="text"
                        placeholder="Role"
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="basicSalary"
                      >
                        Basic Salary
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="basicSalary"
                        type="text"
                        placeholder="Basic Salary"
                        onChange={(e) => setBasicSalary(e.target.value)}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="houseRentAllowance"
                      >
                        House Rent Allowance
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="houseRentAllowance"
                        type="text"
                        placeholder="House Rent Allowance"
                        onChange={(e) => setHra(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="specialAllowance"
                      >
                        Special Allowance
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="specialAllowance"
                        type="text"
                        placeholder="Special Allowance"
                        onChange={(e) => setSpecialAllowance(e.target.value)}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="travelAllowance"
                      >
                        Travel Allowance
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="travelAllowance"
                        type="text"
                        placeholder="Travel Allowance"
                        onChange={(e) => setTravelAllowance(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={compareTax}
                    >
                      Calculate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
