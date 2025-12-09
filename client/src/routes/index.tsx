import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/nav";
import Questions from "../components/questions/index";
import AddQuestion from "../components/addquestion";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: (search: { addQuestion?: true }) => search,
});

function RouteComponent() {
  return (
    <div className="ml-10 flex flex-col gap-4">
      <Navbar />
      <hr className="w-[20%] text-stone-700 rounded-full" />

      <h1 className="font-semibold text-lg text-stone-400">All Questions</h1>
      <Questions />
      <AddQuestion />
    </div>
  );
}
