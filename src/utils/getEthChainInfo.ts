export const getEthChainInfo = () => {
    let chainId: number = 56;
    let rpcUrl: string = 'https://bsc-dataseed.binance.org/';
    let ethscanType: string = '';
    const href = window.location.href;
    if (/\/\/farm.lto.network/.test(href)) {
         chainId = 56;
         rpcUrl = 'https://bsc-dataseed.binance.org/';
         ethscanType = '';
    }
    return {
        chainId,
        rpcUrl,
        ethscanType
    }
};
