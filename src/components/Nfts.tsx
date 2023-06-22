import React from 'react'
import { getNftsForOwner } from '@/utils/web3'

async function fetchNfts() {
  const nfts = await getNftsForOwner()
  return nfts
}

const Nfts = async () => {
  const nfts = await fetchNfts()
  console.log(nfts)

  return (
    <div className="grid grid-cols-4 font-press-start-2p text-white">
      {nfts.map((nft) => (
        <div key={`${nft.contract}_${nft.tokenId}`}>
          <img
            src={nft.rawMetadata?.image?.replace(
              'ipfs://',
              'https://ipfs.io/ipfs/'
            )}
            alt={nft.title}
          />
          <div>
            #{nft.tokenId} {nft.title}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Nfts
