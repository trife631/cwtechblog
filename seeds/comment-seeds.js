const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'blah blah blah.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'blah blah blah',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'blah blah blah.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 't.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: '.',
    user_id: 8,
    post_id: 2
  },
   
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
