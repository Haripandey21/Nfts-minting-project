export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    const image_url =
      "https://raw.githubusercontent.com/haripandey21/Nfts-minting-project/main/my-app/public/cryptodevs/";
    res.status(200).json({
      name: "Blocks_eater_gift #" + tokenId,
      description: "Solidity Logo.Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum",
      image: image_url + tokenId + ".svg",
    });
  }
