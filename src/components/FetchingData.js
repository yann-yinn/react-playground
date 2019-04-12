import React from "react";
import client from "../lib/apolloClient";
import gql from "graphql-tag";
import { useEffect, useState } from "react";

function BookListExampleOne() {
  //const [films, filmsUpdate] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await client.query({
        query: gql`
          {
            books {
              title
              author
            }
          }
        `
      });
      console.log("result", result);
    }
    fetchData();
  });

  return <div>Hello Books</div>;
}

export default BookListExampleOne;
