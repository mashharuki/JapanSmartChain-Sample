import type { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox-viem';
import dotenv from 'dotenv';

dotenv.config();

const { PRIVATE_KEY, KAIGAN_RPC_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    kaigan: {
      url: KAIGAN_RPC_URL!,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
};

export default config;
