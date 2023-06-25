import React from 'react'
import { getTBA, getNftsForTBA, shortAddress } from '@/utils/web3'

async function fetchData() {
  const account = await getTBA()
  const nfts = await getNftsForTBA(account)
  return { account, nfts }
}

const TokenboundAccount = async () => {
  const { account, nfts } = await fetchData()
  const explorer = process.env.NEXT_PUBLIC_EXPLORER_URL

  return (
    <div className="absolute bottom-0 z-10 w-full translate-y-[calc(100%-1.5rem)] px-4 pb-6 transition hover:translate-y-0">
      <div className="flex w-full items-end">
        <a
          href={`${explorer}/address/${account}`}
          className="relative flex h-fit w-fit cursor-pointer items-center space-x-2 rounded-t-lg bg-white/60 px-2 py-1 transition-[width] duration-1000"
          target="_blank"
        >
          <div className="group/address text-xs font-bold md:text-base">
            <span className="group-hover/address:hidden">
              {shortAddress(account)}
            </span>
            <span className="hidden group-hover/address:block">{account}</span>
          </div>
        </a>
      </div>
      <div className="grid w-full grid-cols-6 gap-x-3 rounded-lg rounded-tl-none bg-white/60 p-3">
        {nfts.map((nft, index) => (
          <div key={index} className="relative h-full w-full rounded-lg">
            <div className="aspect-square h-auto w-full overflow-hidden rounded-xl bg-contain bg-center bg-no-repeat">
              <img
                src={nft.rawMetadata?.image?.replace(
                  'ipfs://',
                  'https://ipfs.io/ipfs/'
                )}
                alt={nft.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TokenboundAccount
