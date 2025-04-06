---
sidebar_position: 7
---

# Roadmap

Below is a roadmap of software developed by the PSF. While it's easiest to present the milestones in a linear fashion, most of these goals can be achieved in parallel. Dates are never used when presenting milestones, because the PSF is *not a company* that can make steady progress on any one area. Most contributions come from *intrinsically motivated* developers who are pursuing their own personal interests, and try to give back to the PSF at the same time.

Milestones are rarely 'done', because they require steady maintenance over time. Instead, progress depends on the number of active developers participating in our open source community. That includes intrinsically motivated developers (which tend to help with new features), and extrinsically (paid) motivated developers (which tend to help with unit tests and maintenance). [Reach out](/communication) if you are interested in helping the organization grow.

## Major Milestones Achieved

- Create documentation for the [Cash Stack](https://cashstack.info).
- Create a proposal voting process using SLP tokens.
- Create ee2e 'email' allowing asynchronous communication with any BCH address.
- Create a mutable data protocol for SLP tokens, allowing changing token icons the tracking of changing data over time.
- Create a more reliable token [indexer for SLP tokens](https://github.com/Permissionless-Software-Foundation/psf-slp-indexer).
- Create a [decentralized exchange](https://dex.psfoundation.info) (DEX) and [documentation](https://bch-dex-docs.fullstack.cash/) for trading SLP tokens.
- Phase out the [P2WDB Documentation](https://p2wdb.com) and replace it with the [PSFFPP](https://psffpp.com).
- Create [CoinJoin framework](https://ccoinjoin.com/) that can be applied to SLP tokens for fungible, private tokens.


## Milestones Under Development

Infrastructure developed in previous milestones (like the [PSF File Pinning Protocol (PSFFPP)](https://psffpp.com), [Cash Stack](https://cashstack.info), [SLP indexer](https://github.com/Permissionless-Software-Foundation/psf-slp-indexer), [DEX](https://dex.psfoundation.info), and [Collaborative CoinJoin](https://ccoinjoin.com/)) are the foundation stones upon which future projects are built. The PSFFPP and DEX are focal points for the PSF, because their usage consumes PSF tokens and allows the PSF to fund developers to maintain the code behind the infrastructure. This creates a virtuous, circular economy.

### PSFFPP (PSFFPP)
The [PSFFPP](https://psffpp.com) consumes [PSF tokens](https://psfoundation.cash) when new files are uploaded for hosting. New features are steadily added to the software to make it easier to use and more capable of solving additional business problems.

Milestones:
- Increase max file size from 1MB to 100MB for pinning (DONE).
- Add blacklist CID array, so that operators can voluntarily and collectively blacklist certain DB records.
- Create tracking and bounty system to compensate PSF members for running CashStack and PSFFPP instances.

### SLP DEX

The [SLP DEX](https://dex.psfoundation.info) provides a marketplace for trading NFTs and other SLP tokens. It supports the growing token economy being built by PSF member businesses like [TokenTiger.com](https://tokentiger.com) and [OwnRare.art](https://ownrare.art). The PSF pioneered mutable data for tokens, which allows SLP tokens to expressively solve a wide range of business problems. Mutable data is natively supported by the PSFFPP. An increase in the creation of new tokens will consume PSF tokens and support our circular economy.

Milestones:

- Support NFTs created by Token Tiger in the [web wallet](https://wallet.psfoundation.info) and [DEX](https://dex.psfoundation.info) (DONE)
- Cache token icons and improve user experience for Buyers and Sellers on the DEX.
- Integrate [Nostr](https://nostr.com) social media features into the DEX.

### Member Projects

The PSF is a membership of entrepreneurs, crypto enthusiasts, and JavaScript developers. The members help one another with projects, listening to their ideas and trying out their prototypes. An important part of the PSF roadmap is to increase our membership and to continue to support the efforts of our members. Here are some of the active community projects using PSF technology:

- [Token Tiger](https://tokentiger.com) is a fun, easy-to-use web app for creating NFTs. Under its cute exterior, it's a proof-of-concept to show how inexpensive it is to create NFTs with rich metadata. Such NFTs could be used to improve logistics in the supply chain industry, lower friction and increase trade in intellectual property, prove a document existed at a point in time and that it has not been tampered with for legal disputes, and many other business applications. Current token features the site offers:
  - Create an NFT with an image icon.
  - Tokenize a PDF, zip file, or image and share it publicly.
  - Tokenize a PDF, zip file, or image, but keep it private. Holders of the token exchange it for a download.
  - A [Telegram Bot](https://t.me/+CfqXDEX3w_82NmIx) as alternative user interface to the website.

- [OwnRare.Art](https://ownrare.art) is an NFT creator, collector, and trading app on the Bitcoin Cash (BCH) blockchain, similar to [OpenSea](https://opensea.io) on the Ethereum (ETH) blockchain.

---

Want clarification on the above items? See something interesting that you'd like to contribute to? Ask about it in the [PSF Telegram Channel](https://t.me/permissionless_software).
