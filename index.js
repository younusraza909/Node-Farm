const fs = require("fs");
const http = require("http");
const url = require("url");

//*****************Blocking, synchrounous Way***************//
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about the avacodo ${textIn}.\n Created on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Has Been Written");

//*************Non-Blocking, Asynchrounous Way**************//

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR !");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("File Has Been Written");
//       });
//     });
//   });
// });

// console.log("Reading Files.....");

//*****************Building A simple Web Server ************//
const server = http.createServer((req, res) => {
  //it give us current url
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This Is The Overview");
  } else if (pathName === "/product") {
    res.end("This Is The Product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("The Server Has Been Started");
});
