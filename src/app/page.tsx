"use client";

import { Page } from "@/components/Page";
import { openDialog } from "@/helpers/tgfunctions";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

export default function Home() {
  const initData = useLaunchParams()?.initDataRaw || "No initData";
  // const data = WebApp.initDataUnsafe.user; 
  // const userId = initData.id.toString()

  useEffect(() => {
    console.log(initData);
    
  }, []);

  return (
    <Page back={true}>
      {/* <Link href={"ton-connect"}>connect </Link> */}

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold cursor-pointer" onClick={()=> {navigator.clipboard.writeText(initData); console.log(initData);
        }}>Welco</h1>

        {/* <p>{initData?.first_name}</p>
        <p>{initData?.last_name}</p>
        <p>{initData?.photo_url}</p> */}


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
