// Ques 5 - Best time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// Input: prices = [7,1,5,3,6,4] Output: 5
// Input: prices = [7,6,4,3,1] Output: 0

// ======== Bruteforce approach ========
// const maxProfit = function(prices) {
//     let globalProfit = 0;

//     for(let i=0; i<prices.length - 1; i++){
//         for(let j=i+1; j<prices.length; j++){
//             const currentProfit = prices[j] - prices[i]
//             if(currentProfit > globalProfit) globalProfit = currentProfit
//         }
//     }

//     return globalProfit;
// };



// ======== Geedy algorithm approach ========

// [7,1,5,3,6,4]
// 1st step:
// min=7
// profit=0

// 2nd step:
// min= 1
// profit= 5-1= 4

// 3rd step: 
// min= 1
// profit= 3- 1= 2

// 4th step:
// min=1
// profit=6-1= 5 (highest, so it will override)

// 5th step:
// min=1
// profit=4-1=3

const maxProfit = function (prices) {
    let minStockPrice = prices[ 0 ] || 0
    let profit = 0;

    for (let i = 1; i < prices.length; i++)
    {
        if (prices[ i ] < minStockPrice)
        {
            minStockPrice = prices[ i ]
        }
        profit = Math.max(profit, prices[ i ] - minStockPrice);
    }
    return profit
};




console.log(maxProfit([ 7, 1, 5, 3, 6, 4 ]));