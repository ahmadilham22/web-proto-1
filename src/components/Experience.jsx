import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experiences</h2>
      <div>
        {EXPERIENCES.map((experinece, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experinece.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experinece.role} - {''}
                <span className="text-sm text-stone-500">
                  {experinece.company}
                </span>
                <p className="mb-4 text-stone-400">{experinece.description}</p>
                {experinece.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  >
                    {technology}
                  </span>
                ))}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;