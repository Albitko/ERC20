const Funner = artifacts.require('Funner')

contract('Funner', (accounts) => {
    
    before(async () => {
        funner = await Funner.deployed()
    })

    it('Gives the owner 1M tokens', async () => {
        let balance = await funner.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000000', "Balance should be 1M tokens")
    })

    it('Can transfer tokens between accounts', async () => {
        let amount = web3.utils.toWei('2000', 'ether')
        await funner.transfer(accounts[1], amount, { from: accounts[0]})
        let balance = await funner.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '2000', "Balance should be 2000 tokens")
    })
})