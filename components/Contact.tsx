import React from "react";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="" //="https://getform.io/f/8b086558-47d4-49d0-852d-ec8c22da40f7"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
          data-np-autofill-type="identity"
          data-np-checked="1"
          data-np-watching="1"
        >
          <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white ">
            Contact
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            data-np-autofill-type="name_first"
            data-np-uid="a9d74add-3f18-4e3c-a1eb-7f2edbb4812f"
            autoComplete="off"
            data-np-checked="1"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            data-np-autofill-type="identity_email"
            data-np-uid="c8f682fb-273e-40ec-9130-954b9927a1b4"
            autoComplete="off"
            data-np-checked="1"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
          {/* <span data-np-uid="a9d74add-3f18-4e3c-a1eb-7f2edbb4812f" style="width: 24px; min-width: 24px; height: 24px; background-image: url(&quot;chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/assets/manifestIcons/icon.svg&quot;); background-repeat: no-repeat; background-position: left center; background-size: auto; border: none; display: inline-block; visibility: visible; position: absolute; cursor: pointer; z-index: 998; padding: 0px; transition: none 0s ease 0s; pointer-events: all; right: 0px; left: 678.5px; top: 2144px; min-height: 24px;"></span> */}
          {/* <span data-np-uid="c8f682fb-273e-40ec-9130-954b9927a1b4" style="width: 24px; min-width: 24px; height: 24px; background-image: url(&quot;chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/assets/manifestIcons/icon.svg&quot;); background-repeat: no-repeat; background-position: left center; background-size: auto; border: none; display: inline-block; visibility: visible; position: absolute; cursor: pointer; z-index: 998; padding: 0px; transition: none 0s ease 0s; pointer-events: all; right: 0px; left: 678.5px; top: 2204px; min-height: 24px;"></span> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;
