import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { BasicLayout } from "~/components/BasicLayout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
