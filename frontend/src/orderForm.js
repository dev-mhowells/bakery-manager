import './styles.css';
import React from 'react';
import { useState } from 'react';

function OrderForm() {

  return (
  <div class="h-screen flex items-center justify-center">
    <div className="bg-grey-lighter h-screen font-sans pt-20">
        <div className="container mx-auto mt-20 flex justify-center items-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
              <div class="form-group mb-6">
                <input type="text" class="form-control block
                  w-96
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                  placeholder="Company Name"></input>
              </div>
              <div class="form-group mb-6">
                <input type="text" class="form-control block
                  w-96
                  h-40
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="Order Summary"></input>
              </div>
              <div class="form-group mb-6">
                <input type="date" class="form-control block
                  w-96
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="Date needed by"></input>
              </div>
              <div>
              <button type="submit" class="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Send</button>
              </div>
            </form>
          </div>
        </div>
    </div>
    </div>
  );
}

export default OrderForm;