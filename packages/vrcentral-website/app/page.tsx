import { SearchSvg } from "@components/SearchSvg";
import styles from "./page.module.css";
import clsx from "clsx";

export default function Home() {
  return (
    <div
      className={clsx(
        "h-full flex flex-col items-center pt-64 bg-cover bg-center",
        styles["bg-hero"],
      )}
    >
      <h1 className={"flex justify-center text-5xl font-semimedium"}>
        {"Your hub for VRChat packages."}
      </h1>
      <h5 className={"text-2xl font-light text-italic pt-2"}>
        {"Explore and share custom content"}
      </h5>
      <div className={"pt-12 w-full"}>
        <HomeSearchBar />
      </div>
    </div>
  );
}

export const HomeSearchBar = () => {
  return (
    <form className={"flex justify-center"}>
      <input
        type={"search"}
        id={"search"}
        autoComplete={"off"}
        className={clsx(
          "w-full max-w-md py-2.5 px-4 text-sm",
          "border rounded-l-lg border-y-1 border-l-1 border-zinc-300 focus:border-blue-600",
          "bg-slate-700/50 placeholder-zinc-400 text-zinc-100 backdrop-blur-md",
        )}
        placeholder={"Search Packages..."}
      />
      <button
        type={"submit"}
        className={"px-2 text-sm text-zinc-100 bg-blue-600 rounded-r-lg"}
      >
        <SearchSvg className={"h-6"} />
      </button>
    </form>
  );
};
