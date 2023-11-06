"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();

  const onCreate = () => {
    const promise = create({ title: "Без названия" }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Создание новой заметки...",
      success: "Новая заметка создано!",
      error: "Ошибка созданий новой заметки.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/think.svg"
        height={300}
        width={300}
        alt="Think"
        className="dark:hidden"
      />
      <Image
        src="/think-dark.svg"
        height={300}
        width={300}
        alt="Think"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Добро пожаловать {user?.firstName}&apos;s Arfelings
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Создать заметку
      </Button>
    </div>
  );
};

export default DocumentsPage;
