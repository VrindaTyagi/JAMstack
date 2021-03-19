const { GET_LINKS } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  console.log("Reaching getLinks");
  if (event.httpMethod !== "GET") {
    return formattedResponse(405, { err: "Method not supported" });
  }
  try {
    const res = await sendQuery(GET_LINKS, {}); 
    console.log("RESPONSE/GETLINKS.JS", res);
    const data = res.data.allLinks.data; 
    return formattedResponse(200, data);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
