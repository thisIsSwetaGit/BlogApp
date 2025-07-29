// import React from 'react'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  const fetchComments = async () => {
    setComments(comments_data);
  };
  const addComment = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-50"
      />
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 sm:px-10">
        <p className="text-sm text-indigo-600 font-medium">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-4">
          {data.title}
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-600 mt-2">
          {data.subtitle}
        </h2>

        {/* Author Pill */}
        <button className="mt-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm hover:bg-indigo-200 transition">
          {data.author || "Chris Brown"}
        </button>
      </div>
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt="" className="rounded-3xl mb-5" />
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        {/* comments section */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded  text-gray-600"
              >
                <div>
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="text-sm max-w md ml-8">{item.content}</p>
                <div className="absolute right-4 bottom-4 text-xs flex items-center gap-2">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* comment box */}
          <div className="max-w-3xl mx-auto">
            <p className="font-semibold mb-4">Add your Comment:</p>
            <form
              onSubmit={addComment}
              className="flex flex-col items-start gap-4 max-w-lg"
            >
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                required
                className="w-full p-2 border border-gray-300 rounded outline-none"
              />
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Comment"
                className="w-full p-2 border border-gray-300 rounded outline-none h-48"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            {/* share buttons */}
            <div className="max-w-3xl mx-auto my-24">
              <p className="font-semibold mb-4">Share this blog:</p>
              <div className="flex gap-4">
                <img src={assets.facebook_icon} alt="Share on Facebook" />
                <img src={assets.twitter_icon} alt="Share on Twitter" />
                <img src={assets.googleplus_icon} alt="Share on Google Plus" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  ) :  <Loader />
  };

export default Blog;
