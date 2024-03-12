"use client"

import { ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from '@/utils/wagmi';

interface WalletProviderProps {
    children: ReactNode;
}

export function WalletProvider({children}: WalletProviderProps) {
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}

