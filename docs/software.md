---
sidebar_position: 5
---

# Software

The *core* software maintained by the PSF is as follows:
- The [Cash Stack](https://cashstack.info), as illustrated in the [Cash Stack Documentation](https://cashstack.info), from top to bottom:
  - Applications
    - [bch-wallet-starter](https://github.com/Permissionless-Software-Foundation/bch-wallet-starter) - ([demo](https://demo-wallet.fullstack.cash/)) - Web wallet, Gatsby Starter
    - [gatsby-theme-bch-wallet](https://github.com/Permissionless-Software-Foundation/gatsby-theme-bch-wallet) - Web wallet, Gatsby Theme
    - [PSF DEX](https://bch-dex-docs.fullstack.cash/) - Decentralized exchange for SLP tokens.
      - [Demo](dex.fullstack.cash)
      - [bch-dex](https://github.com/Permissionless-Software-Foundation/bch-dex) - node.js JavaScript REST API server, and production Docker container.
      - [bch-dex-ui](https://github.com/Permissionless-Software-Foundation/bch-dex-ui) - Gatsby web-based UI for controlling bch-dex.
      - [avax-dex](https://github.com/Permissionless-Software-Foundation/avax-dex) - Avalanche X-chain implementation of bch-dex.
      - [avax-dex-ui](https://github.com/Permissionless-Software-Foundation/avax-dex-ui) - Gatsby web-based UI for controlling avax-dex.
    - [P2WDB](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) - Pay-to-Write Database
      - [p2wdb](https://www.npmjs.com/package/p2wdb) - Client-side JavaScript library
      - [P2WDB Explorer](https://explorer.fullstack.cash/) - Developer diagnostic tool (like a block explorer)
      - [Developer documentation](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service/tree/master/dev-docs)
    - [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet) - Command-line reference wallet.
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
- The [Pay-to-Write Database](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service) (P2WDB)
- The [bch-dex](https://bch-dex-docs.fullstack.cash/) ([GitHub](https://github.com/Permissionless-Software-Foundation/bch-dex)) ([demo](https://dex.fullstack.cash))
