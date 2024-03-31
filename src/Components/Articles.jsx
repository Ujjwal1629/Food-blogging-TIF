import React, { useState } from "react";
import meal1 from "./Images/meal3.png";
import meal2 from "./Images/meal2.png";
import meal3 from "./Images/meal1.png";
import meal4 from "./Images/meal6.png";
import meal5 from "./Images/meal5.png";
import meal6 from "./Images/meal4.png";

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const articles = [
    {
      image: meal1,
      title: "Grilled Tomatoes at Home",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: meal2,
      title: "Another Meal",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: meal3,
      title: "Yet Another Meal",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: meal4,
      title: "Meal Four",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: meal5,
      title: "Meal Five",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: meal6,
      title: "Meal Six",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];

  const totalPages = Math.ceil(articles.length / 3);

  const startIdx = currentPage * 3;
  const visibleArticles = articles.slice(startIdx, startIdx + 3);

  return (
    <section className="article">
      <div className="article-container w-full h-full flex px-[100px] flex-col">
        <h1 className="text-[56px] text-[#0E2368]">Latest Articles</h1>
        <div className="article-cards w-full h-full flex mt-[90px] overflow-hidden">
          {visibleArticles.map((article, index) => (
            <div
              key={index}
              className="card-1 w-[380px] h-[524px] border rounded-[10px] p-5 mr-8"
            >
              <img
                className="w-[326px] h-[257px] rounded-[20px]"
                src={article.image}
                alt={`Meal ${index + 1}`}
              />
              <div className="card-description w-[295px] h-[195px] gap-[15px] mt-[30px] ml-[20px]">
                <h1 className="w-[285px] h-[27px] font-bold leading-[27px] text-[21px] text-[#0E2368] ">
                  {article.title}
                </h1>
                <p className="w-[295px] text-[15px] text-[#444957] mt-3">
                  {article.description}
                </p>
                <button className="w-[150px] h-[43px] border rounded-[40px] mt-[20px]">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-1/5 m-auto justify-evenly mt-8 items-center">
          <button
            onClick={handleClickPrev}
            disabled={currentPage === 0}
            className={`btn-prev w-8 h-8 text-[20px] font-medium border-2 border-solid rounded-lg ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            &lt;
          </button>
          <span className=" text-[#424961]">
            {currentPage + 1}/{totalPages}
          </span>
          <button
            onClick={handleClickNext}
            disabled={currentPage === totalPages - 1}
            className={`btn-next w-8 h-8 text-[20px] font-medium border-2 border-solid rounded-lg ${
              currentPage === totalPages - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
