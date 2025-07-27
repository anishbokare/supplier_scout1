import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Logo } from "@/src/components/logo";

export default function RegisterPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Create your account to get started
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input id="company-name" placeholder="Acme Inc." required />
            </div>
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
                <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">I am a</Label>
              <Select defaultValue="vendor">
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vendor">Vendor</SelectItem>
                  <SelectItem value="supplier">Supplier</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
       <div className="hidden bg-muted lg:block">
        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100/40 p-10 dark:bg-zinc-800/40">
            <div className="flex items-center gap-4 text-4xl font-bold text-primary">
                <Logo/>
            </div>
            <Image
                src="https://placehold.co/800x600.png"
                alt="Image"
                width="1920"
                height="1080"
                data-ai-hint="modern factory"
                className="mt-8 h-auto w-full max-w-2xl rounded-lg object-cover shadow-xl dark:brightness-[0.8]"
            />
             <Card className="mt-8 max-w-2xl bg-background/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle>Join a Network of Excellence</CardTitle>
                    <CardDescription>
                    Become part of a thriving ecosystem of vendors and suppliers. Supplier Scout empowers your business with the tools and connections you need to succeed in a competitive market.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
      </div>
    </div>
  );
}
