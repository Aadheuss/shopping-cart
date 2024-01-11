import styles from "./Loading.module.css";
import { useEffect, useState } from "react";

const Loading = () => {
  const [text, setText] = useState("Loading");

  useEffect(() => {
    setInterval(() => {
      setTimeout(() => setText("loading."), 50);
      setTimeout(() => setText("loading.."), 100);
      setTimeout(() => setText("loading..."), 200);
      setTimeout(() => setText("loading"), 400);
    }, 400);
  }, []);

  return <h2 className={styles.loading}>{text}</h2>;
};

export default Loading;
