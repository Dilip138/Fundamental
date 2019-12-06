class StockAcount {
    constructor(sName, NoOfShares, SharePrice) {
        this.stoskName = sName
        this.NoOfShare = NoOfShares
        this.SharePrice = SharePrice
    }
    total() {
        return this.NoOfShare * this.SharePrice

    }
}
class Stock extends StockAcount {
    constructor(sName, NoOfShare, SharePrice) {
        super(sName, NoOfShare, SharePrice)
    }
}
module.exports =
    Stock
