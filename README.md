Tesvan internship project with Hardhat/JS/Mocha/Chai/Ethers.

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

My added testcases: 

Testcase "Check transfers" - add 100 tokens from owner to addr1 and check both account balances before and after
