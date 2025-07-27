"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCart from "@/hooks/use-cart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PackageSearch } from "lucide-react";

function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <PackageSearch className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground">Supplier Scout</span>
    </div>
  );
}

export default function LoginPage() {
  const [role, setRole] = useState("vendor");
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, you'd perform authentication here.
    // For this prototype, we'll just redirect based on the selected role.
    router.push(`/${role}/dashboard`);
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="supplier">Supplier</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleLogin} type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-900/40 p-10 dark:bg-zinc-800/40">
            <div className="flex items-center gap-4 text-4xl font-bold text-primary">
                <Logo/>
            </div>
            <Image
                src="https://placehold.co/800x600.png"
                alt="Image"
                width="1920"
                height="1080"
                data-ai-hint="food stall night"
                className="mt-8 h-auto w-full max-w-2xl rounded-lg object-cover shadow-xl dark:brightness-[0.8]"
            />
             <Card className="mt-8 max-w-2xl bg-background/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle>Your One-Stop Shop for Street Food Supplies</CardTitle>
                    <CardDescription>
                    Supplier Scout connects street food vendors with the best local suppliers. Find fresh ingredients, compare prices, and get everything you need delivered right to your stall.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
      </div>
    </div>
  );
}
