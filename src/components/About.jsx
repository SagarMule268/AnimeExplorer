import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <>
    <div className="container mx-auto px-6 py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">About Anime Explorer</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Anime Explorer is your gateway to discovering new anime. Whether you’re looking for ratings, episode counts, trailers, or summaries, our platform gives you everything in one place.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className=" list-inside text-gray-600 dark:text-gray-300">
          <li>🔍 Search anime easily</li>
          <li>🎬 Watch trailers before starting an anime</li>
          <li>⭐ View ratings, episodes, and status</li>
          <li>📖 Read anime summaries</li>
        </ul>
      </div>

      <div className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
          Built with ❤️ using React, Tailwind, and Jikan API by{" "}
          <span className="font-semibold">Sagar Mule</span>.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
