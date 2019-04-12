import React from "react";
import MainLayout from "../layouts/MainLayout";
import BookList from "../components/FetchingData";

export default function() {
  return (
    <MainLayout>
      <h1>Books list</h1>
      <BookList />
    </MainLayout>
  );
}
