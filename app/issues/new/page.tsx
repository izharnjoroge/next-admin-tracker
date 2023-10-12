// "use client";
// import { Button, TextField } from "@radix-ui/themes";
// import Link from "next/link";
// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";
// import { useForm, Controller, Form, SubmitHandler } from "react-hook-form";
// import { TextArea } from "@radix-ui/themes";

// interface IssueForm {
//   title: string;
//   description: string;
// }

// export default function NewIssuePage() {
//   const { register, control, handleSubmit } = useForm<IssueForm>();
//   const onSubmit: SubmitHandler<IssueForm> = (data) => console.log(data);

//   return (
//     <Form  onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-2.5" >
//       <TextField.Root>
//         <TextField.Input placeholder="Title" {...register("title")} />
//       </TextField.Root>
//       {/* <Controller
//         name="description"
//         control={control}
//         render={({ field }) => (
//           <SimpleMDE placeholder="description" {...field} />
//         )}
//       /> */}
//        <TextArea placeholder="description" {...register("description")} />
//       <Button>
//         <Link href={"/issues/new"}>Submit New Issue</Link>
//       </Button>
//     </Form>
//   );
// }

"use client";
import { Button, TextField } from "@radix-ui/themes";
import Link from "next/link";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller, Form, SubmitHandler } from "react-hook-form";
import { TextArea } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

export default function NewIssuePage() {
  const route = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const onSubmit: SubmitHandler<IssueForm> = (data) => {
    axios.post("/api/issues", data);
    route.push("/issues");
  };

  return (
    <form className="max-w-xl space-y-2.5" onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="description" {...field} />
        )}
      />

      {/* <TextArea placeholder="description" {...register("description")} /> */}
      <Button>Submit New Issue</Button>
    </form>
  );
}
