---
sidebar_position: 3
---

# Minting Council
This page contains guidance for members of the Minting Council, and describes the workflows required to participate. Working with multisignature wallets is complex, and as a result, each member of the Minting Council is required to be technically proficient. They should be experience JavaScript developers and be comfortable using the [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet) command line app.

The Minting Council does not have any autonomy. They should never coordinate on their own volition, but only take direction from the results of a governance proposal, after being voted on by Governance NFT holders.

<iframe width="639" height="359" src="https://www.youtube.com/embed/FOQITW4DTIw" title="Intro: Minting Council" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Tracking Members
Each member of the Minting Council is given an NFT, which acts like a homing beacon to track the members Bitcoin Cash address and public key. The public key is required to send the members end-to-end encrypted (**e2ee**) messages, and to send them multisignature transaction for them to sign.

Executing the [`mc-collect-keys` command](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet#psf-bch-wallet-mc-collect-keys) in psf-bch-wallet will show the addresses and public keys for all Minting Council NFT holders.

## Initiating a Transaction
Once a governance proposal has been been voted on, a member of the [The Management](/governance#the-management) will initiate a multisignature (**multisig**) transaction. The most common form of multisig transaction is the quarterly update to the [P2WDB](https://p2wdb.com) write price. This price is set in PSF tokens, and needs to be updated each quarter to reflect the price of $0.01 USD in PSF tokens.

An update to the P2WDB write price is initiated by executing the [`mc-update-p2wdb-price` command](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet#psf-bch-wallet-mc-update-p2wdb-price). This command will execute the following workflow:

- It looks up the public keys for each Minting Council NFT holder.
- Those public keys are used to generate a multisig wallet.
- A multig transaction (**TX**) is generated to update the P2WDB write price.
- The TX is sent to each Minting Council member through an e2ee message.

The member of the Management who initiated the transaction, will also announce the following information on the [VIP Telegram channel](https://t.me/psf_vip):

- The *subject* of the message used to send the transaction to each Minting Council member.
- The *address* the message was sent from.

## Reviewing and Signing a Transaction
An unsigned multisig transaction will be sent out to each member of the Minting Council through an e2ee message. New messages can be seen by running the [`msg-check` command](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet#psf-bch-wallet-msg-check). Normal e2ee messages can be read with the [`msg-read` command](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet#psf-bch-wallet-msg-read), and Minting Council transaction proposal messages can be reviewed with the [`mc-read-tx` command](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet#psf-bch-wallet-mc-read-tx).

To avoid scams, each member of the Minting Council should perform the following actions to ensure the integrity of the transaction:

- The *subject* of the message should match the one announced in the VIP Telegram channel. The subject is displayed when running the `msg-check` command.
- They *sender* of the message should match the address announced in the VIP Telegram channel. The sender is displayed when running the `mc-read-tx` command.

Once the integrity of the transaction has been verified, members of the Minting Council can sign their input by executing the [`mc-sign-tx` command](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet#psf-bch-wallet-mc-sign-tx). This will sign their input and send the signature back to the originator.

## Finalizing a Transaction
The member of the Management who initiated the transaction can finalize the transaction once enough signatures have been sent back to them to satisfy the *50% + 1* signature threshold. The transaction is signed and broadcast by executing the [`mc-finish` command](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet#psf-bch-wallet-mc-finish).
