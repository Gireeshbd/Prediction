const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

async function main() {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const arguments = [
        "0x887f177CBED2cf555a64e7bF125E1825EB69dB82",
        "0x36302fc5725D4F6Bd48CD4F1D71544e130785bc8",
        "0x36302fc5725D4F6Bd48CD4F1D71544e130785bc8",
        "300",
        "10",
        ethers.utils.parseEther("0.001"),
        10,
        6,
    ]

    const prediction = await deploy("SilverlinePredictionV2", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: 6,
    })

    console.log(prediction.address)
}

main()
