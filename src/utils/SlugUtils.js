import DOMPurify from "dompurify";
import axios from "axios";
import ApiData from "./ApiData";

export const getPathNameFromUrl = (url = "") => {
  if (!url) {
    return "";
  }
  const theURL = new URL(url);
  return theURL.pathname;
};

export const sanitize = (content) => {
  return "undefined" !== typeof window ? DOMPurify.sanitize(content) : content;
};

export const getPageByTitle = async (titleName = "") => {
  return await axios
    .post(ApiData.graphqlUrl, {
      query: `{	
			pages(where: {title: "${titleName}"}) {
    edges {
      node {
        headerImage {
          headerImage{
            node {
              mediaItemUrl
            }
          }
        }	
        content
      }
    }
  }
		}`,
    })

    .then((res) => {
      if (200 === res.status) {
        console.log(res.data.data.pages.edges[0].node);
        return res.data.data.pages.edges[0].node;
      } else {
        return [];
      }
    })
    .catch((err) => {
      console.log(err.response.data.message);
      return [];
    });
};
