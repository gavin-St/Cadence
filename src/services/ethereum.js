import Web3 from 'web3';

export function initEthereum() {
  const web3 = new Web3('https://ropsten.infura.io/v3/7ecabd2a3f6f4f25a3665792dad9');
  return web3;
}