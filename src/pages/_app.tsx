import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { NavBar } from "~/components/NavBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className="dark: text-white light:black">
        <NavBar></NavBar>
        <Component {...pageProps} />
      </div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
