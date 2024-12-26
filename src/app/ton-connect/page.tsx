"use client";

import { openLink } from "@telegram-apps/sdk-react";
import { Page } from "@/components/Page";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

export default function TONConnectPage() {
  const wallet = useTonWallet();
  return (
    <Page>
      <TonConnectButton />
      <button onClick={ ()=>openLink("https://ton.org")}>
        Connect wallet
      </button>
    </Page>
  );
}
