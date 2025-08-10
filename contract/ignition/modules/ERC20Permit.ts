// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const ERC20PermitModule = buildModule('ERC20PermitModule', m => {
  const name = m.getParameter('name', 'Japan Smart Chain Token');
  const symbol = m.getParameter('symbol', 'JSC');
  const decimals = m.getParameter('decimals', 18);

  const erc20Permit = m.contract('ERC20Permit', [name, symbol, decimals]);

  return { erc20Permit };
});

export default ERC20PermitModule;
