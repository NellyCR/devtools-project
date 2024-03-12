'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { AuthButton } from "@/components/AuthButton";

export default function Home() {
  function signInClicked(){
    console.log("clicked")
    
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
         <AuthButton></AuthButton>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/data-protector"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Protect email <span>-&gt;</span>
          </h2>
          <p>Protect the privacy of your email address by tranforming it into an NFT.</p>
        </Link>

        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Send email <span>-&gt;</span>
          </h2>
          <p>Send emails to ETH wallets users using protected emails !</p>
        </Link>

        
      </div>
    </main>
  );
}
