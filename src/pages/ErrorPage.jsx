import Button from "../ui/Button/Button";

export default function ErrorPage() {
  return (
    <div className="container">
      <div className="mt-24">
        <h2>Oops!</h2>
        <p className="text-24 mb-6">Page is not exist.</p>
        <Button linkTo="/">Go Back</Button>
      </div>
    </div>
  );
}
