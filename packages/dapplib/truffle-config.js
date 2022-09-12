require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift raise stereo umbrella inflict end army genius'; 
let testAccounts = [
"0xcb0b088ba54f9947ce6c8fa9d7e7f0fcc574e83bf914e54f35f0fcb5aef7b3f6",
"0xf785a44a68e5511dc7c2ba78de62d002867376c06e6486b238d8a56dc9e3f2a8",
"0x5f16ed50c36ec64a838cbcc1ef42c49ff0959d4fa773ecd11675ebcc5b589f1d",
"0x64bc177fa5b66c77b86a05ec6b1bfba3d68eb68ddc8bd10d706da70b5af406bc",
"0x6503ba3196648181635df08ceb11b004c60cfcd4d6c585c064df2472fde5b2a8",
"0x44d190fd2c0237b0a344be4ceaf28a807ef96663f3240ff1e3a0f9e0ab32f7d5",
"0xacc67402d9f40180c36b66e27424d7db203ff743b44df11e62f5b1620b542f73",
"0xe99e2c2418156d2f8d153cb13ce37ffc9e180107fa89fac16d3870911f9edd9e",
"0x8bca4330c104db72f84ce9099c0d96f69d3eddea4907bbba5daf1f03caf0e5d9",
"0x7371f2e919183894d311edefbe4b6dabec16e9b23a3e58f8aeb6d2f84b085fa5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


