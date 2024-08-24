import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          eos rerum ducimus voluptas maxime exercitationem.
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full py-2 pl-3 block border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full py-2 pl-3 block border focus:outline-none  bg-blue rounded text-white cursor-pointer font-semibold"
          />
        </div>

        <div className="w-full space-y-4"></div>
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          eos rerum ducimus voluptas maxime exercitationem.
        </p>

        <input
          type="submit"
          value={"Upload your resume "}
          className="w-full py-2 pl-3 block border focus:outline-none  bg-blue-500 rounded text-white cursor-pointer font-semibold"
        />
      </div>

      <div className="w-full space-y-4"></div>
    </div>
  );
};

export default Newsletter;
