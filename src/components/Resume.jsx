import React from "react";

const Resume = ({ quantity, brand }) => {
  return (
    <div className=" mt-10 rounded-md cursor-default z-10">
      <div className="py-10 transition duration-300 bg-indigo-400 rounded-2xl shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-[.98]">
        <div className="p-6 w-80">
          <span className="text-lg text-zinc-50 font-bold col-start-1 col-end-3">
            {brand}
          </span>
          <br />
          <span className="text-lg text-zinc-50 font-bold col-start-1 col-end-3">
            {quantity - 3} Productos encontrados
          </span>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Resume;
