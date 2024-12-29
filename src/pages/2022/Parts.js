import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "../../assets/styles/images.css";

function Parts(props) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/tttptiii/parts/main/README.md")
      .then((res) => res.text())
      .then((res) => setContent(res))
      .catch((err) => console.log(err));
  });

  return (
    <div className="Md">
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
      <p>
        <br />
        <hr />
        <br />
        content copied from{" "}
        <a href="https://github.com/tttptiii/parts" target="_blank">
          "parts, README.md"
        </a>
      </p>
    </div>
  );
}

export default Parts;
