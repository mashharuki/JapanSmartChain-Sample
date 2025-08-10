// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const GaslessEcosystemModule = buildModule('GaslessEcosystemModule', m => {
  // ERC20Permit token deployment
  const tokenName = m.getParameter('tokenName', 'Japan Smart Chain Token');
  const tokenSymbol = m.getParameter('tokenSymbol', 'JSC');
  const tokenDecimals = m.getParameter('tokenDecimals', 18);

  const erc20Permit = m.contract('ERC20Permit', [tokenName, tokenSymbol, tokenDecimals]);

  // GaslessTokenTransfer contract deployment
  const gaslessTokenTransfer = m.contract('GaslessTokenTransfer', []);

  return { 
    erc20Permit, 
    gaslessTokenTransfer 
  };
});

export default GaslessEcosystemModule;
