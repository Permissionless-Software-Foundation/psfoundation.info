---
sidebar_position: 6
---

# Software

Below is a list of software maintained by the PSF. They are listed below according to their emphasis on the different layers of the [Cash Stack](https://cashstack.info) software stack.

- Applications
  - Web Apps
    - [react-bootstrap-web3-spa](https://github.com/Permissionless-Software-Foundation/react-bootstrap-web3-spa) - A 'boilerplate' code repository for building web apps that interact with the BCH blockchain.
    - [bch-wallet-web3-spa](https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-spa) - A BCH and SLP token web wallet. Forked from react-bootstrap-web3-spa.
      - **Live demo at [wallet.psfoundation.info](https://wallet.psfoundation.info/)**
    - [TokenTiger.com](https://tokentiger.com) - A fun, easy to use app for making NFTs (SLP). Features include:
      - Create an NFT with an image icon.
      - Tokenize a PDF, zip file, or image and share it publicly.
      - Tokenize a PDF, zip file, or image, but keep it private. Holders of the token exchange it for a download.
      - [Telegram Bot](https://t.me/+CfqXDEX3w_82NmIx) as alternative user interface to the website.
    - [bch-dex-taker-v2](https://github.com/Permissionless-Software-Foundation/bch-dex-taker-v2) - A BCH wallet app that lets users browse and purchase NFTs for sale on the DEX (decentralized exchange) network. Based on bch-wallet-web3-spa.
      - **Live demo at [dex.psfoundation.info](https://dex.psfoundation.info/)**
    
    - [bch-dex-ui-v2](https://github.com/Permissionless-Software-Foundation/bch-dex-ui-v2) (web app) and [bch-dex](https://github.com/Permissionless-Software-Foundation/bch-dex) (node) - These two pieces of software allow one to sell SLP tokens and NFTs on the DEX network. `bch-dex` is a node in that network. `bch-dex-ui-v2` is the user interface for managing your inventory of tokens for sale.
      - Learn more in [DEX Documentation](https://bch-dex-docs.fullstack.cash/)

    - [paper-wallet](https://github.com/Permissionless-Software-Foundation/paper-wallet) - Web-based paper wallet generator for BCH, NFTs, and other SLP tokens. They can be retrieved using the *Sweep* feature of the [web wallet](https://wallet.psfoundation.info).
      - **Live demo at [paperwallet.fullstack.cash](https://paperwallet.fullstack.cash/)**
      - Another great resource: [OpenSourceMetalWallet.com](https://opensourcemetalwallet.com/)

    - [slp-token-explorer](https://github.com/Permissionless-Software-Foundation/slp-token-explorer) - A simple web app for displaying information about an SLP token. Forked from react-bootstrap-web3-spa.
      - **Live demo at [slp-token.fullstack.cash](https://slp-token.fullstack.cash/?tokenid=810b5d7e5787ea38f6a6fc47141365d772470b85dffe57aa0d22c80e4edec875)**

  - Command Line Applications (CLI)

    - [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet) - This command-line wallet is particularly useful for developers, hackers, and the privacy minded. This is used as a boilerplate to fork to generate the other CLI apps below.
  
    - [psf-slp-wallet](https://github.com/Permissionless-Software-Foundation/psf-slp-wallet) - Used to create every type of SLP token and manage tokens. Forked from psf-bch-wallet.

    - [psf-msg-wallet](https://github.com/Permissionless-Software-Foundation/psf-msg-wallet) - Used to send and receive encrypted messages and files.

    - [psf-mc-wallet](https://github.com/Permissionless-Software-Foundation/psf-mc-wallet) - Used for PSF governance. This is specifically built for members of the Minting Council, to approve changes to the [PSFFPP](https://psffpp.com) write price in PSF tokens. Forked from psf-msg-wallet.

    - [psf-ipfs](https://github.com/Permissionless-Software-Foundation/psf-ipfs) - CLI app for exploring and managing the decentralized IPFS network that makes up the [PSFFPP](https://psffpp.com) and [web3 Cash Stack](https://cashstack.info).
  
- Integration Libraries
  - [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) - Browser & node.js JavaScript library with basic wallet and token functionality. Has bch-js embedded within it. Can use either web2 or web3 Cash Stack infrastructure.
  - [bch-js](https://www.npmjs.com/package/@psf/bch-js) - Full-featured node.js JavaScript library for crafting custom transactions and doing highly-detailed engineering of the BCH or eCash blockchains.
    - [bch-js-examples](https://github.com/Permissionless-Software-Foundation/bch-js-examples) have code examples for common use-cases.
  - [bch-message-lib](https://www.npmjs.com/package/bch-message-lib) - Browser & node.js JavaScript library for messaging via the BCH or eCash blockchain and/or IPFS. An extension that requires bch-js.
  - [bch-encrypt-lib](https://www.npmjs.com/package/bch-encrypt-lib) - Browser & node.js JavaScript library for encrypting messages using the same Elliptic Curve encryption used for Bitcoin Cash and eCash. An extension that requires bch-js.
  - [slp-mutable-data](https://www.npmjs.com/package/slp-mutable-data) - Browser & node.js JavaScript library for creating and reading SLP tokens with mutable and immutable data, following the [PS002 specification](https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps002-slp-mutable-data.md).

- API Servers
  - [bch-api](https://github.com/Permissionless-Software-Foundation/bch-api) - node.js web2 REST API server that integrates the indexer and full node layers. Primary service used by bch-js.
  - [ipfs-bch-wallet-consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer) - node.js web3 REST API server for minimal-slp-wallet and psf-bch-wallet. Provides a 'local' back end, and proxies requests over IPFS to a 'global' back end via JSON-RPC.
  - [ipfs-bch-wallet-service](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service) - node.js web3 JSON-RPC server. Receives JSON-RPC commands from ipfs-bch-wallet-consumer over IPFS, then passes the request on to a local instance of bch-api.
- Indexers
  - [psf-slp-indexer](https://github.com/Permissionless-Software-Foundation/psf-slp-indexer) - SLP token indexer for BCH and eCash.
  - [docker-fulcrum](https://github.com/Permissionless-Software-Foundation/docker-fulcrum) - Docker container for running a Fulcrum Electrumx indexer.
- Full Nodes
  - [docker-bchn](https://github.com/Permissionless-Software-Foundation/docker-bchn) - Docker container for a BCHN full node on the BCH blockchain.
  - [docker-abc](https://github.com/Permissionless-Software-Foundation/docker-abc) - Docker container for the Bitcoin ABC full node on the eCash blockchain.


## Deprecated Software

Older, broken, or deprecated software is listed here. Some of this software may be resurrected if more developer resources become available.

- Applications
  - [NFT Creator](https://nft-creator.fullstack.cash/) - Create NFTs on the BCH blockchain. *Needs to be updated to use PSFFPP.*
  - [NFT Collector](https://nft-collector.fullstack.cash/?addr=bitcoincash:qzsgnyd826c6xw5y3y4ct6q2gvf3r8fmkqfvtzn6ef) - Share your collections of NFTs. *Demo still works, but react framework needs to be brought up to date with react-bootstrap-web3-spa.*