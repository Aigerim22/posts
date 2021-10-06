import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import style from '../../App.module.css';
import style2 from './Home.module.css';
import Footer from "./Footer";

function Home() {
  const [images, setImages] = useState<any[]>([]);
  const loader = useRef<HTMLDivElement>(null);

  const fetchImages = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      .then((response) => setImages([...images, ...response.data]));
  };



  useEffect(() => {
      fetchImages();
  }, []);
  

  return (
    <><div className={style2.startpage}>
      <img className={style2.container} src="https://smashballoon.com/wp-content/uploads/2020/08/Types-of-Facebook-Posts-Proven-to-Easily-Boost-Page-Engagement.jpg" />
    </div>
      <div className={style2._box}>
        <h1>Posts</h1>
          <div className={style.grid}>
            {images.map((image) => {
              const { id } = image;
              return (
                <div key={id} className={style.items}>
                 <p>
                   {image.id}
                 </p>
                 <p>
                   <h3>{image.title}</h3>
                   {image.body}

                 </p>
                </div>
              );
            })}
          </div>
          
          <div ref={loader}>Loading...</div>
        </div>
        
        <Footer />
      </>
  );
}
export default Home;
