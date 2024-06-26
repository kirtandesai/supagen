"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OAuthButtons } from "../actions/oauth-signin";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { emailLogin } from "../actions/emailLogin";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Email must be a valid email address.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const { error } = await emailLogin(values);

    if (error) {
      setIsLoading(false);
      setServerError(error);
    } else {
      setServerError("");
      router.push("/profile");
    }
  }

  return (
    <div className="space-y-4 flex justify-center items-center  ">
      <div className="space-y-4 bg-white/10 backdrop-blur-lg border border-primary rounded-lg p-8 shadow-lg max-w-md w-full">
        <h1 className="text-3xl mb-3 items-center justify-center  font-bold">
          Login
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot"
                      className="text-sm underline font-medium hover:no-underline"
                    >
                      Forgot Pass
                    </Link>
                  </div>

                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {serverError && (
              <p className="text-sm font-medium text-red-600">{serverError}</p>
            )}
            <Button type="submit" isLoading={isLoading}>
              Login
            </Button>
            <Link href="/register">
              <Button variant={"secondary"} className="w-full">
                Create Account
              </Button>
            </Link>
          </form>
        </Form>
        <OAuthButtons />
      </div>
    </div>
  );
}
