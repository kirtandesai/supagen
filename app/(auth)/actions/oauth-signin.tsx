"use client";
import { Button } from "@/components/ui/button";
import { Provider } from "@supabase/supabase-js";
// import { Github, ChromeIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { oAuthSignIn } from "./actions";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <FaGithub className="size-5" />,
    },
    {
      name: "google",
      displayName: "Google",
      icon: <FcGoogle className="size-5" />,
    },
  ];

  return (
    <>
      {oAuthProviders.map((provider) => (
        <Button
          className="w-full flex items-center justify-center gap-2"
          variant="outline"
          key={provider.name}
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
        >
          {provider.icon}
          Login with {provider.displayName}
        </Button>
      ))}
    </>
  );
}
