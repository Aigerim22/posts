import React, { ReactElement } from "react";
import styles from "../../App.module.css";

interface Props {}

export default function Footer({}: Props): ReactElement {
    const imageStyle = {
        width: "30px",
        height: "30px",
        marginBottom:'10px',
        // transform: "rotate(270deg)",
      } as React.CSSProperties;

      const image2Style = {
        width: "55px",
        height: "45px",
        // transform: "rotate(270deg)",
      } as React.CSSProperties;
  return (
    <div className={styles.footer}>
      <footer>
        <p>
        All rights reserved.  © 2007 - 2020  No. 1 visited watch website. 
        </p>
         <p>
         {/* <h6>Contact Us</h6> */}
          {/* <img style={imageStyle} src="https://www.flaticon.com/svg/static/icons/svg/733/733641.svg"/>{"  "}
          <img style={imageStyle}  src="https://www.flaticon.com/svg/static/icons/svg/1384/1384015.svg"/>{"  "} */}
        </p> 
      </footer>
    </div>
  );
}
