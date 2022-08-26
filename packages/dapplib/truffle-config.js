require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain purity hover ensure swift truth'; 
let testAccounts = [
"0xd36cfb65dd626de6b1512f449ae544fa969944bc7b0e7104ce579de87e59b031",
"0x4cbafe77fc590a214831d40eff771f8005799f3b8cf1432ba02caed297380fbc",
"0xc2a6e1ba5a09840b02bb216be7c434c291725b6bed05c48030c90e09db191402",
"0x723a762750a115eae696e9764814d5644bb72c52e042babca9fbabcdbb1b8f18",
"0x98ad4d2a20a12ce91b967ee20c8e15325a90ea5623ea0ebe98cc4a904f606ef1",
"0x0c939b2e33b4515ab794cb4da883e638b1d713d8f03bb9198c18da8eb62915df",
"0x4bdc6c3f112d66849ad8be7f042a86cd9147cae1602fab65c5b61949dbc3dddd",
"0xc891ad141322135f5d3e5cdb5133167972351819e3169e11604cbd7da77ff71d",
"0x9e60171277fe577c1d6fc5ac81b6e050cbbadf27bdba540abb5e810c1fd9f6da",
"0x82ae1fde36a301e3acf47ce4d9707cdad89d06b63dd86d6998ccfa55a97a3e1a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

