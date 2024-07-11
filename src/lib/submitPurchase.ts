const THIRDWEB_PAY_DEV_URL =
  "https://pay-server-s25c-isaac-tw-hackatho-58f266.chainsaw-dev.zeet.app";

interface SubmitPurchaseParams {
  chainId: number;
  transactionHash: string;
  purchaseData: any;
}

// example purchase data
/*
 const data = {
    chainId: 137,
    transactionHash:
      "0xfcde0eaad195bfddec848bf93682828db3d92f3fbba75116969b2000996b66c7",
    purchaseData: {
      email: "isaac@thirdweb.com",
      itemId: 0,
      orderId: 0,
    },
  };
*/

export const submitPurchase = async (purchaseData: SubmitPurchaseParams) => {
  const url = `${THIRDWEB_PAY_DEV_URL}/experimental/purchase/v1`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": `${process.env.NEXT_PUBLIC_THIRDWEB_DEV_CLIENT_ID}`,
      },
      body: JSON.stringify(purchaseData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log("Purchase submitted successfully:", responseData);
  } catch (error) {
    console.error("Error submitting purchase:", error);
  }
};
