export const allComments = ({ comments }) => Object.keys(comments).map(id => comments[id]);
export const allPost = ({ allPosts }) => Object.keys(allPosts).map(id => allPosts[id]);

export const allLikes = ({ likes }) => Object.keys(likes).map(id => likes[id]);
