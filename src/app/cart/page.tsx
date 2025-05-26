"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptNumber: "",
    state: "",
    zip: ""
  });

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const summaryRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power3.out",
      clearProps: "all"
    });
  
    gsap.from(formRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      clearProps: "all"
    });
  
    gsap.from(summaryRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      delay: 0.4,
      ease: "back.out(1.7)",
      clearProps: "all"
    });
  }, []);
  

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
    <div className="min-h-screen bg-gray-50 p-6 pt-24 flex justify-center items-start">
      <div className="w-full max-w-7xl space-y-10">
        {/* Back Button & Header */}
        <div className="mb-4">
          <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-transform duration-200 hover:scale-110">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
          <h1 className="text-4xl font-semibold text-black tracking-tight" ref={headerRef}>
            Shipping Address
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Address Form */}
          <div
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-300"
            ref={formRef}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              </div>
              <h2 className="text-xl font-medium text-black">Add New Address</h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Apt Number</label>
                  <input
                    type="text"
                    name="aptNumber"
                    value={formData.aptNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 border border-gray-300 text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveAddress}
                  className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Save This Address
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 rounded-2xl p-8 shadow-md" ref={summaryRef}>
            <p className="text-sm text-gray-600 mb-6">
              By placing your order, you agree to our{" "}
              <span className="text-black font-medium">Privacy policy</span> and{" "}
              <span className="text-black font-medium">Conditions of use</span>.
            </p>

            <h3 className="text-xl font-medium text-black mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Items - Silhouette No. 1 — Vermilion</span>
                <span className="text-black">₹7,999</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shipping and handling:</span>
                <span className="text-black">₹200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Before tax:</span>
                <span className="text-black">₹6,599</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax Collected:</span>
                <span className="text-black">₹1,400</span>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-medium text-black">Order Total:</span>
                <span className="text-xl font-medium text-black">₹8,199</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
