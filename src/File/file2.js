var fs = require("fs");
const path = require("path");

const SrcFolder = `${__dirname}/op/`;
const mynewfile3 = SrcFolder + "mynewfile3.txt";

function writeLogFile(logMessage, url = "") {
  debugger;
  let isLogged = false;
  try {
    let d = new Date();
    let monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let monthName = monthList[d.getMonth()].substring(0, 3);
    let date = d.getDate();
    date = date.toLocaleString().length > 1 ? date : "0" + date;
    let year = d.getFullYear();
    // https://umalpha.powerweaveonline.com/Punchout/Sep2024/PunchoutInfo_30Sep.txt
    let dirName = path.join(__dirname, "../" + "/Punchout");
    fnCreateDirectory(dirName);
    dirName = path.join(__dirname, "../" + "/Punchout/", monthName + year);
    fnCreateDirectory(dirName);
    let fileName = path.join(
      dirName,
      "PunchoutInfo_" + date + monthName + ".txt"
    );

    if (fs.existsSync(dirName)) {
      let jsonLog = JSON.stringify({ logMessage });
      let wrStream = fs.createWriteStream(fileName, { flags: "a" });
      wrStream.write("On " + d.toString());
      wrStream.write("\n");
      wrStream.write("Message:");
      wrStream.write("\n");
      wrStream.write(jsonLog);
      wrStream.write("\n");
      wrStream.write(
        "-------------------------------------------------------------------------------"
      );
      wrStream.write("\n");
      wrStream.end();
      /*
      fs.writeFileSync(fileName, jsonLog, "utf8", function (err, res) {
        if (err) {
          console.error("Error in writing Log error:", err.message);
          // sqlClient.createErrorLogs(
          //   "Error in writeFile() Log error:",
          //   err.message
          // );
        } else {
          isLogged = true;
        }
      });
       */
    }

    /*
    fs.exists(fileName, (e) => {
      if (e) {
        console.log("The directory already exists! error:", e.message);
      } else {
        fs.mkdirSync(fileName, (err) => {
          if (err) {
            console.log("The directory already exists!");
          } else {
            console.log("Successfully created a new directory");
          }
        });
        console.log("Successfully created a new directory");
      }
    }); */
  } catch (error) {
    console.error(url + " Error in writeLogFile catch error: ", error.message);
    // sqlClient.createErrorLogs(
    //   url + " Error in writeLogFile catch error: ",
    //   error.message
    // );
  }
  return isLogged;
}

const fnCreateDirectory = (dirName) => {
  try {
    if (dirName && !fs.existsSync(dirName)) {
      fs.mkdirSync(dirName);
      console.log("Successfully created a new directory", dirName);
    }
  } catch (e) {
    console.log("Error in fnCreateDirectory error: " + e.message);
  }
};

writeLogFile("This is test message 1");
