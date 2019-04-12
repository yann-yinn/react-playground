import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import apolloClient from "../lib/apolloClient";
import BookList from "../components/BookList";
import gql from "graphql-tag";

function useQuery({ query, variables, options = {} }) {
  const [results, updateResults] = useState({
    loading: false,
    data: null,
    error: null
  });
  useEffect(() => {
    updateResults({ loading: true });
    apolloClient
      .query({
        ...options,
        query,
        variables
      })
      .then(result => {
        updateResults({ loading: false });
        updateResults(result);
      })
      .catch(error => {
        updateResults({ error: error.message });
      });
  }, [variables.title]);
  return results;
}

export default function() {
  const [variables, updateVariables] = useState({});
  const result = useQuery({
    query: gql`
      query($title: String) {
        books(title: $title) {
          title
          author
        }
      }
    `,
    variables
  });

  return (
    <MainLayout>
      <h1>Books list</h1>
      <input
        type="text"
        onChange={e => updateVariables({ title: e.target.value })}
      />
      {result.error && <div>{result.error}</div>}
      {result.loading && <div>Loading...</div>}
      {result.data && <BookList books={result.data.books} />}
    </MainLayout>
  );
}
