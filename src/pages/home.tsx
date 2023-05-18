import clsx from "clsx";
import type { HTMLAttributes } from "react";

import QrCode from "../components/qr-code";
import styles from "./home.module.scss";

export type HomeProps = HTMLAttributes<HTMLElement>;
export default function Home() {
  return (
    <main className={clsx(styles.root)}>
      <QrCode />
    </main>
  );
}
