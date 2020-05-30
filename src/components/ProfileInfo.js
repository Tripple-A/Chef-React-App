import React from "react";
import { Spinner } from "../helpers/svgs";
import { uuid } from "uuidv4";

export const ProfileInfo = ({
  vendorName,
  specialty,
  location,
  pitch,
  images,
  isLoaded
}) => {
  let displayImages = [];

  const isImageLoaded = () => {
    if (isLoaded && images.length > 0) {
      displayImages = images.map(p => (
        <div key={uuid()} className="px-4">
          <a href={p.url} className="hover:no-underline">
            {" "}
            <img
              src={p.url}
              alt="vendor"
              className="h-32 object-cover object-center w-64"
            />
            <div className="bg-dark-skin px-4 py-2 ">
              <span className="text-center font-semibold text-white">
                {p.title}
              </span>
            </div>
          </a>
        </div>
      ));
    }
  };

  isImageLoaded();

  return (
    <div>
      <div className="bg-gray-200 px-4 py-4 rounded-md mt-4 shadow-lg">
        <div className="md:grid md:grid-cols-2 ">
          <div>
            <p>
              <span className="font-semibold">name: &nbsp;</span>
              <span>{vendorName}</span>
            </p>
          </div>
          <div>
            <p>
              <span>
                <span className="font-semibold">specialty: </span>
                {specialty}
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="">
                <span className="font-semibold">location: </span>
                {location}
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="">
                <span className="font-semibold">pitch: </span>
                {pitch}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl md:text-4xl text-center mt-4 mb-2 bg-dark-skin px-4 py-4 rounded-lg text-white">
          {isLoaded ? `${vendorName} images` : ""}
        </h2>
        <div>
          {!isLoaded ? (
            <div className="text-center m-auto py-4">
              <Spinner strokeColor="red" />
            </div>
          ) : (
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 row-gap-12 mt-2 bg-white py-4 shadow-lg ${
                displayImages.length < 1 ? "hidden" : "block"
              }`}
            >
              {displayImages}
            </div>
          )}
          <div>
            {images.length < 1 && isLoaded ? (
              <div
                className="text-center px-10 font-semibold bg-gray-200 py-4 shadow-md
        "
              >
                This vendor does not have any uploaded images.
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
