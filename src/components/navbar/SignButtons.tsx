import React from "react";

const SignButtons = () => {
  return (
    <div className="flex items-center gap-4 justify-between mt-3 px-1">
      <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
        Sign in
      </button>
      <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700">
        Sign up
      </button>
    </div>
  );
};

export default SignButtons;
