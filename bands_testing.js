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
const bands_input = [
    // BAND 700MHZ Details. Add allocations and uplink/downlink for any new bands in below format
    {
        name: "700MHz B28A", information: ``, uplink: [703, 733], downlink: [758, 788], type: "FDD", expanded: false, allocations: [
            { operator: "OP1", start: 703, end: 713, additionalinfo: `This is a sample allocation for operator OP1. Any notes for them can be written here` },
            { operator: "UNALLOCATED", start: 713, end: 733, additionalinfo: `This is a sample unallocated block of spectrum` },
            { operator: "Duplex", start: 733, end: 758, additionalinfo: `Duplex can be optionally added to indicate the spectrum block which cannot be allocated in the FDD.` },
            { operator: "OP1", start: 758, end: 768, additionalinfo: `This is a sample allocation for operator OP1. Notes like license cost/expiry dates may be added here` },
            { operator: "UNALLOCATED", start: 768, end: 788, additionalinfo: `This is a sample unallocated block of spectrum` },]
    },
    
    // BAND 800MHZ Details. Add allocations and uplink/downlink for any new bands in below format
    {
        name: "800Mhz B20", information: ``, uplink: [791, 821], downlink: [832, 862], type: "FDD", expanded: false, allocations: [
            { operator: "OP1", start: 791, end: 801, additionalinfo: `` },
            { operator: "OP2", start: 801, end: 811, additionalinfo: `<br/> LTE800 BAND.<br/><br/>Some long term plan here for the band<br/><br/>EARFCN = 6300<br/><br/><b>Allocation/Expiry</b><br/>801-811 : 1-1-2001, 1-1-2099` },
            { operator: "OP3", start: 811, end: 821, additionalinfo: `` },
            { operator: "Duplex", start: 821, end: 832, additionalinfo: `` },
            { operator: "OP1", start: 832, end: 842, additionalinfo: `` },
            { operator: "OP2", start: 842, end: 852, additionalinfo: `<br/> LTE800 BAND.<br/><br/>Some long term plan here for the band<br/><br/>EARFCN = 6300<br/><br/><b>Allocation/Expiry</b><br/>842-852 : 1-1-2001, 1-1-2099` },
            { operator: "OP3", start: 852, end: 862, additionalinfo: `` },]
    },
];