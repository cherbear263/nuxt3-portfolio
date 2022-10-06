import posts from '../../data/posts.json'
import { IncomingMessage, ServerResponse } from 'h3'

export default function(req:IncomingMessage, res:ServerResponse){
  const {pathname}  = new URL(req.url, 'http://${req.headers.host}')
  console.log( pathname )
  const id= pathname.split('/')[1]; // http://localhost:3000/postsPage/1
  // that doesn't work. Just return the posts.
  {
    return posts
  } 

}



/*  THIS WORKED

import posts from '../../data/posts.json'
import { IncomingMessage, ServerResponse } from 'h3'

export default function(req:IncomingMessage, res:ServerResponse){
  return{
    posts
  }
} */