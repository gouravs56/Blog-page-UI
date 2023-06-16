import React, { useState } from "react";

const NewsFeed = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // news feed content
  const newsFeedItems = [
    {
      id: 1,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.fh5zaN_SXLaUOq8wW-z5wgHaEL&pid=Api&P=0&h=180",
      title: "Sports News",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["sports"],
    },
    {
      id: 2,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Bu0aqMK8i6MMYcWNkODiewHaEK&pid=Api&P=0&h=180",
      title: "Movies News",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["movies"],
    },
    {
      id: 3,
      image:
        "https://images.english.elpais.com/resizer/1PlcrjCwKhgX4GyAZqYS5Lmj1CU=/828x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/N4OSTZE6IY7WOSRUQBYECPKP7M.jpg",
      title: "Politics News",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["politics"],
    },
    {
      id: 4,
      image:
        " https://tse2.mm.bing.net/th?id=OIP.Bu0aqMK8i6MMYcWNkODiewHaEK&pid=Api&P=0&h=180",
      title: "Movies News",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["movies"],
    },
    {
      id: 5,
      image:
        "https://images.english.elpais.com/resizer/1PlcrjCwKhgX4GyAZqYS5Lmj1CU=/828x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/N4OSTZE6IY7WOSRUQBYECPKP7M.jpg",
      title: "Politics News",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["politics"],
    },
    {
      id: 6,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.Ta43uKbz87dMHymF-yUC4gHaE8&pid=Api&P=0&h=180",
      title: "Sports News",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["sports"],
    },
    {
      id: 7,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.fh5zaN_SXLaUOq8wW-z5wgHaEL&pid=Api&P=0&h=180",
      title: "Sports News",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["sports"],
    },
    {
      id: 8,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.eSDGQSE37DbuIwpwmwpa8QHaEI&pid=Api&P=0&h=180https://tse2.mm.bing.net/th?id=OIP.eSDGQSE37DbuIwpwmwpa8QHaEI&pid=Api&P=0&h=180",
      title: "Movies News",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tags: ["movies"],
    },
  ];

  // news feed filter
  const filteredItems =
    activeFilter === "all"
      ? newsFeedItems
      : newsFeedItems.filter((item) => item.tags.includes(activeFilter));

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 mt-4" id="News Feed">
        News Feed
      </h2>
      <div className="flex items-center mb-4">
        <span className="mr-2">Filter:</span>

        <label
          className="inline-flex items-center cursor-pointer mr-4"
          htmlFor="all"
        >
          <input
            type="checkbox"
            id="all"
            checked={activeFilter === "all"}
            onChange={() => handleFilterChange("all")}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-sm text-gray-700">All</span>
        </label>

        <label
          className="inline-flex items-center mr-4 cursor-pointer"
          htmlFor="sports"
        >
          <input
            type="checkbox"
            id="sports"
            checked={activeFilter === "sports"}
            onChange={() => handleFilterChange("sports")}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-sm text-gray-700">Sports</span>
        </label>
        <label
          className="inline-flex items-center mr-4 cursor-pointer"
          htmlFor="movies"
        >
          <input
            type="checkbox"
            id="movies"
            checked={activeFilter === "movies"}
            onChange={() => handleFilterChange("movies")}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-sm text-gray-700">Movies</span>
        </label>
        <label
          className="inline-flex items-center mr-4 cursor-pointer"
          htmlFor="politics"
        >
          <input
            type="checkbox"
            id="politics"
            checked={activeFilter === "politics"}
            onChange={() => handleFilterChange("politics")}
            className="form-checkbox h-5 w-5 text-gray-600"
          />
          <span className="ml-2 text-sm text-gray-700">Politics</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-slate-200 p-4 rounded shadow-lg hover:bg-slate-300"
          >
            <img src={item.image} alt="News" className="mb-3 rounded" />
            <a href="#" className="hover:underline">
              {item.title}
            </a>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
