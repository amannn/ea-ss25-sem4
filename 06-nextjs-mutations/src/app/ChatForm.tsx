type Props = {
  submit: (formData: FormData) => Promise<void>;
};

export default function ChatForm({submit}: Props) {
  return (
    <form action={submit}>
      <input name="content" className="border" />
      <button>Submit</button>
    </form>
  );
}
