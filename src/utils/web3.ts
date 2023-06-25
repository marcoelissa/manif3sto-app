import { Network, Alchemy } from 'alchemy-sdk'
import { getAccount } from '@tokenbound/sdk-ethers'
import { ethers } from 'ethers'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

const network = {
  mainnet: Network.ETH_MAINNET,
  sepolia: Network.ETH_SEPOLIA,
  polygonMumbai: Network.MATIC_MUMBAI
}

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
  network: network[process.env.NEXT_PUBLIC_NETWORK as keyof typeof network]
}

export const alchemy = new Alchemy(settings)

export const getTBA: () => Promise<string> = async () => {
  const rpcUrl = `https://${settings.network}.g.alchemy.com/v2/${settings.apiKey}`
  const ethersProvider = new ethers.providers.JsonRpcProvider(rpcUrl)
  const accountAddress = await getAccount(
    contractAddress as string,
    '0',
    ethersProvider
  )

  return accountAddress
}

export const getNftsForTBA = async (
  address?: string,
  contractAddresses?: string[]
) => {
  if (!address) {
    address = await getTBA()
  }

  const { ownedNfts } = await alchemy.nft.getNftsForOwner(address as string, {
    contractAddresses
  })
  return ownedNfts
}

export const shortAddress = (address: string) => {
  return `${address.slice(0, 5)}...${address.slice(-4)}`
}
