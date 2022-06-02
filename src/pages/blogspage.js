import React, { useState, useEffect } from "react";

function BlogsPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflowY = "scroll";
    }, 4000);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Hello Blog</h1>
    </div>
  );
}

export default BlogsPage;
