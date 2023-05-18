import clsx from "clsx";
import type { HTMLAttributes } from "react";

import QRImage from "../assets/images/image-qr-code.png";
import styles from "./qr-code.module.scss";

export type QrCodeProps = HTMLAttributes<HTMLDivElement>;
export default function QrCode({ className }: QrCodeProps) {
  return (
    <div className={clsx(styles.root, className)}>
      <img
        alt=""
        src={QRImage}
      />
      <div>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skils
          to the next level
        </p>
      </div>
    </div>
  );
}
