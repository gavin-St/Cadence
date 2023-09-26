import { connect, keyStores, WalletConnection } from 'near-api-js';

export async function initNear() {
  const near = await connect({
    networkId: 'default',
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() }
  });
  
  const wallet = new WalletConnection(near);
  const account = wallet.account();
  
  return { near, wallet, account };
}