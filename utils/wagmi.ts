import { createWeb3Modal } from '@web3modal/wagmi/react';
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi';
import { createConfig, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { iExecSideChain } from './wallet-connection';


const projectId = "06a220a772ca4e60145757398a6a237c"

const { chains, publicClient } = configureChains(
  [iExecSideChain],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

// Custom config instead of using defaultWagmiConfig
// https://docs.walletconnect.com/web3modal/react/about?platform=wagmi#implementation
// -> To avoid having @coinbase/wallet-sdk end up into our bundle
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata },
    }),
    // Needed to detect Metamask
    new EIP6963Connector({ chains }),
  ],
  publicClient,
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains, defaultChain: iExecSideChain });
