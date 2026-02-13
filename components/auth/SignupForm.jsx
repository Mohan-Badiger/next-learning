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

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const terms = form.terms.checked;

    if (!terms) {
      return setError("Please accept Terms & Conditions");
    }

    if (password !== confirm) {
      return setError("Passwords do not match");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || "Signup failed");
      }

      setSuccess("Account created successfully 🎉");
      form.reset();
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
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-heading">
            Create Account
          </CardTitle>
          <CardDescription>
            Enter your details to get started
          </CardDescription>

          <CardAction>
            <Button asChild variant="link" className="px-0">
              <Link href="/login">Login</Link>
            </Button>
          </CardAction>
        </CardHeader>

        {/* ✅ Content */}
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            
            <div className="grid gap-1.5">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Mohan Badiger"
                required
                className="rounded-sm"
              />
            </div>

            <div className="grid gap-1.5">
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

            <div className="grid gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="rounded-sm"
              />
              <p className="text-xs text-muted-foreground">
                Must be at least 6 characters
              </p>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                name="confirm"
                type="password"
                required
                className="rounded-sm"
              />
            </div>

            {/* ✅ Terms */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="rounded-sm"
              />
              <Label htmlFor="terms" className="text-sm font-normal">
                I agree to the{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  Terms & Conditions
                </span>
              </Label>
            </div>

            {/* ✅ Error Message */}
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            {/* ✅ Success Message */}
            {success && (
              <p className="text-sm text-green-600">{success}</p>
            )}

            {/* ✅ Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-sm font-medium"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>

          </form>
        </CardContent>

      </Card>
    </div>
  );
}
