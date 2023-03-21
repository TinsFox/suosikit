import { type ReactNode } from "react";
import { Header } from "./Header";

export const BasicLayout = (props: { children?: ReactNode }) => {
  return (
    <div className="relative h-screen overflow-hidden overflow-y-auto">
      <Header />
      <main className="max-w-8xl lg:px-8lg:pl-[19.5rem] mx-auto px-4 sm:px-6">
        <div className="fixed inset-0 top-[4.8rem] left-[max(0px,calc(10%-45rem))] right-auto z-20 hidden w-[15rem] overflow-y-auto rounded-sm bg-white px-2 pb-10 xl:block">
          <aside className="fixed mt-2 ml-2 hidden h-full w-52 overflow-auto rounded-md lg:block ">
            123
          </aside>
        </div>
        <div className="xl:pl-[14rem]">
          <div className="pt-5 lg:pl-2 xl:ml-0 xl:max-w-none">
            {props.children}
          </div>
        </div>
      </main>
    </div>
  );
};
