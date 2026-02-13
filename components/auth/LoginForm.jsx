"use client";

import { useState } from "react";
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
import { useRouter } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || "Login failed");
      }

      setSuccess("Login successful 🎉");
      form.reset();
      router.push('/')
      

    } catch (err) {
      setError(err.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <Card className="w-full max-w-sm shadow-xl border border-gray-100 rounded-sm">

        {/* ✅ Header */}
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-heading">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>

          <CardAction>
            <Button asChild variant="link" className="px-0">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>

        {/* ✅ Content */}
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-5">

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
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
                name="password"
                type="password"
                required
                className="rounded-sm"
              />
            </div>

            {/* ✅ Error */}
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            {/* ✅ Success */}
            {success && (
              <p className="text-sm text-green-600">{success}</p>
            )}

            {/* ✅ Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-sm"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

          </form>
        </CardContent>

      </Card>
    </div>
  );
}
