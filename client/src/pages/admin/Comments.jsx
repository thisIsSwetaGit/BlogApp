import React, { use, useState, useEffect } from "react";
import CommentTableItem from "../../components/admin/CommentTableItem";
import {comments_data }from "../../assets/assets"; 

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(comments_data);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pl-16 bg-blue-50 mg-t-5 text-black-800">
      <div className="flex justify-between items-center max-w-3xl">
        <h1>Comments</h1>
        <div className="flex gap-4">
          <button
            className={`shadow-custom-sm border rounded-full px-4 py-1
            cursor-pointer text-xs ${
              filter === "Approved" ? "text-blue-500" : "text-black"
            }`}
            onClick={() => setFilter("Approved")}
          >
            Approved
          </button>
          <button
            className={`shadow-custom-sm border rounded-full px-4 py-1
            cursor-pointer text-xs ${
              filter === "Not Approved" ? "text-blue-500" : "text-gray"
            }`}
            onClick={() => setFilter("Not Approved")}
          >
            Not Approved
          </button>
        </div>
      </div>
      <div className="relative h-4/5 max-w-3xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white"> 
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3" scope="col">Blog Title & Comments</th>
              <th className="px-6 py-3 max-sm:hidden" scope="col">Date</th>
              <th className="px-6 py-3" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {comments
  .filter((comment) => {
    if (filter === "Approved") return comment.isApproved === true;
    return comment.isApproved === false;
   
  })
  .map((comment, index) => 
    <CommentTableItem
      key={comment._id}
      comment={comment}
      index={index + 1}
      fetchComments={fetchComments}
    />
  )}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
