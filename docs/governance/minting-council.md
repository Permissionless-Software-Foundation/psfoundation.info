---
sidebar_position: 3
---

# Minting Council
This page contains guidance for members of the Minting Council, and describes the workflows required to participate. Working with multisignature wallets is complex, and as a result, each member of the Minting Council is required to be technically proficient. They should be experience JavaScript developers and be comfortable using node.js, npm, and Linux command-line tools.

The Minting Council does not have any autonomy. They should never coordinate on their own volition, but only take direction from the results of a governance proposal, after being voted on by Governance NFT holders.

Each member of the Minting Council uses the [psf-mc-wallet](https://github.com/Permissionless-Software-Foundation/psf-mc-wallet) application to communicate with the other members, and to sign multisignature transactions.

## Tracking Members
Each member of the Minting Council is given an NFT, which acts like a homing beacon to track the members Bitcoin Cash address and public key. The public key is required to send the members end-to-end encrypted (**e2ee**) messages, and to send them the multisignature transactions for them to sign.

Executing the `mc-collect-keys` command in psf-msg-wallet will show the addresses and public keys for all Minting Council NFT holders.

## Updating the PSFFPP Write Price

The most common form of multisig transaction is the quarterly update to the [PSFFPP](https://psffpp.com) write price. This price is set in PSF tokens, and needs to be updated each quarter to reflect the price of $0.01 USD in PSF tokens.

An update to the PSFFPP write price is initiated by the 'Head Janitor', who executes the `mc-price-update` command. This command will execute the following workflow:

- It looks up the public keys for each Minting Council NFT holder.
- Those public keys are used to generate a multisig wallet.
- A multisig transaction (**TX**) is generated.
- The price of $0.01 USD worth of PSF tokens is calculated
- All data is uploaded and pinned by the [PSFFPP network](https://psffpp.com) on IPFS.
- The CID for the data is written to the BCH blockchain in an 'update transaction'.

The the command above will create an *Update Transaction* as per the [PS009 specification](https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps009-multisig-approval.md). Next, the Head Janitor will execute the `mc-approval` command to generate an *Approval Transaction*. This command will execute the following workflow:

- It looks up the public keys for each Minting Council NFT holder.
- Those public keys are used to generate a multisig wallet.
- A multig transaction (**TX**) is generated which *approves* the Update Transaction.
- The unsigned multisig transaction is sent to each member of the Minting Council via an E2EE message.

The Head Janitor will also announce the following information on the [VIP Telegram channel](https://t.me/psf_vip):

- The *TXID* of the Update Transaction.
- The *subject* of the message used to send the transaction to each Minting Council member.
- The *address* the message was sent from.

## Reviewing and Signing a Transaction
An unsigned multisig transaction will be sent out to each member of the Minting Council through an E2EE message. New messages can be seen by running the `msg-nostr-check` command. E2EE messages can be read with the `msg-nostr-read` command.

To avoid scams, each member of the Minting Council should perform the following actions to ensure the integrity of the transaction:

- The *subject* of the message should match the one announced in the VIP Telegram channel. The subject is displayed when running the `msg-nostr-check` command.
- They *sender* of the message should match the address announced in the VIP Telegram channel. The sender is displayed when running the `msg-nostr-read` command.
- Optionally, they can use the `-d` flag in the `msg-nostr-read` command to inspect the technical details of the multisignature transaction they are signing.

Once the integrity of the transaction has been verified, members of the Minting Council can sign their input by executing the `mc-sign-tx` command. This will sign their input and send the signature back to the originator.

## Finalizing a Transaction
The Head Janitor can finalize the transaction once enough signatures have been sent back to them to satisfy the *50% + 1* signature threshold. The transaction is signed and broadcast by executing the `mc-finish` command.
