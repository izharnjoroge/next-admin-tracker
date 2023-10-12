"use client";
import { Button, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller, Form, SubmitHandler } from "react-hook-form";
import { TextArea } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

export default function NewIssuePage() {
  const route = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>();
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issues", data);
      route.push("/issues");
    } catch (error) {
      setSubmitting(false);
      alert(error);
    }
  };

  return (
    <form className="max-w-xl space-y-2.5 " onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root>
        <TextField.Input
          placeholder="Title"
          {...register("title", { required: true })}
        />

        {errors.title && (
          <Text color="red" as="p">
            This field is required
          </Text>
        )}
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="description" {...field} />
        )}
      />
      {errors.description && (
        <Text color="red" as="p">
          This field is required
        </Text>
      )}
      {/* <TextArea placeholder="description" {...register("description")} /> */}
      <Button disabled={submitting}>
        {submitting ? <Spinner /> : "Submit New Issue"}
      </Button>
    </form>
  );
}
