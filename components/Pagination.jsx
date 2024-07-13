import { useRouter } from "next/router";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

export default function Pagination({ total }) {
  const router = useRouter();
  const { page } = router.query;

  const size = 12;
  const totalPages = Math.ceil(Number(total) / size);

  const back = () => {
    if (page <= 1) return;
    router.push(`?page=${Number(page) - 1}`);
  };

  const goto = (page_num) => {
    if (page == page_num) return;
    router.push(`?page=${page_num}`);
  };

  const next = () => {
    if (page >= totalPages) return;
    router.push(`?page=${Number(page) + 1}`);
  };

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center space-x-1">
        <button
          className={`px-2 py-2 border rounded-md text-white ${page <= 1 ? "bg-blue-300" : "bg-blue-500 hover:bg-primary"}`}
          onClick={back}
          disabled={page <= 1}
        >
          <RxCaretLeft className="text-2xl text-white" />
        </button>

        {[...Array(totalPages)].map((_, i) => {
          let isActive = false;
          if (page == i + 1 || (!page && i == 0)) {
            isActive = true;
          }

          return (
            <button
              key={i}
              className={`px-4 py-2 border rounded-md text-blue-500 ${isActive ? "bg-blue-100" : "bg-white hover:bg-blue-100"}`}
              onClick={() => goto(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}

        <button
          className={`px-2 py-2 border rounded-md text-white ${page >= totalPages ? "bg-blue-300" : "bg-blue-500 hover:bg-primary"}`}
          disabled={page >= totalPages}
          onClick={next}
        >
          <RxCaretRight className="text-2xl text-white" />
        </button>
      </nav>
    </div>
  );
}
