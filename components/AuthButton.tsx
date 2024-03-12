'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';

export function AuthButton() {
    // Hooks and global state
    const { address } = useAccount();
    const { disconnectAsync } = useDisconnect();
    const { open } = useWeb3Modal();

    function signIn() {
        open()
    }

    async function signOut() {
        await disconnectAsync()
    }

    // Signed in screen
    if(address) {
        return <button onClick={signOut}>{address}</button>
    }

    return <button onClick={signIn}>Connect Wallet</button>
}