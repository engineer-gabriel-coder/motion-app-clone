"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";

import Image from "next/image";

const DocumentPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "You are creating a new note...",
      success: "Your new note created successfully",
      error: "Failed to create new note!",
    });
  };

  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image
        src='/empty.png'
        alt='Empty'
        height='300'
        width='300'
        className='dark:hidden'
      />
      <Image
        src='/empty-dark.png'
        alt='Empty'
        height='300'
        width='300'
        className='hidden dark:block'
      />
      <h2 className='text-lg font-medium'>
        Welcome to {user?.firstName}&apos;s Motion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className='h-4 w-4 mr-2' />
        Create note
      </Button>
    </div>
  );
};

export default DocumentPage;
