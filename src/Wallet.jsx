
import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '6e3404bdc255061a9f510e53e9b60f20'

// 2. Create a metadata object - optional
const metadata = {
  name: 'testwallet',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Set the networks
const networks = [mainnet, arbitrum]

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
   themeMode: 'dark',
  metadata,
  themeVariables: {
    '--w3m-accent' :'transparent',
    '--w3m-font-family':'Oxanium',
    '--w3m-font-size-regular': '8px',
    '--w3m-font-size-medium': '8px',
    '--w3m-font-size-large': '8px',
    '--w3m-font-size-xl': '8px',
    '--w3m-font-size-xxl': '8px',
    '--w3m-font-size-mobile-regular': '8px',
    '--w3m-font-size-mobile-medium': '8px',
    '--w3m-font-size-mobile-large': '8px',
    '--w3m-font-size-mobile-xl': '8px',
    '--w3m-font-size-mobile-xxl': '8px',
    '--w3m-modal-width': '200px',
    '--w3m-border-radius': '0px', // Remove border radius
        '--w3m-border': 'none', // Remove border
        '--ro-modal-border-width': '0px',
  },
   
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
    