"use client"
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptNumber: "",
    state: "",
    zip: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveAddress = () => {
    console.log("Saving address:", formData);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      streetAddress: "",
      aptNumber: "",
      state: "",
      zip: ""
    });
  };

  const handlePlaceOrder = () => {
    console.log("Placing order");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-between items-center pt-24">
      <div className="w-full ">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-4xl font-normal text-black">Shipping Address</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              </div>
              <h2 className="text-xl font-normal text-black">Add New Address</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-normal text-black mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    aria-label="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-black mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    aria-label="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-normal text-black mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  aria-label="Street Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-normal text-black mb-2">
                    Apt Number
                  </label>
                  <input
                    type="text"
                    name="aptNumber"
                    value={formData.aptNumber}
                    onChange={handleInputChange}
                    aria-label="Apartment Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-black mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    aria-label="State"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal text-black mb-2">
                    Zip
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    aria-label="Zip Code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition-colors font-normal"
                >
                  cancel
                </button>
                <button
                  onClick={handleSaveAddress}
                  className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-normal"
                >
                  Save This Address
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                By placing your order, you agree to our company{" "}
                <span className="text-black font-medium">Privacy policy</span> and{" "}
                <span className="text-black font-medium">Conditions of use</span>.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-normal text-black mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Items - Silhouette No. 1 — Vermilion</span>
                  <span className="text-black">7,999</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping and handling:</span>
                  <span className="text-black">200</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Before tax:</span>
                  <span className="text-black">6,599</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tax Collected:</span>
                  <span className="text-black">1,400</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-normal text-black">Order Total:</span>
                  <span className="text-xl font-normal text-black">8,199</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-normal text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;