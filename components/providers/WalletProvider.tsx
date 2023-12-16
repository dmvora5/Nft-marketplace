'use client';

import {
    ThirdwebProvider,
    ConnectWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    embeddedWallet,
    trustWallet,
    en,
  } from "@thirdweb-dev/react";
  import { PulsechainTestnetV4 } from '@thirdweb-dev/chains'

const WalletProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <ThirdwebProvider
      activeChain={PulsechainTestnetV4}
      clientId={process.env.THIRDWEB_CLIENTID}
      locale={en()}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        // embeddedWallet({
        //   auth: {
        //     options: [
        //       "email",
        //       "google",
        //       "apple",
        //       "facebook",
        //     ],
        //   },
        // }),
        trustWallet(),
      ]}
    >
      <ConnectWallet
        theme={"dark"}
        switchToActiveChain={true}
        modalSize={"wide"}
      />
      {children}
    </ThirdwebProvider>
  );
}

export default WalletProvider