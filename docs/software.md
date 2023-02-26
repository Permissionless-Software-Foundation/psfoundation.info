---
sidebar_position: 6
---

# Software

The *core* software maintained by the PSF is as follows:
- The [Cash Stack](https://cashstack.info), as illustrated in the [Cash Stack Documentation](https://cashstack.info), from top to bottom:
  - Applications
    - [bch-wallet-web3-android](https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-android) - ([demo](https://bchn-wallet.fullstack.cash/)) - open-source, white-label-ready, web wallet for BCH and XEC.
    - [Paper Wallet Generator](https://paperwallet.fullstack.cash/) - useful for storing BCH, NFTs, and other SLP tokens. They can be retrieved using the *Sweep* feature of the web wallet.
    - [ps-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet) - command-line wallet is particularly useful for developers, hackers, and privacy advocates.
    - [NFT Creator](https://nft-creator.fullstack.cash/) - Create NFTs on the BCH blockchain.
    - [NFT Collector](https://nft-collector.fullstack.cash/?addr=bitcoincash:qzsgnyd826c6xw5y3y4ct6q2gvf3r8fmkqfvtzn6ef) - Share your collections of NFTs.
    - [Token Explorer](https://slp-token.fullstack.cash/?tokenid=100065f9a4e429925d8d2dcdadcdc66c2dcbb95ca78f36d76a457db5b84e341b) - Allows exploration of NFTs and SLP tokens.
    - [PSF DEX](https://bch-dex-docs.fullstack.cash/) - Decentralized exchange for SLP tokens.
      - [Demo](https://dex.fullstack.cash)
      - [bch-dex](https://github.com/Permissionless-Software-Foundation/bch-dex) - node.js JavaScript REST API server, and production Docker container.
      - [bch-dex-ui](https://github.com/Permissionless-Software-Foundation/bch-dex-ui) - Gatsby web-based UI for controlling bch-dex.
      - [avax-dex](https://github.com/Permissionless-Software-Foundation/avax-dex) - Avalanche X-chain implementation of bch-dex.
      - [avax-dex-ui](https://github.com/Permissionless-Software-Foundation/avax-dex-ui) - Gatsby web-based UI for controlling avax-dex.
    - [P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) - Pay-to-Write Database
      - [p2wdb](https://www.npmjs.com/package/p2wdb) - Client-side JavaScript library
      - [P2WDB Explorer](https://explorer.fullstack.cash/) - Developer diagnostic tool (like a block explorer)
      - [Developer documentation](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service/tree/master/dev-docs)
    
  - Integration Libraries
    - [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) - Browser & node.js JavaScript library with basic wallet and token functionality. Has bch-js embedded within it. Can use either web2 or web3 Cash Stack infrastructure.
    - [bch-js](https://www.npmjs.com/package/@psf/bch-js) - Full-featured node.js JavaScript library for crafting custom transactions and doing highly-detailed engineering of the BCH or eCash blockchains.
      - [bch-js-examples](https://github.com/Permissionless-Software-Foundation/bch-js-examples) have code examples for common use-cases.
    - [bch-message-lib](https://www.npmjs.com/package/bch-message-lib) - Browser & node.js JavaScript library for messaging via the BCH or eCash blockchain and/or IPFS. An extension that requires bch-js.
    - [bch-encrypt-lib](https://www.npmjs.com/package/bch-encrypt-lib) - Browser & node.js JavaScript library for encrypting messages using the same Eliptic Curve encryption used for Bitcoin Cash and eCash. An extension that requires bch-js.
    - [slp-mutable-data](https://www.npmjs.com/package/slp-mutable-data) - Browser & node.js JavaScript library for creating and reading SLP tokens with mutable and immutable data, following the [PS002 specification](https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps002-slp-mutable-data.md).

  - REST APIs
    - [bch-api](https://github.com/Permissionless-Software-Foundation/bch-api) - node.js web2 REST API server that integrates the indexer and full node layers. Primary service used by bch-js.
    - [ipfs-bch-wallet-consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer) - node.js web3 REST API server for minimal-slp-wallet and psf-bch-wallet. Provides a 'local' back end, and proxies requests over IPFS to a 'global' back end via JSON-RPC.
    - [ipfs-bch-wallet-service](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service) - node.js web3 JSON-RPC server. Receives JSON-RPC commands from ipfs-bch-wallet-consumer over IPFS, then passes the request on to a local instance of bch-api.
  - Indexers
    - [psf-slp-indexer](https://github.com/Permissionless-Software-Foundation/psf-slp-indexer) - SLP token indexer for BCH and eCash.
    - [docker-fulcrum](https://github.com/Permissionless-Software-Foundation/docker-fulcrum) - Docker container for running a Fulcrum Electrumx indexer.
  - Full Nodes
    - [docker-bchn](https://github.com/Permissionless-Software-Foundation/docker-bchn) - Docker container for a BCHN full node on the BCH blockchain.
    - [docker-abc](https://github.com/Permissionless-Software-Foundation/docker-abc) - Docker container for the Bitcoin ABC full node on the eCash blockchain.
