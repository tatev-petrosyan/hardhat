Tesvan internship project with Hardhat/JS/Mocha/Chai/Ethers.

# My added testcases: 

1.Testcase "Check transfers" - add 100 tokens from owner to addr1 and check both account balances before and after
2.Testcase "Check name and symbol of the token" - Token should have predefined name and symbol.
3.Testcase "Check predefined total supply amount" - Token is assigned fixed amount of total supply.
4.Testcase "Check more then total supply transfer" - Do not allow transfer more token.

Learning to write automated JS testcases for smart contracts testing.

Steps to setup the project:
# Install node js on ubuntu
sudo apt update
sudo apt install curl git
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Hardhat
npm install --save-dev hardhat
Select Create an empty hardhat.config.js with your keyboard and hit enter.

# Install Hardhat plugins
npm install --save-dev @nomicfoundation/hardhat-toolbox





