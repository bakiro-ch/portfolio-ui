'use client'

import { Button } from "@/components/ui/button";
import { Card,CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/assets/logo";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetcher } from "@/lib/client";
import { useState } from "react";
import { SpinnerCustom } from "@/components/ui/spinner";
import { useRouter } from "next/navigation"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

//Zod automatically creates the TypeScript type!
type LoginForm = z.infer<typeof loginSchema>;
// LoginForm is now strictly typed as: { email: string, password: string }

const LoginForm = () => {

  const router = useRouter();

  const {register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const [error, setError] = useState<ErrorResponse | null>(null);

  const onSubmit = async (data: LoginForm) => {
    try{

      const res = await fetcher<LoginSuccessResponse>('/auth/login',{
        method: 'POST',
        body: JSON.stringify(data),
      });

      const cookie = document.cookie = `token=${res.token}; path=/; max-age=${ 7 * 24 * 60 * 60 }`;

      setError(null);

      console.log(cookie);

      router.push('/admin');

    } catch(error : any){
      setError(error);
    }
  };


  return (
    <section className="bg-foreground dark:bg-background min-h-screen flex items-center justify-center relative">
      <div className="pointer-events-none absolute inset-0 right-0 overflow-hidden md:block hidden">
        {/* Outer big circle */}
        <div className="absolute left-1/1 top-0 h-650 w-650 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
        {/* Inner circle */}
        <div className="absolute left-1/1 top-0 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground dark:bg-background" />
      </div>

      <div className="py-10 md:py-20 max-w-lg px-4 sm:px-0 mx-auto w-full">
        <Card className="max-w-lg px-6 py-8 sm:p-12 relative gap-6">
          <CardHeader className="text-center gap-6 p-0">
            <div className="mx-auto">
              <a href="">
                <Logo className="w-15 h-15 bg-primary rounded-2xl" />
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <CardTitle className="text-2xl font-medium text-card-foreground">
                Welcome Back To Your Portfolio
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground font-normal">
                Login to your account now
              </CardDescription>
            </div>
          </CardHeader>
          {error && (
            <div className="bg-destructive/10 text-destructive rounded-lg py-2 px-4 text-sm">
              {/* Check if the backend sent an array of specific errors */}
              {error.errors && error.errors.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {error.errors.map((err: string, index: number) => (
                    <li key={index}>{err}</li>
                  ))}
                </ul>
              ) : (
                // If there are no specific errors, just show the general message
                <p>{error.message || "An unexpected error occurred."}</p>
              )}
            </div>
          )}
          <CardContent className="p-0">
            <form onSubmit={handleSubmit(onSubmit)}
            >
              <FieldGroup className="gap-6">
                {/* <Field className="grid md:grid-cols-2 md:gap-6 gap-3">
                  <Button
                    variant="outline"
                    type="button"
                    className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                  >
                    <img
                      src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                      alt="google icon"
                      className="h-4 w-4"
                    />
                    Sign in with Google
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg h-9 shadow-xs cursor-pointer"
                  >
                    <img
                      src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
                      alt="github icon"
                      className="dark:hidden  h-4 w-4"
                    />
                    <img
                      src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                      alt="github icon"
                      className="hidden dark:block  h-4 w-4"
                    />
                    Sign in with Github
                  </Button>
                </Field>
                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card text-sm text-muted-foreground bg-transparent">
                  <span className="px-4">or sign in with</span>
                </FieldSeparator> */}

                <div className="flex flex-col gap-4">
                  <Field className="gap-1.5">
                    <FieldLabel
                      htmlFor="email"
                      className="text-sm text-muted-foreground font-normal"
                    >
                      Email*
                    </FieldLabel>
                    <Input
                    {...register('email')}
                      id="email"
                      // type="email"
                      placeholder="example@mail.com"
                      // required
                      className="dark:bg-background h-9 shadow-xs"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </Field>
                  <Field className="gap-1.5">
                    <FieldLabel
                      htmlFor="password"
                      className="text-sm text-muted-foreground font-normal"
                    >
                      Password*
                    </FieldLabel>

                    <Input
                    {...register('password')}
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      // required
                      className="dark:bg-background h-9 shadow-xs"
                    />
                      {errors.password && (
                      <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
                    )}
                  </Field>
                </div>

                <Field orientation="horizontal" className="justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id="terms"
                      defaultChecked
                      className="cursor-pointer"
                    />
                    <FieldLabel
                      htmlFor="terms"
                      className="text-sm text-primary font-normal cursor-pointer"
                    >
                      Remember this device
                    </FieldLabel>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-card-foreground font-medium text-end"
                  >
                    Forgot password?
                  </a>
                </Field>

                <Field className="gap-4">
                  <Button type="submit" size={"lg"} variant={isSubmitting ? 'secondary' : 'default'}>
                    {isSubmitting ? <SpinnerCustom/> : 'Sign in →' }
                  </Button>
                  {/* <FieldDescription className="text-center text-sm font-normal text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-card-foreground no-underline!"
                    >
                      Create an account
                    </a>
                  </FieldDescription> */}
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginForm;
