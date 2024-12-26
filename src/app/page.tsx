"use client";

import { Page } from "@/components/Page";
import { openDialog } from "@/helpers/tgfunctions";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  }, []);

  return (
    <Page back={false}>
      {/* <Link href={"ton-connect"}>connect </Link> */}

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Welcome</h1>

        <button
          onClick={() => {
            openDialog("Watch ads!", "new", "ok");
          }}
          className="mt-8 px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Open Popup
        </button>
      </div>
    </Page>
  );
}
