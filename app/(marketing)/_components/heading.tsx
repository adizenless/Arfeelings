"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl md:space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Твои Идеи, Документы, & Планы. Объединённы. Добро пажаловать в{" "}
        <span className="underline">Arfeelings</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium mt-10">
        Arfeelings - это соединённая рабочее место <br className="hidden md:block" /> где происходит
        продуктивная работа.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center mt-10">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild className="mt-10">
          <Link href="/documents">
            Начать
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className="mt-10">
            Войти
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
