// this file has to be named 'loading.jsx' to be picked up by the router
import React from "react";

export default function Loading() {
  return (
    <main className="text-center">
      <h2 className="text-primary">Loading...</h2>
      <p>Please wait while we fetch the data</p>
    </main>
  );
}
