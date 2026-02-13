import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <Card className="w-full max-w-sm shadow-xl border border-gray-100 rounded-sm">

        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-heading">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
          <CardAction>
            <Link href="/signup">
              <Button variant="link" className="px-0">
                Sign Up
              </Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="rounded-sm"
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto text-sm text-muted-foreground hover:text-primary"
                >
                  Forgot password?
                </a>
              </div>

              <Input
                id="password"
                type="password"
                required
                className="rounded-sm"
              />
            </div>

          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button type="submit" className="w-full rounded-sm">
            Login
          </Button>

          <Button
            variant="outline"
            className="w-full rounded-sm"
          >
            Login with Google
          </Button>
        </CardFooter>

      </Card>
    </div>
  );
}
