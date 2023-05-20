const { Post } = require('../models');

const postdata = [
  {
    title: 'yo.',
    post_text: 'adlkfadf kal;djfal;dkfj at.',
    user_id: 10
  },
  {
    title: 'ya.',
    post_text: 'adfi adfkj;alkj akdljfa;ld.',
    user_id: 8
  },
  {
    title: 'ah.',
    post_text: 'adk akljflkajdf kljjfald .',
    user_id: 1
  },
  {
    title: 'yuh.',
    post_text: 'lkadfjads ;lkjjlkad.',
    user_id: 4
  },
  {
    title: 'aaayy.',
    post_text: 'adjf kla;df k;lajd.',
    user_id: 7
  },
  {
    title: 'yerere.',
    post_text: 'lakdfjaldkjfa.',
    user_id: 4
  },
  {
    title: 'psshh.',
    post_text: ' lolololollllllllolololol.',
    user_id: 1
  },
  
  {
    title: 'aldkf  akfaldkfa d kljdlfkjasjd  k;adljfasldkjf .',
    post_text: 'alkdjfadlkfj akjlkjadflkj.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
