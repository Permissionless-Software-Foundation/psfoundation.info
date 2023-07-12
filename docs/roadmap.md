---
sidebar_position: 7
---

# Roadmap

Below is a roadmap of software developed by the PSF. While it's easiest to present the milestones in a linear fashion, most of these goals can be achieved in parallel. Dates are never used when presenting milestones, because the PSF is *not a company* that can make steady progress on any one area. Most contributions come from *intrinsically motivated* developers who are persuing their own personal interests, and try to give back to the PSF at the same time.

Milestones are rarely 'done', because they require steady maintenance over time. Instead, progress depends on the number of active developers participating in our open source community. That includes intrinsically motivated developers (which tend to help with new features), and extrinsically (paid) motivated developers (which tend to help with unit tests and maintenance). Business members can accelerate development of any milestone by purchasing PSF tokens and rewarding developers with them.

## Major Milestones Achieved

- Create documentation for the [Cash Stack](https://cashstack.info).
- Create a proposal voting process using SLP tokens.
- Create ee2e 'email' allowing asynchronous communication with any BCH address.
- Create a mutable data protocol for SLP tokens, allowing changing token icons and tracking of changing data over time.
- Create a more reliable token [indexer for SLP tokens](https://github.com/Permissionless-Software-Foundation/psf-slp-indexer).
- Create a [decentralized exchange](https://dex.fullstack.cash) (DEX) and [documentation](https://bch-dex-docs.fullstack.cash/) for trading SLP tokens.
- Create [P2WDB Documentation](https://p2wdb.com) for the pay-to-write database (P2WDB).
- Create [CoinJoin framework](https://ccoinjoin.com/) that can be applied to SLP tokens for fungible, private tokens.


## Milestones Under Development

Infrastructure developed in previous milestones (like the [pay-to-write database (P2WDB)](https://p2wdb.com), [Cash Stack](https://cashstack.info), [SLP indexer](https://github.com/Permissionless-Software-Foundation/psf-slp-indexer), and [Collaborative CoinJoin](https://ccoinjoin.com/)) are the foundation stones upon which future projects are built. The P2WDB is a focal point for the PSF, because its usage consumes PSF tokens and allows the PSF to fund developers to maintain the code behind the infrastructure. This creates a virtuous, circular economy.

### Pay-to-Write Database (P2WDB)
The [P2WDB](https://p2wdb.com) consumes [PSF tokens](https://psfoundation.cash) when new entries are written to the database. New features are steadily added to the software to make it easier to use and more capable of solving additional business problems.

Milestones:
- Increase [pinning-service](https://p2wdb.com/docs/apps/pinning-service) file size from 1MB to 100MB.
- Add blacklist CID array, so that operators can blacklist certain DB records.

### Local Trade List
[LocalTradeList](https://localtradelist.com) is a directory of local businesses. Anyone can list businesses and products on the app. Because the software is open source and the data is anchored to the blockchain, the data can never be censored or tampered with. Local Trade List is built on top of the P2WDB and SLP tokens.

Milestones:

- Create non-custodial image upload, to make it easier to create a store.
- Add *Commenting*, allowing users to leave comments and reviews on stores.
- Allow commenting on other comments.

### Member Projects

The PSF is a membership of entrepreneurs, crypto enthusiasts, and JavaScript developers. The members help one another with projects, listing to their ideas and trying out their prototypes. A important part of the PSF roadmap is to increase our membership and to continue to support the efforts of our members. Here are some of the active community projects using PSF technology:

- [Token Tiger](https://tokentiger.com) is a fun, easy-to-use web app for creating NFTs. Under its cute exterior, it's a proof-of-concept to show how inexpensive it is to create NFTs with rich metadata. Such NFTs could be used to improve logistics and tracking in the supply chain industry. They can also be used to track intellectual property and rights associated with that property.

- [OwnRare.Art](https://ownrare.art) is an NFT creator, collector, and trading app on the Bitcoin Cash (BCH) blockchain, similar to [OpenSea](https://opensea.io) on the Ethereum (ETH) blockchain.


Want clarification on the above items? See something interesting that you'd like to contribute to? Ask about it in the [PSF Telegram Channel](https://t.me/permissionless_software).
