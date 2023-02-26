---
sidebar_position: 7
---

# Roadmap

Below is a roadmap of software developed by the PSF. While it's easiest to present the milestones in a linear fashion, most of these goals can be achieved in parallel. Dates are never used when presenting milestones, because the PSF is *not a company* that can make steady progress on any one area. Most contributions come from *intrinsically motivated* developers who are persuing their own personal interests, and try to give back to the PSF at the same time.

Milestones are rarely 'done', because they require steady maintenance over time. Instead, progress depends on the number of active developers participating in our open source community. That includes intrinsically motivated developers (which tend to help with new features), and extrinsically (paid) motivated developers (which tend to help with unit tests and maintenance). Business members can accelerate development of any milestone by purchasing PSF tokens and rewarding developers with them.

## Major Milestones Achieved

- Create documentation to describe the [Cash Stack](https://cashstack.info).
- Create a proposal voting process using SLP tokens.
- Create end-to-end encrypted (ee2e) synchronous chat using Bitcoin Eliptic Curve encryption.
- Create ee2e 'email' allowing asynchronous communication with any BCH address.
- Create a mutable data protocol for SLP tokens, allowing changing token icons and tracking of changing data over time.
- Create a more reliable token indexer for SLP tokens.
- Create a [decentralized exchange](https://bch-dex-docs.fullstack.cash/) (DEX) for trading SLP tokens.

## Milestones Under Development

- [Cash Stack](https://cashstack.info)
  - Get [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet) to 100% test coverage.
  - Get [ipfs-service-provider](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider) to 100% test coverage.
  - Create better documentation for [minimal-slp-wallet](https://github.com/Permissionless-Software-Foundation/minimal-slp-wallet).
  - Create better documentation to explain the relationship between [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet), [ipfs-bch-wallet-consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer), and [ipfs-bch-wallet-service](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service), and the commands used by psf-bch-wallet to control the other two.
- [DEX](https://bch-dex-docs.fullstack.cash/)
  - Port existing 'sell' functionality to AVAX.
  - Port existing 'sell' functionality to eCash.
  - Build chat-bot interface.
  - Add OP_RETURN emergency remote controls.
- P2WDB
  - Create year-end migration plan.
  - Create 5-year database.
  - Experiment with moving to a public IPFS network.
  - Create a [Craigslist](https://portland.craigslist.org/) clone that uses P2WDB and the web3 Cash Stack as the back end.
- Bridges
  - Create bridge between PSF token and USDC.e on AVAX
  - Create a PSF token on eCash
  - Create bridge between PSF tokens on BCH and eCash
- Administration
  - Refactor chat.fullstack.cash to work with web3 Cash Stack.
  - Add email notification feature to psf-bch-wallet e2ee messages.
  - Create initial Minting Council
  - Have Minting Council practice rotating keys
  - Set up quartly key rotation meetings.
  - Air-drop new PSF token with token icon and mutable data.

Want clarification on the above items? See something interesting that you'd like to contribute to? Ask about it in the [PSF Telegram Channel](https://t.me/permissionless_software).
