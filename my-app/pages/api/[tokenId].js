export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    const image_url =
      "https://raw.githubusercontent.com/haripandey21/Nfts-minting-project/main/my-app/public/cryptodevs/";
    res.status(200).json({
      name: "Blocks_eater_gift #" + tokenId,
      description: "One of the famous Temple of Nepal",
      image: image_url + tokenId + ".jpg",
    });
  }