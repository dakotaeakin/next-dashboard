import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dashboard from "./dashboard/index";

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
