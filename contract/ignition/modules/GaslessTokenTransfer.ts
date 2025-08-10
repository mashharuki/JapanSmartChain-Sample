// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const GaslessTokenTransferModule = buildModule('GaslessTokenTransferModule', m => {
  const gaslessTokenTransfer = m.contract('GaslessTokenTransfer', []);

  return { gaslessTokenTransfer };
});

export default GaslessTokenTransferModule;
