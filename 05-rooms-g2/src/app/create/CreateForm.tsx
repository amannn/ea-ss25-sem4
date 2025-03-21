type Props = {
  submit: (formData: FormData) => Promise<void>;
};

export default function CreateForm({submit}: Props) {
  return (
    <form action={submit}>
      <input placeholder="Title" name="title" />
      <button>Submit</button>
    </form>
  );
}
