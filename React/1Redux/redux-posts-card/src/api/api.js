import mockedData from "../mockedData";

const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockedData);
    }, 400);
  });
};

const changeLikeStatus = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (post.isLiked) {
        resolve({
          ...post,
          isLiked: false,
          likes: post.likes - 1,
        });
      } else {
        resolve({
          ...post,
          isLiked: true,
          likes: post.likes + 1,
        });
      }
    }, 100);
  });
};

export default {
  getAllPosts,
  changeLikeStatus,
};
