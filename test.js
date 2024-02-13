const priceToSqrtPrice = (price, token0Decimals, token1Decimals) => {
    const decimalAdjustment = 10 ** (token0Decimals - token1Decimals);
    const mathPrice = price / decimalAdjustment;
  
    let sqrtPriceX96 = Math.floor(Math.sqrt(mathPrice) * 2 ** 96);
    return BigInt(sqrtPriceX96);
  };
  
  // Fill in the variables with your specific scenario
  const price = 1 / 4000; // The price of 1 token1 in terms of token0
  const token0Decimals = 18; // Decimals for token0
  const token1Decimals = 18; // Decimals for token1
  
  // Call the function with the filled variables
  const sqrtPriceX96 = priceToSqrtPrice(price, token0Decimals, token1Decimals);
  
  // Log the result
  console.log(`sqrtPriceX96: ${sqrtPriceX96.toString()}`);
  