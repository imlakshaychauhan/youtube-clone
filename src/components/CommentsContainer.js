import React from "react";

const commentsData = [
  {
    name: "Lakshay Chauhan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
    replies: [],
  },
  {
    name: "Lakshay Chauhan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
    replies: [
      {
        name: "Lakshay Chauhan",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
        replies: [],
      },
      {
        name: "Lakshay Chauhan",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
        replies: [],
      },
      {
        name: "Lakshay Chauhan",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
        replies: [
          {
            name: "Lakshay Chauhan",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
            replies: [],
          },
        ],
      },
      {
        name: "Lakshay Chauhan",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
        replies: [
          {
            name: "Lakshay Chauhan",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
            replies: [
              {
                name: "Lakshay Chauhan",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Lakshay Chauhan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
    replies: [
      {
        name: "Lakshay Chauhan",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
        replies: [],
      },
    ],
  },
  {
    name: "Lakshay Chauhan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
    replies: [
      {
        name: "Lakshay Chauhan",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
        replies: [],
      },
    ],
  },
  {
    name: "Lakshay Chauhan",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod molestie orci, vel venenatis arcu posuere eu. Phasellus tincidunt dapibus viverra. Curabitur ut egestas leo.",
    replies: [],
  },
];

const Comment = ({ comment }) => {
  return (
    <div className="flex shadow-lg my-4 p-3 rounded-lg hover:bg-gray-100">
      <img
        className="w-7 h-7"
        alt="Logo"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <div className="ml-2">
        <h1 className="font-bold text-xl">{comment.name}</h1>
        <h1 className="text-lg">{comment.comment}</h1>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <>
      <Comment comment={comment} />
      <div className="ml-5 border-l-gray-400 border-l-2">
        <CommentsList comments={comment.replies} />
      </div>
    </>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
