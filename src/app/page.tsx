"use client";

import { Page } from "@/components/Page";
import { openDialog } from "@/helpers/tgfunctions";
import { useLaunchParams, parseInitData } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";

export default function Home() {
  
  const initData = parseInitData(useLaunchParams()?.initDataRaw) || "No initData";
  console.log(initData);
  //const [user, setUser] = useState<any>(parseInitData(initData));
  // const data = WebApp.initDataUnsafe.user; 
  // const userId = initData.id.toString()

  useEffect(() => {
    console.log(initData);
    console.log(initData.user?.id);
    console.log(initData.user?.firstName);
    console.log(initData.user?.lastName);
    console.log(initData.user?.username);
    console.log(initData.user?.photoUrl);
    
  }, []);

  return (
    <Page back={true}>
      {/* <Link href={"ton-connect"}>connect </Link> */}

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold cursor-pointer" onClick={()=> {console.log(initData);
        }}>Welco</h1>

        <p>{initData?.user?.firstName}</p>
        <p>{initData?.user?.lastName}</p>
        <p>{initData?.user?.username}</p>
        <p>{initData?.user?.id}</p>
        <p>{initData?.user?.photoUrl}</p>

        <button
          onClick={() => {
            openDialog("Watch ads!", "This you", "ok");
          }}
          className="mt-8 px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Open Popup
        </button>
      </div>
    </Page>
  );
}
