import React from "react";

import Link from "next/link";
import clsx from "clsx";

export const Header = ({ hasNav = false }: { hasNav?: boolean }) => {
  return (
    <header className="sticky top-0 z-40 w-full flex-none backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] lg:z-50 lg:border-b lg:border-slate-900/10">
      <div className="max-w-8xl mx-auto">
        <div
          className={clsx(
            "border-b border-slate-900/10 py-2 dark:border-slate-300/10 lg:border-0 lg:px-8",
            hasNav ? "mx-4 lg:mx-0" : "px-4"
          )}
        >
          <div className="relative flex items-center">
            <Link href={"/"} className="mr-3 w-auto flex-none overflow-hidden">
              <div className="min-w-8 flex h-auto">
                <div className="flex pl-1 leading-loose">suoskit</div>
              </div>
            </Link>
            <div className="relative ml-auto items-center lg:flex">
              <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
                <button onClick={() => {}}>Sgin in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
