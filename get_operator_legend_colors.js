/*
MIT License

Copyright (c) [2025] [Ali Asgher Mansoor Habiby - aliasgherman@gmail.com]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/*
    This code tries to create Colors for unique operators based on the defined bands to be visualized.
    This is automatically called from the visualization page automatically.

*/
function getOperatorColors(bands) {
    // Extract all unique operators with full capitalization
    const operators = new Set();
    bands.forEach(band => {
        band.allocations.forEach(allocation => {
            operators.add(allocation.operator.toUpperCase()); // Convert to FULL UPPERCASE
        });
    });

    // Convert to array and filter out special cases
    const operatorArray = Array.from(operators).filter(op => op !== "UNALLOCATED" && op !== "DUPLEX");

    // Create a color scale for operators
    const colorScale = d3.scaleOrdinal()
        .domain(operatorArray)
        .range(d3.schemeCategory10); // Using D3's built-in color scheme

    // Build the operatorColors object
    const operatorColors = {};
    operatorArray.forEach(op => {
        operatorColors[op] = colorScale(op);
    });

    // Add special cases
    operatorColors["UNALLOCATED"] = "black";
    operatorColors["DUPLEX"] = "darkgray";

    return operatorColors;
}

function normalizeBands(bands) {
    return bands.map(band => ({
        ...band,
        name: band.name.toUpperCase(), // Convert band name to UPPER CASE
        allocations: band.allocations.map(allocation => ({
            ...allocation,
            operator: allocation.operator.toUpperCase() // Convert operator to FULL UPPERCASE
        }))
    }));
}