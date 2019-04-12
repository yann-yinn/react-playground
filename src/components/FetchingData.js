import React from "react";
import client from "../lib/apolloClient";
import gql from "graphql-tag";
import { useEffect, useState } from "react";

function useQuery() {
  const [results, updateResults] = useState([]);
  const [loadingState, updateLoadingState] = useState("NOT_STARTED");
  useEffect(() => {
    updateLoadingState("PENDING");
    client
      .query({
        query: gql`
          {
            books {
              title
              author
            }
          }
        `
      })
      .then(result => {
        console.log("r1", result);
        updateLoadingState("FINISHED_OK");
        updateResults(result);
      })
      .catch(error => {
        updateLoadingState("FINISHED_ERROR");
      });
  }, []);
  return { results, loadingState };
}

function BookListExampleOne() {
  const { results, loadingState } = useQuery();
  return (
    <div>
      {loadingState}
      <p>Hello world !</p>
      {loadingState === "FINISHED_ERROR" && <div> raté enculé </div>}
      {loadingState === "PENDING" && <div>loading</div>}
      {loadingState === "FINISHED_OK" && JSON.stringify(results, 0, 2)}}
    </div>
  );
}

function BookList({ books }) {
  return (
    <div>
      {books.map(book => {
        return (
          <div key={book.title}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BookListExampleOne;
