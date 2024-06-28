const postmark=require("postmark");

const serveToken=process.env.POSTMARK_API_KEY;
const client=new postmark.ServerClient(serveToken);

export {client}